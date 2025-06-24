import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    // 마우스 위치 추적
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, []);

    // 눈동자 위치 계산 함수
    const calculatePupilPosition = (eyeCenterX, eyeCenterY, eyeSize = 40) => {
        if (!containerRef.current) return { x: 0, y: 0 };

        const rect = containerRef.current.getBoundingClientRect();
        const absoluteEyeCenterX = rect.left + eyeCenterX;
        const absoluteEyeCenterY = rect.top + eyeCenterY;

        // 마우스와 눈 중심점 사이의 거리와 각도
        const deltaX = mousePosition.x - absoluteEyeCenterX;
        const deltaY = mousePosition.y - absoluteEyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // 눈동자가 50% 이상 보이도록 최대 거리 계산
        const whiteRedius = eyeSize / 2;
        const blackRedius = ( eyeSize * 0.7 ) / 2;
        const maxDistance = whiteRedius - ( blackRedius * 0.8 );

        // 실제 움직일 거리
        const constrainedDistance = Math.min(distance * 0.15, maxDistance);

        return {
            x: Math.cos(angle) * constrainedDistance,
            y: Math.sin(angle) * constrainedDistance
        }
    }
    return (
        <div className="h-screen bg-gray-100 p-8" ref={containerRef}>
            <div className="relative w-full h-full grid grid-cols-12 grid-rows-2 gap-0 items-center justify-center">
                {/* 초록색 클로버 */}
                <div className="w-[480px] col-span-6 row-start-1 ml-[90px] -mb-[50px] -rotate-6 flex justify-center items-end pb-2">
                    <div className="relative">
                        <img 
                            src="/images/clover.png" alt="clover" 
                            className="object-contain"
                        />

                        <div className="absolute top-[190px] left-[180px]">
                            <div className="relative w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[55px] h-[55px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(300, 280, 70).x}px, ${calculatePupilPosition(300, 280, 70).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[190px] right-[160px]">
                            <div className="relative w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[55px] h-[55px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(300, 280, 70).x}px, ${calculatePupilPosition(300, 280, 70).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 빨간색 하트 */}
                <div className="w-[450px] col-span-4 col-start-7 row-start-1 -ml-[50px] mb-[50px] rotate-6 flex justify-center items-end pb-2">
                    <div className="relative">
                        <img 
                            src="/images/heart.png" alt="heart" 
                            className="object-contain"
                        />

                        <div className="absolute top-[190px] left-[150px]">
                            <div className="relative w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[50px] h-[50px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(400, 280, 65).x}px, ${calculatePupilPosition(400, 280, 65).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[190px] right-[170px]">
                            <div className="relative w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[50px] h-[50px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(400, 280, 65).x}px, ${calculatePupilPosition(400, 280, 65).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 하늘색 돌 */}
                <div className="w-[450px] col-span-4 col-start-4 row-start-2 ml-[80px] flex justify-center items-start">
                    <div className="relative">
                        <img 
                            src="/images/rock.png" alt="rock" 
                            className="object-contain"
                        />

                        <div className="absolute top-[170px] right-[210px]">
                            <div className="relative w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[45px] h-[45px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(350, 450, 60).x}px, ${calculatePupilPosition(350, 450, 60).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[170px] right-[150px]">
                            <div className="relative w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-[45px] h-[45px] bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(350, 450, 60).x}px, ${calculatePupilPosition(350, 450, 60).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
                    <h1 className="font-black text-[90pt] text-black tracking-wide text-center">
                        CONTACT ME !
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Contact;