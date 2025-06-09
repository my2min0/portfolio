import React, { useState, useRef } from "react";
import MaskText from "../common/MaskText";

const LandingPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Front-End 큰 제목 */}
                <MaskText
                    className="mb-8 lg:mb-1 z-10"
                    maskSize={200}
                >
                    <h1 className="text-8xl lg:text-[10rem] tracking-tighter font-black">
                        Front-End
                    </h1>
                </MaskText>

                {/* 서브 타이틀 */}
                <div className="relative text-black font-medium z-20">
                    <p className="text-xl lg:text-3xl leading-relaxed -mt-14 lg:-mt-10">
                        문제 해결 능력을 갖춘 개발자 <b>이민영</b>입니다
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;