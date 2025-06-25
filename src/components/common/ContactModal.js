import React from "react";
import LeftMsg from "./LeftMsg";
import RightMsg from "./\bRightMsg";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative rounded-2xl max-w-md md:max-w-md w-full mx-4 shadow-2xl flex flex-col bg-gradient-to-b from-[#E0EEE0] to-[#A0DDA0]">
                {/* 아이폰 카톡 화면 */}
                <div className="rounded-t-2xl p-3 flex justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className="text-lg">999+</p>
                    </div>

                    <div className="flex items-center">
                        <p className="text-xl">My Info</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex justify-end gap-2 mb-1">
                        <div className="relative max-w-xs bg-white/70 text-base text-gray-800 px-4 py-2 rounded-2xl rounded-br-none shadow">
                        궁금한 점이 있으시면
                        </div>
                    </div>

                    <RightMsg message="아래 연락처로 연락주세요!"/>
                    <LeftMsg message="📧 E-mail"/>
                    <RightMsg message="ffrf1234tina@gmail.com"/>
                    <LeftMsg message="📱 phone"/>
                    <RightMsg message="010-4098-4045"/>
                    <LeftMsg message="🔗 GitHub"/>
                    <RightMsg message="https://github.com/my2min0"/>
                </div>

                <div className="flex items-center justify-between bg-white/90 p-2 rounded-b-2xl">
                    <div className="flex items-center justify-center rounded-full w-8 h-8 bg-gray-300 text-gray-600 text-lg font-medium">
                        +
                    </div>
                    
                    <div className="flex-1 flex items-center justify-between bg-gray-200 rounded-full mx-2 px-4 py-2">
                        <span className="text-gray-500 text-sm">메시지 입력</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;