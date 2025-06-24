import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl max-w-md aspect-[16/12] md:max-w-2xl md:aspect-[16/10] w-full mx-4 shadow-2xl flex flex-col">
                {/* 맥북 사파리 스타일 헤더 */}
                <div className="bg-gray-200 rounded-t-2xl p-3 w-full group">
                    <div className="flex items-center space-x-2" onClick={onClose}>
                        <div className="relative w-4 h-4 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer transition-colors">
                            <div className="absolute inset-0 text-red-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8B0000" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#777711" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
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
                    </div>
                </div>

                {/* 연락처 정보 메인 공간 */}
                <div className="flex-1 rounded-b-2xl overflow-y-auto p-6">
                    <div className="space-y-6">
                        {/* 이메일 */}
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                            <h3 className="font-bold text-blue-800 mb-2">Email</h3>
                            <p className="text-blue-700">ffrf1234tina@gmail.com</p>
                        </div>

                        {/* 전화번호 */}
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <h3 className="font-bold text-green-800 mb-2">Phone</h3>
                            <p className="text-green-700">010-4098-4045</p>
                        </div>

                        {/* GitHub */}
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                            <h3 className="font-bold text-gray-800 mb-2">GitHub</h3>
                            <p className="text-gray-700">github.com/yourusername</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;