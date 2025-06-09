import React from "react";

const AboutMe = () => {
    const hashtags = [
        "#문제_해결_능력",
        "#리더십",
        "#협업_능력", 
        "#풀스택_교육_이수",
        "#책임감"
    ];

    return (
        <div className="min-h-screen flex flex-col item-center pt-20 px-4">
            <h1>AboutMe</h1>
            {/* 프로필 사진 */}
            <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img src="/images/Temp-Profile.png" alt="Profile" className="w-full h-full object-cover"/>
                </div>
            </div>

            {/* 해시태그 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl">
                {hashtags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>

            {/* 팀원 리뷰 버튼 */}
            <div>
                팀원 리뷰
            </div>
        </div>
    )
}

export default AboutMe;