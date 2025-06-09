import React from "react";

const TeamReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl aspect-[16/10]">
                <div className="bg-gray-200 rounded-t-lg p-3 w-full">
                    <div className="flex items-center space-x-2" onClick={onClose}>
                        <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-600 cursor-pointer transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"></div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">팀원 리뷰</h2>
                <p className="text-gray-600 mb-6">
                    여기에 팀원 리뷰 내용이 들어갈 예정입니다.
                </p>
            </div>
        </div>
    );
};

export default TeamReviewModal;