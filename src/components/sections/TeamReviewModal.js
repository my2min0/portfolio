import React from "react";
import ReviewMemo from "../common/ReviewMemo";

const TeamReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl max-w-md aspect-[16/12] md:max-w-2xl md:aspect-[16/10] w-full mx-4 shadow-2xl flex flex-col">
                {/* 맥북 사파리 st 헤더 */}
                <div className="bg-gray-200 rounded-t-2xl p-3 w-full group">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777711" class="size-6">
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
                    <div className="p-4 md:p-6 relative h-[420px] md:h-[600px]">
                        {/* <ReviewMemo
                            className="bg-[#] w-[%] -top-[] left-[] md:-top-[] md:left-[]"
                            textColor="#"
                            name=""
                            review=""
                        /> */}
                        <ReviewMemo
                            className="bg-[#A7E9AF] w-[30%] top-[1%] left-[15%] md:top-[1%] md:left-[15%]"
                            textColor="#1B5E20"
                            name="@천재교육 우OO"
                            review="민영님 최고 👍 항상 긍정적이고 문제 해결 능력이 뛰어나요."
                        />
                        <ReviewMemo
                            className="bg-[#B9FBC0] w-[35%] -top-[75px] left-[52%] md:-top-[100px] md:left-[52%]"
                            textColor="#00695C"
                            name="@천재교육 이OO"
                            review="든든한 사람 민영님과 함께라면 어떤 문제도 해결할 수 있을 것 같아요!"
                        />
                        <ReviewMemo
                            className="bg-[#DFFFD6] w-[33%] -top-[70px] left-[17%] md:-top-[110px] md:left-[16%]"
                            textColor="#355E3B"
                            name="@천재교육 최OO"
                            review="민영님은 항상 문제를 해결하는 데 창의적인 접근을 해요!"
                        />
                        <ReviewMemo
                            className="bg-[#A7E9AF] w-[30%] -top-[130px] left-[54%] md:-top-[190px] md:left-[54%]"
                            textColor="#134E4A"
                            name="@천재교육 정OO"
                            review="함께 일하는 게 정말 즐거워요!"
                        />
                        <ReviewMemo
                            className="bg-[#B2F2BB] w-[28%] -top-[115px] left-[13%] md:-top-[180px] md:left-[18%]"
                            textColor="#14532D"
                            name="@천재교육 김OO"
                            review="저는 살면서 이렇게 논리적으로 말을 잘하는 사람을 본 적이 없어요. 자기 일을 잘하는 건 그렇다고 해도 사람이 알게 모르게 따뜻한 건 반칙이에요."
                        />
                        <ReviewMemo
                            className="bg-[#C6F6D5] w-[28%] -top-[190px] left-[48%] md:-top-[290px] md:left-[51%]"
                            textColor="#22543D"
                            name="@동료 박OO"
                            review="꼼꼼하고 신뢰할 수 있는 팀원이에요!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamReviewModal;