import React from "react";

const LeftMsg = ({ message }) => {
    return (
        <div className="flex justify-start gap-2 mb-2">
            <div className="relative w-8 h-8 rounded-full bg-white text-gray-600 text-lg font-medium flex justify-center">
                <div className="w-8 h-8 relative left-[4px] top-[9px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="relative max-w-xs bg-white/90 p-3 text-base text-gray-800 mt-2 px-4 py-2 rounded-2xl rounded-tl-none shadow">
                {message}
            </div>
        </div>
    )
}

export default LeftMsg;