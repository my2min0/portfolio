import React from "react";
import MaskText from "../common/MaskText";

const LandingPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
            <style jsx>{`
                @keyframes slideUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .slide-up {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideUp 1.5s ease-out 1s forwards;
                }
            `}</style>
            <div className="max-w-4xl mx-auto text-center">
                {/* Front-End 큰 제목 */}
                <MaskText
                    className="mb-8 md:mb-1 z-10"
                    maskSize={200}
                >
                    <h1 className="text-7xl md:text-[10rem] tracking-tighter font-black">
                        Front-End
                    </h1>
                </MaskText>

                {/* 서브 타이틀 */}
                <div className="relative text-black font-medium z-20 slide-up">
                    <p className="text-lg md:text-3xl leading-relaxed -mt-14 md:-mt-10">
                        문제 해결 능력을 갖춘 개발자 <b>이민영</b>입니다
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;