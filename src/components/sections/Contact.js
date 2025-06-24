import React from "react";

const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="relative grid grid-cols-12 grid-rows-5 gap-0 items-center justify-center">
                {/* 초록색 클로버 */}
                <div className="col-span-4 row-start-1 flex justify-center items-end pb-2">
                    <img 
                        src="/images/clover.png" alt="clover" 
                        className="object-contain"
                    />
                </div>

                {/* 빨간색 하트 */}
                <div className="col-span-4 col-start-5 row-start-1 flex justify-center items-end pb-2">
                    <img 
                        src="/images/heart.png" alt="heart" 
                        className="object-contain"
                    />
                </div>

                {/* 하늘색 돌 */}
                <div className="col-span-4 col-start-4 row-start-2 flex justify-center items-start">
                    <img 
                        src="/images/rock.png" alt="rock" 
                        className="object-contain"
                    />
                </div>
            </div>
            {/* <div className="col-span-12 row-span-3 row-start-2 flex items-center justify-center">
                <h1 className="font-black text-[100pt] text-gray-400 tracking-wide text-center">CONTACT ME !</h1>
            </div> */}
        </div>
    )
}

export default Contact;