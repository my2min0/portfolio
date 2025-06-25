import React, { useState, useRef } from "react";

const MaskText = ({
    children,
    className = "",
    maskSize = 200,
}) => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const [ isTouching, setIsTouching ] = useState(false);
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

    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
        if (!isTouching) { // 터치 중이 아닐 때만 마우스 이벤트 처리
            updatePosition(e.clientX, e.clientY);
        }
    };
    
    const handleMouseEnter = () => {
        if (!isTouching) {
            setIsHovering(true);
        }
    };
    
    const handleMouseLeave = () => {
        if (!isTouching) {
            setIsHovering(false);
        }
    };

    // 터치 이벤트 핸들러
    const handleTouchStart = (e) => {
        setIsTouching(true);
        setIsHovering(true);
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
        // preventDefault를 제거하여 스크롤 허용
    };

    const handleTouchMove = (e) => {
        if (isTouching) {
            const touch = e.touches[0];
            updatePosition(touch.clientX, touch.clientY);
            // 마스크 효과만 업데이트하고 스크롤은 방해하지 않음
        }
    };
    
    const handleTouchEnd = () => {
        setIsTouching(false);
        setIsHovering(false);
        // 터치 종료 후 약간의 지연을 두어 마우스 이벤트와 충돌 방지
        setTimeout(() => {
            setIsTouching(false);
        }, 100);
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
        color: "#89DFB7"
    };

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                touchAction: 'pan-y' // 세로 스크롤은 허용, 가로 제스처는 제한
            }}
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