import React from "react";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";
import ProjectCard from "../common/ProjectCard";

const Project = () => {
    const handleProjectClick = () => {
        console.log("프로젝트 카드가 클릭되었습니다.");
    };

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
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <ProjectCard
                        imgSrc="/images/Portfolio_Main.png"
                        imgAlt="Portfolio"
                        title="Portfolio"
                        onCardClick={handleProjectClick}
                    />
                    <ProjectCard
                        imgSrc="/images/천재의서재_Main.png"
                        imgAlt="천재의 서재"
                        title="천재의 서재"
                        onCardClick={handleProjectClick}
                    />
                    
                </div>
                <div>
                    <ProjectCard
                        imgSrc="/images/GenieQ_Main.png"
                        imgAlt="GenieQ"
                        title="GenieQ"
                        onCardClick={handleProjectClick}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Project;