import React, { useState } from "react";

const AnimatedBackground = ({ children }) => {
    const [ circles, setCircles ] = useState([]);
    const [ isInitialLoad, setIsInitialLoad ] = useState(true);

    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AnimatedBackground;