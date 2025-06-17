import React from "react";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";

const Project = () => {

    return (
        <div className="min-h-[100vh] flex flex-col pt-32 md:pt-20 px-4 pb-20">
            <div className="flex">
                {/* 상단 제목 - 마스크 효과 */}
                <MaskText 
                    className="mb-12 text-left z-10"
                    maskSize={100}
                >
                    <div className="flex items-center gap-3 ml-2 md:ml-7">
                        <Clover/>
                        <h1 className="text-5xl md:text-7xl font-black">
                            Projects
                        </h1>
                    </div>
                </MaskText>
            </div>
        </div>
    )
}

export default Project;