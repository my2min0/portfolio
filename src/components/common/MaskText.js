import React, { useState, useRef } from "react";

const MaskText = ({
    children,
    className = "",
    maskSize = 200,
}) => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);

    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (e) => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
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
        color: "#90EE90"
    };

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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