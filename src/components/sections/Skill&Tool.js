import React from "react";
import MaskText from "../common/MaskText";

const SkillAndTool = () => {


    return (
        <div className="min-h-[80vh] flex flex-col pt-32 md:pt-20 px-4">
            <div className="flex">
                {/* 상단 제목 - 마스크 효과 */}
                <MaskText 
                    className="mb-12 text-left z-10"
                    maskSize={100}
                >
                    <div className="flex items-center gap-3 ml-2 md:ml-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clover-icon lucide-clover"><path d="M16.17 7.83 2 22"/><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"/><path d="m7.83 7.83 8.34 8.34"/></svg>
                        <h1 className="text-5xl md:text-7xl font-black">
                            Skill & Tool
                        </h1>
                    </div>
                </MaskText>
            </div>
        </div>
    );
}

export default SkillAndTool;