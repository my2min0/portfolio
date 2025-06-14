import React, { useState } from "react";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";

const SkillAndTool = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ isAnimating, setIsAnimating ] = useState(false);

    // 카드 데이터
    const cards = [
        {
            id: 1,
            title: "Programming Languages & Database",
            proficient: ["Java", "JavaScript", "Oracle SQL"],
            familiar: ["Python"],
            tried: ["MyBatis", "JDBC", "JPA"]
        },
        {
            id: 2,
            title: "Framework & Library",
            proficient: ["React.js", "Vue.js", "HTML", "CSS", "Spring Boot"],
            familiar: ["JSP", "Servlet"],
            tried: ["JWT"]
        },
        {
            id: 3,
            title: "Development Tools & Collaboration",
            proficient: ["GitHub", "Notion", "Visual Studio Code", "IntelliJ IDEA", "ERD Cloud", "SQL Developer"],
            familiar: ["Figma", "Eclipse"],
            tried: ["DBeaver", "Swaggeer"]
        }
    ];

    const handleNext = () => {
        if (isAnimating) return; // 애니메이션 중이면 무시
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1) % 3);
        setTimeout(() => setIsAnimating(false), 500); // 애니메이션 시간에 맞춰서 상태 변경
    };

    const handlePrev = () => {
        if (isAnimating) return; // 애니메이션 중이면 무시
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1 + 3) % 3);
        setTimeout(() => setIsAnimating(false), 500); // 애니메이션 시간에 맞춰서 상태 변경
    }

    const getCardStyle = (index) => {
        const position = (index - currentIndex + 3) % 3;
        switch (position) {
            case 0 : // 맨 앞 카드
                return {
                    zIndex: 30,
                    transform: 'translateX(0) translateY(0)',
                    opacity: 1,
                };
            case 1: // 중간 카드
                return {
                    zIndex: 20,
                    transform: 'translateX(3%) translateY(5%)',
                    opacity: 0.9,
                };
            case 2: // 맨 뒤 카드
                return {
                    zIndex: 10,
                    transform: 'translateX(6%) translateY(10%)',
                    opacity: 0.8,
                };
            default:
                return {};
        }
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
                            Skill & Tool
                        </h1>
                    </div>
                </MaskText>
            </div>

            {/* Skill & Tool 메인 */}
            <div className="relative flex flex-col items-center justify-center">
                {/* 카드와 화살표 */}
                <div className="flex items-center justify-center w-full max-w-7xl gap-16 sm:gap-20 md:gap-24 lg:gap-28">
                    {/* 왼쪽 화살표 */}
                    <button onClick={handlePrev} disabled={isAnimating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7AC8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>

                    {/* 카드들 */}
                    <div className="relative w-[400px] h-[280px] sm:w-[600px] sm:h-[420px]
                                    md:w-[720px] md:h-[504px] lg:w-[800px] lg:h-[560px]">
                        {cards.map((card, index) => (
                            <div
                                key={ card.id }
                                className={`absolute bg-white drop-shadow-lg w-full h-full rounded-2xl p-8 
                                        border-[3px] border-[#89DFB7] transition-all duration-500 ease-out 
                                        ${isAnimating ? 'pointer-events-none' : ''}`}
                                style={ getCardStyle(index) }
                            >
                                {/* 카드 내용 */}
                                <div className="h-full">
                                    <h2 className="flex flex-col items-center text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
                                        { card.title }
                                    </h2>

                                    {/* Proficient 섹션 */}
                                    <div className="mb-4 w-full">
                                        <h3 className="text-base md:text-lg font-semibold text-green-600 mb-2">
                                            Proficient
                                        </h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {card.proficient.map((skill, index) => (
                                                <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Familiar 섹션 */}
                                    <div className="mb-4 w-full">
                                        <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
                                            Familiar
                                        </h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {card.familiar.map((skill, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tried 섹션 */}
                                    <div className="w-full">
                                        <h3 className="text-base md:text-lg font-semibold text-gray-600 mb-2">
                                            Tried
                                        </h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {card.tried.map((skill, index) => (
                                                <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 오른쪽 화살표 */}
                    <button onClick={handleNext} disabled={isAnimating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7AC8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SkillAndTool;