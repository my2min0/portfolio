import React from "react";

const ProjectCard = ({ imgSrc, imgAlt, title }) => {

    return (
        <div className="flex justify-center">
        <div className="cursor-pointer transform transition-transform duration-300 hover:scale-[102%]">
            <div className="w-[360px] xl:w-[520px] bg-white drop-shadow-xl rounded-2xl m-5">
                {/* 맥북 사파리 st 헤더 */}
                <div className="bg-gray-200 rounded-t-2xl p-2 pl-3 w-full group flex items-center gap-2">
                    <div className="relative w-3 h-3 rounded-full bg-red-400"/>
                    <div className="relative w-3 h-3 rounded-full bg-yellow-500"/>
                    <div className="relative w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="h-[225px] xl:h-[325px] overflow-hidden">
                    <img 
                        src={imgSrc} 
                        alt={imgAlt} 
                        className="w-full h-full object-cover object-center rounded-b-2xl"/>
                </div>
            </div>
            <div >
                <p className="font-bold text-2xl text-center mb-4">{title}</p>
            </div>
        </div>
        </div>
    );
}

export default ProjectCard;