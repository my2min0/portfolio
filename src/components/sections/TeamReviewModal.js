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
                    <div className="p-4 md:p-6 relative">
                        {/* <ReviewMemo
                            className="bg-[#]"
                            textColor="#"
                            name=""
                            review=""
                        /> */}
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {/* 왼쪽 열 */}
                            <div className="space-y-4">
                                <ReviewMemo
                                    className="bg-[#A7E9AF]"
                                    textColor="#1B5E20"
                                    name="@천재교육 동기 우OO"
                                    review="프로젝트를 같이 하면서 책임감이 남다르다 라는 생각을 했습니다. 주어진 문제에 대한 해결 능력이 뛰어나며 회의나 기획적인 부분에서도 적극적으로 논리 정연하게 의견을 내고 좋은 결과물로 인도할 의견을 냅니다. 어떤 곳에서든 필요한 인재라고 생각합니다."
                                />
                                <ReviewMemo
                                    className="bg-[#DFFFD6]"
                                    textColor="#355E3B"
                                    name="@천재교육 동기 최OO"
                                    review="프론트엔드 리더를 맡아주신 덕분에 저는 인프라와 다른 문제 상황에 더 집중할 수 있었어요. 특히 디자인과 관련된 부분에서는 디자이너에 버금가는 미적 감각과 프론트엔드에 대한 깊은 이해를 바탕으로 완성도를 높여 나가는 모습이 인상적이었습니다. 주도적으로 해결책을 찾아가고, 의견을 적극적으로 표현해 주셔서 정말 든든했습니다. 다음에도 함께 프로젝트 해요~!"
                                />
                                <ReviewMemo
                                    className="bg-[#A7E9AF]"
                                    textColor="#134E4A"
                                    name="@천재교육 강사님 유OO"
                                    review="꼼꼼하고 신뢰할 수 있는 학생이에요!"
                                />
                                <ReviewMemo
                                    className="bg-[#B2F2BB]"
                                    textColor="#14532D"
                                    name="@천재교육 동기 김OO"
                                    review="저는 살면서 이렇게 논리적으로 말을 잘하는 사람을 본 적이 없어요. 자기 일을 잘하는 건 그렇다고 해도 사람이 알게 모르게 따뜻한 건 반칙이에요."
                                />
                            </div>

                            {/* 오른쪽 열 */}
                            <div className="space-y-4">
                                <ReviewMemo
                                    className="bg-[#B9FBC0]"
                                    textColor="#00695C"
                                    name="@천재교육 동기 이OO"
                                    review="맡은 일은 끝까지 책임지는 자세로, 빠진 기획도 먼저 찾아내고 팀과 조율해 반영했습니다.
                                    화면 컴포넌트나 폴더 구조 등 개발 시 팀의 편의를 고려해 체계적으로 일했습니다.
                                    회의에서 흐름이 어지러울 때 정확한 주제를 잡고 방향성을 정리해주는 역할을 했습니다.
                                    정리에 강해 문서 정리는 대부분 맡았고, 팀원 모두가 신뢰할 만큼 일처리가 정확했습니다."
                                />
                                <ReviewMemo
                                    className="bg-[#C6F6D5]"
                                    textColor="#22543D"
                                    name="@천재교육 동기 정OO"
                                    review="민영이는 똑부러지고 자신의 의견을 명확하게 전달하는 능력이 뛰어난 팀원입니다. 프론트엔드 개발을 맡아 사용자 입장을 고려한 화면을 세심하게 구현해주었고, 팀원들의 의견도 잘 반영해 조율해 나가는 태도가 인상적이었습니다.
                                    
                                    결정이 어려운 상황에서도 중심을 잘 잡아 방향을 제시해 주었고, 맡은 일은 항상 책임감 있게 마무리했습니다. 문제 상황에서도 먼저 나서서 해결하려는 태도와 실제 해결 능력 모두 훌륭했으며, 사소한 부분까지 배려하는 따뜻한 팀워크를 보여주었습니다. 함께할 수 있어 든든한 팀원이었습니다✨"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamReviewModal;