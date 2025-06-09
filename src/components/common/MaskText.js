import React, { useState, useRef } from "react";

const MaskText = ({
    children,
    className = "",
    maskSize = 200,
}) => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);

    // 위치 업데이트 공통 함수
    const updatePosition = (clientX, clientY) => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (e) => {
        updatePosition(e.clientX, e.clientY);
    };
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // 터치 이벤트 핸들러
    const handleTouchMove = (e) => {
        e.preventDefault(); // 스크롤 방지
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    };
    const handleTouchStart = (e) => {
        setIsHovering(true);
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    };
    const handleTouchEnd = () => {
        setIsHovering(false);
    };

    // 마스크 효과 스타일
    const hoverTextStyle = {
        opacity: isHovering ? 1 : 0,
        maskImage: isHovering
            ? `radial-gradient(circle ${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
        WebkitMaskImage: isHovering
            ? `radial-gradient(circle ${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
        color: "#00FF7F"
    };

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* 첫 번째 레이어 - 기본 텍스트 */}
            <div 
                className={"text-white leading-none select-none drop-shadow-md"}
            >
                {children}
            </div>

            {/* 두 번째 레이어 - 마스크 효과 텍스트 */}
            <div
                className="absolute top-0 left-0 leading-none transition-opacity duration-300 select-none"
                style={hoverTextStyle}
            >
                {children}
            </div>
        </div>
    );
};

export default MaskText;