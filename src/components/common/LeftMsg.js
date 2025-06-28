import React from "react";

const LeftMsg = ({ message }) => {
    return (
        <div className="flex justify-start gap-2 mb-2">
            <div className="relative max-w-xs bg-white/90 p-3 text-base text-gray-800 mt-2 px-4 py-2 rounded-2xl rounded-tl-none shadow">
                {message}
            </div>
        </div>
    )
}

export default LeftMsg;