import React from "react";

const TeamReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl max-w-md md:max-w-2xl w-full mx-4 shadow-2xl aspect-[16/10]">
                {/* 맥북 사파리 st 헤더 */}
                <div className="bg-gray-200 rounded-t-lg p-3 w-full group">
                    <div className="flex items-center space-x-2" onClick={onClose}>
                        <div className="relative w-4 h-4 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer transition-colors">
                            <div className="absolute inset-0 text-red-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B0000" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B8860B" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#228B22" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                            </div>
                        </div>
                        {/* 팀원 리뷰 타이틀 */}
                        <p className="absolute left-[56%] top-[3.3%] text-sm sm:top-[2.5%] sm:text-base md:left-[65%] md:top-[1.5%] md:text-xl font-bold text-[#1B5E20] mb-4">Team Talks: About Me !</p>
                    </div>
                </div>

                {/* 팀원 리뷰 메인 공간 */}
                <div className="absolute top-[20%] md:top-[15%] left-[18%] bg-[#D7F9DF] w-[130px] md:w-[190px] drop-shadow-lg p-4">
                    <p className="absolute text-lg md:text-2xl top-[-14%] md:top-[-15%] left-[45%]">🍀</p>
                    <p className="text-[10px] md:text-sm text-[#1B5E20] mb-2">@천재동기 우OO</p>
                    <p className="text-xs md:text-base">민영님 최고<br/></p>
                </div>
                
            </div>
        </div>
    );
};

export default TeamReviewModal;