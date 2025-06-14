import React from "react";

const ReviewMemo = ({
    className = "",
    textColor = "",
    name="",
    review = "",
}) => {
    return (
        <div className={`relative drop-shadow-lg rounded-sm p-3 md:p-4 ${className}`}>
            <div className="absolute left-[50%] transform -translate-x-1/2 
                            text-md -top-[13%] md:text-2xl md:-top-[10%]">
                🍀
            </div>
            <p className={`text-[${textColor}] font-medium text-[10px] mb-1 md:text-sm md:mb-2`}>
                {name}
            </p>
            <p className="text-xs md:text-base leading-tight">
                {review}
            </p>
        </div>
    );
};

export default ReviewMemo;