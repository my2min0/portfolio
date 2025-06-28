import React from "react";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";
import ProjectCard from "../common/ProjectCard";

const Project = () => {
    const projects = [
        {
            id: "portfolio",
            imgSrc: "/images/Portfolio_Main.png",
            imgAlt: "Portfolio",
            title: "Portfolio",
            url: "https://www.notion.so/Portfolio-21c34783aea980ac86e1e4aeca47961c?source=copy_link"
        },
        {
            id: "GenieQ",
            imgSrc: "/images/GenieQ_Main.png",
            imgAlt: "GenieQ",
            title: "GenieQ",
            url: "https://www.notion.so/GenieQ-1d934783aea98025a5c4cf504bf71756?source=copy_link"
        },
        {
            id: "library",
            imgSrc: "/images/천재의서재_Main.png",
            imgAlt: "천재의 서재",
            title: "천재의 서재",
            url: "https://www.notion.so/1e234783aea980c49e8de117da621b92?source=copy_link"
        },
        {
            id: "PlaNa",
            imgSrc: "/images/plana_main.png",
            imgAlt: "PlaNa",
            title: "PlaNa",
            url: "https://www.notion.so/PlaNa-21d34783aea980f9af0acfca47bf9e9f?source=copy_link"
        }
    ];

    const handleProjectClick = (url) => {
        if (url) {
            window.open(url, "_blank"); // 새 탭에서 열기
        } else {
            console.warn("URL이 없습니다.");
        }
    }

    return (
        <div className="min-h-[90vh] flex flex-col pt-32 md:pt-20 px-4 pb-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                {projects.map(( project ) => (
                    <ProjectCard
                        key={project.id}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        onCardClick={() => handleProjectClick(project.url)}
                    />
                ))}
                {/* 홀수 개일 때 빈 공간 */}
                {projects.length % 2 !== 0 && <div></div>}
            </div>
            
        </div>
    )
}

export default Project;