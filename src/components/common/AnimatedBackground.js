import React, { useState, useRef, useEffect } from "react";
import { circlePatterns } from "../../utils/circlePatterns";

const AnimatedBackground = ({ children }) => {
    const [ circles, setCircles ] = useState([]);
    const [ isInitialLoad, setIsInitialLoad ] = useState(true);
    const containerRef = useRef(null);
    const lastScrollY = useRef(0);

    // 랜덤 원 생성 함수
    const generateRandomCircle = (index, scrollOffset = 0) => {
        const pattern = circlePatterns[ index % circlePatterns.length ];

        // 랜덤 변화 추가
        const randomVariation = {
            x: ( Math.random() - 0.5 ) * 30,
            y: ( Math.random() - 0.5 ) * 20,
            size: pattern.size + ( Math.random() - 0.5 ) * 100,
        };

        // 스크롤 위치에 따른 Y 좌표 계산
        const windowHeight = window.innerHeight;
        const currentScrollY = window.scrollY;
        const baseY = scrollOffset === 0 
                        ? pattern.initialY 
                        : (currentScrollY / windowHeight) * 100 + (Math.random() * 80 + 10);
        return {
            id: `circle-${index}-${Date.now()}-${Math.random()}`,
            gradient: pattern.gradient,
            x: Math.max(0, Math.min(90, pattern.initialX + randomVariation.x)), // 0% ~ 90% 범위로 제한
            y: baseY + randomVariation.y, // 스크롤에 따라 Y 위치 조정
            size: Math.max(350, randomVariation.size), // 최소 크기 350px
            opacity: 0,
            scale: 0.5,
            animationDelay: scrollOffset === 0 ? Math.random() * -.8 : 0, // 초기 로딩시, 딜레이
        };
    };

    // 초기 로딩 애니메이션
    useEffect(() => {
        const timer = setTimeout(() => {
            const initialCircles = Array.from({ length: 8 }, (_, index) =>
                generateRandomCircle(index, 0)
            );
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
    
                    // 스크롤 거리 기준을 더 작게 조정 (화면 높이의 30% 마다)
                    const scrollThreshold = windowHeight * 0.3;

                    if (scrollY > lastScrollY.current + scrollThreshold) {
                        if (circles.length < 35) {
                            const newCircleIndex = circles.length;
                            const scrollOffset = Math.floor(scrollY / scrollThreshold);

                            // 2~3개의 원을 동시 생성
                            const newCircles = Array.from({ length: Math.floor(Math.random() * 2) + 2 }, (_, i) =>
                                generateRandomCircle(newCircleIndex + i, scrollOffset)
                            );
    
                            setCircles(prev => {
                                const updated = [...prev, ...newCircles];

                                // 새 원들을 순차적으로 나타나게 함
                                newCircles.forEach((newCircle, i) => {
                                    setTimeout(() => {
                                        setCircles(innerPrev =>
                                            innerPrev.map(circle => 
                                                circle.id === newCircle.id  ? { ...circle, opacity: 1, scale: 1 } : circle
                                            )
                                        );
                                    }, 100 + (i * 200)); // 각 원마다 200ms 간격
                                });
                                return updated;
                            });
                            lastScrollY.current = scrollY;
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isInitialLoad, circles.length]);

    return (
        <div ref={ containerRef } className="relative min-h-screen overflow-hidden">

            {/* 원 렌더링 영역 */}
            <div className="fixed inset-0 pointer-events-none z-10">
                { circles.map((circle) => (
                    <div
                        key={circle.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            left: `${circle.x}%`,
                            top: `${circle.y}%`,
                            background: circle.gradient,
                            transform: `translate(-50%, -50%) scale(${circle.scale})`,
                            opacity: circle.opacity,
                            transition: isInitialLoad
                                ? `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${circle.animationDelay}s`
                                : 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
            { isInitialLoad && (
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