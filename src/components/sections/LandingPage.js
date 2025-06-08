import React, { useState, useRef } from "react";

const LandingPage = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);
    
    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
        console.log('마우스 움직임!', e.clientX, e.clientY);
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