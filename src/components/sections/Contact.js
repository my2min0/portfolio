import React, { useState, useEffect, useRef } from "react";
import ContactModal from "../common/ContactModal";

const Contact = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isHovered, setIsHovered ] = useState(false);
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
        <div className="h-screen bg-gray-100 p-8 flex items-center justify-center" ref={containerRef}>
            <div className="relative">
                <h1 
                    className="relative w-[900px] font-black text-[90pt] text-black tracking-wide text-center z-20 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer" 
                    onClick={() => setIsModalOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? "CLICK ME !" : "CONTACT ME !"}
                </h1>

                {/* 초록색 클로버 */}
                <div className="absolute -top-[270px] w-[480px] -rotate-6 z-10">
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
                <div className="absolute -top-[300px] -right-[0px] w-[450px] rotate-6 z-10">
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
                <div className="absolute top-[10px] right-[145px] w-[450px] z-10">
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

                <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    )
}

export default Contact;