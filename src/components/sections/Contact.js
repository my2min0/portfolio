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

        // 눈동자가 움직일 수 있는 최대 거리
        const maxDistance = (eyeSize / 2) * 0.5;

        // 실제 움직일 거리
        const constrainedDistance = Math.min(maxDistance, distance);

        return {
            x: Math.cos(angle) * constrainedDistance,
            y: Math.sin(angle) * constrainedDistance
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8" ref={containerRef}>
            <div className="relative grid grid-cols-12 grid-rows-5 gap-0 items-center justify-center">
                {/* 초록색 클로버 */}
                <div className="col-span-4 row-start-1 flex justify-center items-end pb-2">
                    <div className="relative">
                        <img 
                            src="/images/clover.png" alt="clover" 
                            className="object-contain"
                        />

                        <div className="absolute top-[40px] left-6">
                            <div className="relative w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-6 h-6 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(80, 80, 32).x}px, ${calculatePupilPosition(80, 80, 32).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-6 right-6">
                            <div className="relative w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-6 h-6 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(120, 80, 32).x}px, ${calculatePupilPosition(120, 80, 32).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 빨간색 하트 */}
                <div className="col-span-4 col-start-5 row-start-1 flex justify-center items-end pb-2">
                    <div className="relative">
                        <img 
                            src="/images/heart.png" alt="heart" 
                            className="object-contain"
                        />

                        <div className="absolute top-4 left-4">
                            <div className="relative w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-4 h-4 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(240, 60, 24).x}px, ${calculatePupilPosition(240, 60, 24).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <div className="relative w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-4 h-4 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(280, 60, 24).x}px, ${calculatePupilPosition(280, 60, 24).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 하늘색 돌 */}
                <div className="col-span-4 col-start-4 row-start-2 flex justify-center items-start">
                    <div className="relative">
                        <img 
                            src="/images/rock.png" alt="rock" 
                            className="object-contain"
                        />

                        <div className="absolute top-2 left-6">
                            <div className="relative w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-4 h-4 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(180, 140, 24).x}px, ${calculatePupilPosition(180, 140, 24).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-2 right-6">
                            <div className="relative w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                <div 
                                    className="w-4 h-4 bg-black rounded-full transition-transform duration-100 ease-out"
                                    style={{
                                        transform: `translate(${calculatePupilPosition(220, 140, 24).x}px, ${calculatePupilPosition(220, 140, 24).y}px)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-span-12 row-span-3 row-start-2 flex items-center justify-center">
                <h1 className="font-black text-[100pt] text-gray-400 tracking-wide text-center">CONTACT ME !</h1>
            </div> */}
        </div>
    )
}

export default Contact;