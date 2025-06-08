import React, { useState, useRef } from "react";

const LandingPage = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);
    
    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
            console.log('상대 위치 : ', e.clientX - rect.left, e.clientY - rect.top);
        }
    };
    const handleMouseEnter = () => {
        console.log('마우스 들어옴!');
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        console.log('마우스 나감!');
        setIsHovering(false);
    };

    // 마스크 효과 스타일
    const hoverTextStyle = {
        opacity: isHovering ? 1 : 0,
        maskImage: isHovering
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
        webkitMaskImage: isHovering
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
    }

    return (
        <div className="min-h-screen">
            <div className="relative"
                onMouseMove={ handleMouseMove }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >
                {/* 첫 번째 레이어 */}
                <h1 className="text-pink-100">
                    Front-End
                </h1>

                {/* 두 번째 레이어 */}
                <h1 className="absolute top-0 left-0 text-pink" style={hoverTextStyle}>
                    Front-End
                </h1>

            </div>
        </div>
    );
};

export default LandingPage;