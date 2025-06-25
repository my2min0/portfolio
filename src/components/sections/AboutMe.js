import React, { useState, useEffect } from "react";
import TeamReviewModal from "./TeamReviewModal";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";

const AboutMe = ({ onOpenModal }) => {
    const [ isHovered, setIsHovered ] = useState(false);

    const hashtags = [
        "#문제_해결_능력",
        "#리더십",
        "#협업_능력", 
        "#풀스택_교육_이수",
        "#책임감"
    ];

    return (
        <div className="min-h-[80vh] flex flex-col pt-32 md:pt-20 px-4">
            <div className="flex">
                {/* 상단 제목 - 마스크 효과 */}
                <MaskText 
                    className="mb-12 text-left z-10"
                    maskSize={100}
                >
                    <div className="flex items-center gap-3 ml-2 md:ml-7">
                    <Clover/>
                        <h1 className="text-5xl md:text-7xl font-black">
                            About Me
                        </h1>
                    </div>
                </MaskText>
            </div>

            {/* 나머지 콘텐츠 중앙 정렬 */}
            <div className="flex flex-col items-center flex-1">
                {/* 프로필 사진 */}
                <div className="relative mb-8 flex justify-center">
                    <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                        <img src={isHovered ? "/images/Happy-Profile.png" : "/images/Temp-Profile.png" }alt="Profile" className="w-full h-full object-cover transition-all duration-300 ease-in-out"/>
                    </div>
                </div>

                {/* 해시태그 */}
                <div className="mb-8">
                    <div className="flex flex-col items-center">
                        {/* 첫 번째 줄 3개 */}
                        <div className="flex gap-2 md:gap-4 justify-center mb-1">
                            {hashtags.slice(0, 3).map((tag, index) => (
                                <span 
                                    key={index}
                                    className="text-gray-700 font-medium text-sm md:text-base"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* 두 번째 줄 2개 */}
                        <div className="flex gap-2 md:gap-4 justify-center">
                            {hashtags.slice(3, 5).map((tag, index) => (
                                <span 
                                    key={index}
                                    className="text-gray-700 font-medium text-sm md:text-base"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* 팀원 리뷰 버튼 */}
                <div className="flex justify-center">
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={onOpenModal}
                        className="bg-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        팀원 리뷰 보기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;