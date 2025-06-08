import React, {useState} from "react";

const LandingPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <div className="min-h-screen">
            <h1>Front-End</h1>
        </div>
    );
};

export default LandingPage;