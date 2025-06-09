import React, { useState } from "react";
import TeamReviewModal from "./TeamReviewModal";

const AboutMe = () => {
    const [ isHovered, setIsHovered ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const hashtags = [
        "#문제_해결_능력",
        "#리더십",
        "#협업_능력", 
        "#풀스택_교육_이수",
        "#책임감"
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="min-h-screen lg:min-h-[120vh] flex flex-col item-center justify-center pt-20 px-4">
            <h1 className="text-4xl lg:text-6xl font-black">AboutMe</h1>
            {/* 프로필 사진 */}
            <div className="relative mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img src={isHovered ? "/images/Happy-Profile.png" : "/images/Temp-Profile.png" }alt="Profile" className="w-full h-full object-cover transition-all duration-300 ease-in-out"/>
                </div>
            </div>

            {/* 해시태그 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl">
                <div className="flex flex-wrap justify-center gap-4">
                    {/* 모바일은 개행 O 데스크탑은 개행 X */}
                    <div className="flex gap-4 w-full justify-center">
                        {hashtags.slice(0, 3).map((tag, index) => (
                            <span 
                                key={index}
                                className="text-gray-700 font-medium text-base"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 w-full justify-center">
                        {hashtags.slice(3, 5).map((tag, index) => (
                            <span 
                                key={index}
                                className="text-gray-700 font-medium text-base"
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
                    onClick={openModal}
                    className="bg-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    팀원 리뷰 보기
                </button>
            </div>

            {/* 팀원 리뷰 모달 */}
            <TeamReviewModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default AboutMe;