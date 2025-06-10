import React, { useState } from "react";
import MaskText from "../common/MaskText";

const SkillAndTool = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ isAnimating, setIsAnimating ] = useState(false);

    // 카드 데이터
    const cards = [
        {
            id: 1,
            title: "Language / Framework / Library",
            content: "JavaScript, TypeScript, React, Next.js, Redux, Node.js, Express"
        },
        {
            id: 2,
            title: "Tools / ",
            content: "Git, GitHub, Figma, Postman, VSCode, Webpack, Babel"
        },
        {
            id: 3,
            title: "Design / Animation",
            content: "CSS, Tailwind CSS, Framer Motion, GSAP"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clover-icon lucide-clover"><path d="M16.17 7.83 2 22"/><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"/><path d="m7.83 7.83 8.34 8.34"/></svg>
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
                                <div className="h-full flex flex-col justify-center items-center text-center">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
                                        { card.title }
                                    </h2>
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