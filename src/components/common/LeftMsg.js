import React from "react";

const LeftMsg = ({ message }) => {
    return (
        <div className="flex justify-start gap-2 mb-2">
            <img src="/images/Clover.png" alt="profile" className="w-10 h-10 rounded-full bg-white-200"/>
            <div className="relative max-w-xs bg-white/90 p-3 text-base text-gray-800 mt-2 px-4 py-2 rounded-2xl rounded-tl-none shadow">
                {message}
            </div>
        </div>
    )
}

export default LeftMsg;