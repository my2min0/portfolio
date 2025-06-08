import React, { useState, useRef } from "react";

const LandingPage = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);

    return (
        <div className="min-h-screen">
            <h1>Front-End</h1>
        </div>
    );
};

export default LandingPage;