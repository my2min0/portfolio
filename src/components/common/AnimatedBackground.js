import React, { useState, useRef, useEffect, useMemo } from "react";
import { circlePatterns } from "../../utils/circlePatterns";

const AnimatedBackground = ({ children }) => {
    const [circles, setCircles] = useState([]);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const containerRef = useRef(null);
    const lastTriggerPoint = useRef(0);
    const isGeneratingRef = useRef(false); // 중복 생성 방지

    // 랜덤 원 생성 함수 - 메모이제이션 적용
    const generateRandomCircle = useMemo(() => 
        (index, absoluteY) => {
            const pattern = circlePatterns[index % circlePatterns.length];

            const randomVariation = {
                x: (Math.random() - 0.5) * 40,
                y: (Math.random() - 0.5) * 200,
                size: pattern.size + (Math.random() - 0.5) * 150,
            };

            return {
                id: `circle-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                gradient: pattern.gradient,
                x: Math.max(0, Math.min(90, pattern.initialX + randomVariation.x)),
                y: absoluteY + randomVariation.y,
                size: Math.max(300, randomVariation.size),
                opacity: 0,
                scale: 1,
                animationDelay: 0,
            };
        }, []
    );

    // 초기 로딩 애니메이션 - 원의 개수를 줄이고 최적화
    useEffect(() => {
        const timer = setTimeout(() => {
            const windowHeight = window.innerHeight;
            // 초기 원의 개수를 줄임 (8 -> 4)
            const initialCircles = Array.from({ length: 4 }, (_, index) => {
                const yPosition = Math.random() * windowHeight * 0.8 + windowHeight * 0.1;
                return generateRandomCircle(index, yPosition);
            });
            setCircles(initialCircles);

            setTimeout(() => {
                setCircles(prev => prev.map(circle => ({
                    ...circle,
                    opacity: 1,
                    scale: 1,
                })));
                setIsInitialLoad(false);
            }, 100);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [generateRandomCircle]);

    useEffect(() => {
        let ticking = false;
        let scrollTimeout;

        const handleScroll = () => {
            // 중복 실행 방지
            if (ticking || isGeneratingRef.current || isInitialLoad) return;

            ticking = true;
            
            // 스크롤 이벤트 디바운싱
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const windowHeight = window.innerHeight;

                    // 트리거 거리를 늘려서 생성 빈도 줄임
                    const triggerDistance = windowHeight * 0.8; // 0.4 -> 0.8
                    const currentTriggerPoint = Math.floor(scrollY / triggerDistance);

                    // 최대 원의 개수를 크게 줄임 (60 -> 20)
                    if (currentTriggerPoint > lastTriggerPoint.current && circles.length < 20) {
                        isGeneratingRef.current = true;
                        lastTriggerPoint.current = currentTriggerPoint;
                        
                        const baseY = scrollY + windowHeight;
                        // 새로 생성하는 원의 개수도 줄임
                        const numNewCircles = Math.floor(Math.random() * 3) + 1; // 2-10 -> 1-3

                        const newCircles = Array.from({ length: numNewCircles }, (_, i) => {
                            const yOffset = Math.random() * windowHeight * 1.2;
                            return generateRandomCircle(circles.length + i, baseY + yOffset);
                        });

                        setCircles(prev => {
                            const updated = [...prev, ...newCircles];
                            
                            // 애니메이션 지연 줄임
                            setTimeout(() => {
                                setCircles(innerPrev =>
                                    innerPrev.map(circle => ({
                                        ...circle, 
                                        opacity: 1, 
                                        scale: 1 
                                    }))
                                );
                                isGeneratingRef.current = false;
                            }, 20); // 50ms -> 20ms
                            
                            return updated;
                        });
                    }
                    ticking = false;
                });
            }, 50); // 디바운싱 지연 추가
        };

        if (!isInitialLoad) {
            // passive 옵션 유지하되 디바운싱 적용
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        
        return () => {
            clearTimeout(scrollTimeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInitialLoad, circles.length, generateRandomCircle]);

    // 원들을 메모이제이션으로 최적화
    const circleElements = useMemo(() => 
        circles.map((circle) => (
            <div
                key={circle.id}
                className="absolute rounded-full"
                style={{
                    width: `${circle.size}px`,
                    height: `${circle.size}px`,
                    left: `${circle.x}%`,
                    top: `${circle.y}px`,
                    background: circle.gradient,
                    transform: `translate3d(-50%, -50%, 0) scale(${circle.scale})`, // GPU 가속
                    opacity: circle.opacity,
                    transition: isInitialLoad
                        ? `opacity 0.8s ease-out ${circle.animationDelay}s, transform 0.8s ease-out ${circle.animationDelay}s`
                        : 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden', // 렌더링 최적화
                }}
            />
        )), [circles, isInitialLoad]
    );

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* 원 렌더링 영역 */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {circleElements}
            </div>

            {/* 메인 콘텐츠 */}
            <div className="relative z-20">
                {children}
            </div>

            {/* 초기 로딩 오버레이 */}
            {isInitialLoad && (
                <div
                    className="fixed inset-0 bg-white z-50 transition-opacity duration-1000"
                    style={{
                        opacity: isInitialLoad ? 1 : 0,
                        pointerEvents: isInitialLoad ? 'all' : 'none',
                    }}
                />
            )}
        </div>
    );
};

export default AnimatedBackground;