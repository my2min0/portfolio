import React from "react";

const AboutMe = () => {
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
            <div>
                해시태그
            </div>

            {/* 팀원 리뷰 버튼 */}
            <div>
                팀원 리뷰
            </div>
        </div>
    )
}

export default AboutMe;