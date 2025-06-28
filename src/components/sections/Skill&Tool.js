import React, { useState } from "react";
import MaskText from "../common/MaskText";
import Clover from "../common/Clover";

const SkillAndTool = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ isAnimating, setIsAnimating ] = useState(false);
    const [ showGuide, setShowGuide ] = useState(true);

    // 카드 데이터
    const cards = [
        {
            id: 1,
            title: "Programming Languages & Database",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24" fill="none" stroke="#2E6F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>,
            proficient: ["Java", "JavaScript", "HTML", "CSS", "Oracle SQL"],
            familiar: ["Python"],
            tried: ["JDBC"]
        },
        {
            id: 2,
            title: "Framework & Library",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24" fill="none" stroke="#2E6F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
            proficient: ["React.js", "Vue.js", "Spring Boot"],
            familiar: ["JSP", "Servlet"],
            tried: ["MyBatis", "JWT", "JPA"]
        },
        {
            id: 3,
            title: "Development Tools & Collaboration",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24" fill="none" stroke="#2E6F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench-icon lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
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

    const handleCardClick = () => {
        if (isAnimating) return; // 애니메이션 중이면 무시
        
        if (showGuide) {
            setShowGuide(false); // 가이드 숨기기
        } else {
            handleNext(); // 다음 카드로 이동
        }
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
        <div className="min-h-[80vh] flex flex-col pt-32 md:pt-20 px-4 pb-20">
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
                {/* 카드 */}
                <div className="flex items-center justify-center w-full max-w-7xl gap-5 md:gap-24">
                    <div className="relative w-[400px] h-[270px] -left-[10px] md:min-w-[720px] md:h-[400px]">
                        {cards.map((card, index) => (
                            <div
                                key={ card.id }
                                className={`absolute bg-white drop-shadow-lg w-full h-full rounded-2xl border-[#A7D9C4] transition-all duration-500 ease-out ${isAnimating ? 'pointer-events-none' : 'cursor-pointer'}
                                    p-3 border-[2px] 
                                    md:p-8 md:border-[3px]`}
                                style={ getCardStyle(index) }
                                onClick={handleCardClick}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    handleCardClick();
                                }}
                            >
                                {/* 카드 내용 */}
                                <div className="h-full">
                                    {/* 카드 헤더 */}
                                    <div className="flex items-center gap-2 md:gap-3 border-b border-[#2A6353]
                                        mb-3 pb-2
                                        md:mb-6 md:pb-5">
                                        { card.icon }
                                        <h2 className="text-[#2A6353] font-bold text-sm md:text-2xl">
                                            { card.title }
                                        </h2>
                                    </div>
                                    
                                    <div className="space-y-3 md:space-y-5">
                                        {/* Proficient 섹션 */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-1 md:mb-3">
                                                <p className="font-semibold text-[#176C46] text-xs md:text-lg">● Proficient</p>
                                                <span className="text-sm text-gray-500">({ card.proficient.length })</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {card.proficient.map((skill, index) => (
                                                    <span key={index} className="bg-[#B6EFD1] text-[#176C46] px-[5px] py-[2px] md:px-3 md:py-1 rounded-full font-medium text-[10px] md:text-sm">
                                                        { skill }
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Familiar 섹션 */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-1 md:mb-3">
                                                <h4 className="font-semibold text-[#2C705B] text-xs md:text-lg">● Familiar</h4>
                                                <span className="text-sm text-gray-500">({ card.familiar.length })</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {card.familiar.map((skill, index) => (
                                                    <span key={index} className="bg-[#D2F5E6] text-[#377A65] px-[5px] py-[2px] md:px-3 md:py-1 rounded-full font-medium text-[10px] md:text-sm">
                                                        { skill }
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tried 섹션 */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-1 md:mb-3">
                                                <h4 className="font-semibold text-[#537B6C] text-xs md:text-lg">● Tried</h4>
                                                <span className="text-sm text-gray-500">({ card.tried.length })</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {card.tried.map((skill, index) => (
                                                    <span key={index} className="bg-[#E7FAF2] text-[#5F837A] px-[5px] py-[2px] md:px-3 md:py-1 rounded-full font-medium text-[10px] md:text-sm">
                                                        { skill }
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 안내 오버레이 */}
                                { showGuide && (
                                    <div className="absolute inset-0 bg-[#D2FFD2] bg-opacity-90 rounded-xl flex items-center justify-center z-40 gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pointer-icon lucide-pointer"><path d="M22 14a8 8 0 0 1-8 8"/><path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/><path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
                                        <p className="text-black text-lg md:text-2xl font-semibold">
                                            클릭하면 다음 카드로 이동합니다
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillAndTool;