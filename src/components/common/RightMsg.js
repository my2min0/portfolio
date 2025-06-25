import React from "react";

const RightMsg = ({ message }) => {
    return (
        <div className="flex justify-end mb-3">
            <div className="relative max-w-xs bg-white/70 text-base text-gray-800 px-4 py-2 rounded-2xl rounded-tr-none shadow">
                {message}
            </div>
        </div>
    );
}

export default RightMsg;