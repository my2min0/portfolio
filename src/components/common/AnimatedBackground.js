import React, { useState, useRef, useEffect } from "react";
import { circlePatterns } from "../../utils/circlePatterns";

const AnimatedBackground = ({ children }) => {
    const [ circles, setCircles ] = useState([]);
    const [ isInitialLoad, setIsInitialLoad ] = useState(true);
    const containerRef = useRef(null);
    const lastTriggerPoint = useRef(0);

    // 랜덤 원 생성 함수
    const generateRandomCircle = (index, absoluteY) => {
        const pattern = circlePatterns[ index % circlePatterns.length ];

        // 랜덤 변화 추가
        const randomVariation = {
            x: ( Math.random() - 0.5 ) * 40,
            y: ( Math.random() - 0.5 ) * 200,
            size: pattern.size + ( Math.random() - 0.5 ) * 150,
        };

        return {
            id: `circle-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            gradient: pattern.gradient,
            x: Math.max(0, Math.min(90, pattern.initialX + randomVariation.x)), // 0% ~ 90% 범위로 제한
            y: absoluteY + randomVariation.y, // 절대 Y 위치
            size: Math.max(300, randomVariation.size), // 최소 크기 350px
            opacity: 0,
            scale: 1,
            animationDelay: 0,
        };
    };

    // 초기 로딩 애니메이션
    useEffect(() => {
        const timer = setTimeout(() => {
            const windowHeight = window.innerHeight;
            const initialCircles = Array.from({ length: 8 }, (_, index) => {
                const yPosition = Math.random() * windowHeight * 0.8 + windowHeight * 0.1;
                return generateRandomCircle(index, yPosition);
            });
            setCircles(initialCircles);

            // 애니메이션 시작
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
    }, []);

    useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
            if (!ticking && !isInitialLoad) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const windowHeight = window.innerHeight;
    
                    // 순수하게 스크롤 거리만 기준으로 함 (화면 높이의 40%마다)
                    const triggerDistance = windowHeight * 0.4;
                    const currentTriggerPoint = Math.floor(scrollY / triggerDistance);

                    // 새로운 트리거 포인트에 도달했을 때
                    if (currentTriggerPoint > lastTriggerPoint.current && circles.length < 60) {
                        lastTriggerPoint.current = currentTriggerPoint;
                        
                        // 현재 스크롤 위치 기준으로 아래쪽에 원들 생성
                        const baseY = scrollY + windowHeight; // 현재 화면 아래쪽
                        const numNewCircles = Math.floor(Math.random() * 7) + 2; // 4-6개

                        const newCircles = Array.from({ length: numNewCircles }, (_, i) => {
                            const yOffset = Math.random() * windowHeight * 1.2; // 다음 화면 범위에
                            return generateRandomCircle(circles.length + i, baseY + yOffset);
                        });

                        setCircles(prev => {
                            const updated = [...prev, ...newCircles];
                            
                            // 새 원들을 즉시 표시
                            setTimeout(() => {
                                setCircles(innerPrev =>
                                    innerPrev.map(circle => {
                                        const isNewCircle = newCircles.some(nc => nc.id === circle.id);
                                        return { ...circle, opacity: 1, scale: 1 };
                                    })
                                );
                            }, 50);
                            
                            return updated;
                        });
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        if (!isInitialLoad) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInitialLoad, circles.length]);

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* 원 렌더링 영역 */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {circles.map((circle) => (
                    <div
                        key={circle.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            left: `${circle.x}%`,
                            top: `${circle.y}px`,
                            background: circle.gradient,
                            transform: `translate(-50%, -50%) scale(${circle.scale})`,
                            opacity: circle.opacity,
                            transition: isInitialLoad
                                ? `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${circle.animationDelay}s`
                                : 'all 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // 자연스러운 확대 애니메이션
                            willChange: 'transform, opacity',
                        }}
                    />
                ))}
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