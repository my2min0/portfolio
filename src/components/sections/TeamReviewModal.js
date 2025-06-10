import React from "react";

const TeamReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl max-w-md aspect-[16/12] md:max-w-2xl md:aspect-[16/10] w-full mx-4 shadow-2xl flex flex-col">
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
                        <div className="absolute inset-0 flex items-top justify-end pointer-events-none pt-[6px] pr-[8px]">
                            <p className="text-xl font-bold text-[#1B5E20]">Team Talks: About Me !</p>
                        </div>
                    </div>
                </div>

                {/* 팀원 리뷰 메인 공간 */}
                <div 
                    className="flex-1 rounded-b-2xl overflow-y-auto overflow-x-hidden"
                    style={{
                        msOverflowStyle: "none", // IE 및 Edge에서 스크롤바 숨기기
                        scrollbarWidth: "none", // Firefox에서 스크롤바 숨기기
                    }}
                    onScroll={(e) => {
                        e.target.style.setProperty('--webkit-scrollbar', 'none'); // Chrome, Safari에서 스크롤바 숨기기
                    }}
                >
                    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                        {/* 민혁님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 top-[8%] left-[15%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @천재교육 우OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                민영님 최고 👍<br/>
                                항상 긍정적이고<br/>
                                문제 해결 능력이 뛰어나요.<br/>
                            </p>
                        </div>
                        {/* 예진님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 -top-[85px] left-[59%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @천재교육 이OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                든든한 사람<br/>
                                민영님과 함께라면<br/>
                                어떤 문제도 해결할 수 있을 것 같아요!<br/>
                            </p>
                        </div>
                        {/* 광훈님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 -top-[110px] left-[20%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @천재교육 최OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                민영님은 항상<br/>
                                문제를 해결하는 데<br/>
                                창의적인 접근을 해요!<br/>
                            </p>
                        </div>
                        {/* 다인님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 -top-[185px] left-[54%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @천재교육 정OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                함께 일하는 게<br/>
                                정말 즐거워요!<br/>
                            </p>
                        </div>
                        {/* oo님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 -top-[155px] left-[18%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @팀장 김OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                항상 팀을 위해<br/>
                                먼저 나서주는 민영님!<br/>
                                고마워요 😊
                            </p>
                        </div>
                        {/* oo님 리뷰 */}
                        <div className="relative bg-[#D7F9DF] drop-shadow-lg w-[28%] max-w-[180px] rounded-sm
                                        p-3 -top-[300px] left-[58%]
                                        md:p-4 md:top-[8%] md:left-[18%] ">
                            <div className="absolute left-[50%] transform -translate-x-1/2
                                            text-md -top-[13%]
                                            md:text-2xl md:-top-[10%]">
                                🍀
                            </div>
                            <p className="text-[#1B5E20] font-medium text-[10px] mb-1  md:text-sm md:mb-2">
                                @동료 박OO
                            </p>
                            <p className="text-xs md:text-base leading-tight">
                                꼼꼼하고 신뢰할 수 있는<br/>
                                팀원이에요!
                            </p>
                        </div>

                        {/* 하단 여백 */}
                        <div className="h-4"></div>
                    </div>
                </div>


                {/* <div className="relative min-h-[300px] md:min-h-[400px] bg-gray-50 rounded-b-xl overflow-hidden">
                    <div className="absolute bg-[#D7F9DF] drop-shadow-lg p-3 md:p-4 rounded-sm
                                    top-[8%] left-[18%] w-[28%] max-w-[180px]">
                        <div className="absolute text-md md:text-2xl -top-[13%] md:-top-[10%] left-[50%] transform -translate-x-1/2">
                            🍀
                        </div>
                        <p className="text-[10px] md:text-sm text-[#1B5E20] mb-1 md:mb-2 font-medium">
                            @천재교육 우OO
                        </p>
                        <p className="text-xs md:text-base leading-tight">
                            민영님 최고 👍<br/>
                            항상 긍정적이고<br/>
                            문제 해결 능력이 뛰어나요.<br/>
                        </p>
                    </div>
                    <div className="absolute bg-[#F0FFF0] drop-shadow-lg p-3 md:p-4 rounded-sm
                                    top-[18%] left-[55%] w-[28%] max-w-[180px]">
                        <div className="absolute text-md md:text-2xl -top-[13%] md:-top-[10%] left-[50%] transform -translate-x-1/2">
                            🍀
                        </div>
                        <p className="text-[10px] md:text-sm text-[#2E6F40] mb-1 md:mb-2 font-medium">
                            @천재교육 이OO
                        </p>
                        <p className="text-xs md:text-base leading-tight">
                            든든한 사람<br/>
                            민영님과 함께라면<br/>
                            어떤 문제도 해결할 수 있을 것 같아요!<br/>
                        </p>
                    </div>
                    <div className="absolute bg-[#ADEBB3] drop-shadow-lg p-3 md:p-4 rounded-sm
                                    top-[55%] left-[22%] w-[28%] max-w-[180px]">
                        <div className="absolute text-md md:text-2xl -top-[12%] md:-top-[11%] left-[50%] transform -translate-x-1/2">
                            🍀
                        </div>
                        <p className="text-[10px] md:text-sm text-[#2E6F40] mb-1 md:mb-2 font-medium">
                            @천재교육 최OO
                        </p>
                        <p className="text-xs md:text-base leading-tight">
                            민영님은 항상<br/>
                            문제를 해결하는 데<br/>
                            창의적인 접근을 해요!<br/>
                        </p>
                    </div>
                    <div className="absolute bg-[#A0DFB0] drop-shadow-lg p-3 md:p-4 rounded-sm
                                    top-[90%] left-[55%] w-[28%] max-w-[180px]">
                        <div className="absolute text-md md:text-2xl -top-[15%] md:-top-[13%] left-[50%] transform -translate-x-1/2">
                            🍀
                        </div>
                        <p className="text-[10px] md:text-sm text-[#2E6F40] mb-1 md:mb-2 font-medium">
                            @천재교육 정OO
                        </p>
                        <p className="text-xs md:text-base leading-tight">
                            함께 일하는 게<br/>
                            정말 즐거워요!<br/>
                        </p>
                    </div>
                </div> */}


                
                
            </div>
        </div>
    );
};

export default TeamReviewModal;