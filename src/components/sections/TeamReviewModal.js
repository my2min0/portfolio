import React from "react";

const TeamReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">팀원 리뷰</h2>
            <p className="text-gray-600 mb-6">
                여기에 팀원 리뷰 내용이 들어갈 예정입니다.
            </p>
            <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200"
            >
                닫기
            </button>
            </div>
        </div>
    );
};

export default TeamReviewModal;