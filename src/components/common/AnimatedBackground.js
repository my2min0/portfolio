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

        return {
            id: `circle-${index}-${scrollOffset}`,
            gradient: pattern.gradient,
            x: Math.max(0, Math.min(90, pattern.initialX + randomVariation.x)), // 0% ~ 90% 범위로 제한
            y: pattern.initialY + ( scrollOffset / 100 ) + randomVariation.y, // 스크롤에 따라 Y 위치 조정
            size: Math.max(350, randomVariation.size), // 최소 크기 350px
            opacity: 0,
            scale: 0.5,
            animationDelay: Math.random() * 0.8, // 0~0.8초 사이의 랜덤 딜레이
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
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const windowHeight = window.innerHeight;
    
                    if (scrollY > lastScrollY.current + windowHeight * 0.5) {
                        const scrollOffset = Math.floor(scrollY / (windowHeight * 0.5));
                        const newCircleIndex = circles.length;
    
                        if (circles.length < 25) {
                            const newCircle = generateRandomCircle(newCircleIndex, scrollOffset);
    
                            setCircles(prev => {
                                const updated = [...prev, newCircle];
                                setTimeout(() => {
                                    setCircles(innerPrev =>
                                        innerPrev.map(circle =>
                                            circle.id === newCircle.id
                                                ? { ...circle, opacity: 1, scale: 1 }
                                                : circle
                                        )
                                    );
                                }, 100);
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
    
        if (!isInitialLoad) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInitialLoad]);

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
            <div className="relative z-10">
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