import React from "react";

const ReviewMemo = ({
    className = "",
    textColor = "",
    name="",
    review = "",
}) => {
    return (
        <div className={`relative drop-shadow-lg rounded-sm p-2 md:p-4 ${className}`}>
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