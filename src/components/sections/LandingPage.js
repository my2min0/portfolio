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

    return (
        <div className="min-h-screen">
            <div
                onMouseMove={ handleMouseMove }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >
                <h1>Front-End</h1>
            </div>
        </div>
    );
};

export default LandingPage;