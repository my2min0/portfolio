import React from "react";

const AnimatedBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AnimatedBackground;