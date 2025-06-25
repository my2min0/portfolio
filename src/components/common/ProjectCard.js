import React, { useState } from "react";

const ProjectCard = ({ imgSrc, imgAlt, title, onCardClick }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const handleImageError = () => {
        setHasError(true);
        setIsImageLoaded(true);
    };

    return (
        <div className="flex justify-center">
            <div 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-[102%]" 
                onClick={onCardClick}
                // 터치 이벤트 최적화
                style={{ touchAction: 'manipulation' }}
            >
                <div className="w-[360px] xl:w-[520px] bg-white drop-shadow-xl rounded-2xl m-5">
                    {/* 맥북 사파리 스타일 헤더 */}
                    <div className="bg-gray-200 rounded-t-2xl p-2 pl-3 w-full group flex items-center gap-2">
                        <div className="relative w-3 h-3 rounded-full bg-red-400" />
                        <div className="relative w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="relative w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    
                    <div className="h-[225px] xl:h-[325px] overflow-hidden relative">
                        {/* 로딩 스켈레톤 */}
                        {!isImageLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-b-2xl" />
                        )}
                        
                        {/* 에러 상태 */}
                        {hasError ? (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-b-2xl">
                                <div className="text-center text-gray-500">
                                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">이미지를 불러올 수 없습니다</p>
                                </div>
                            </div>
                        ) : (
                            <img 
                                src={imgSrc} 
                                alt={imgAlt}
                                className={`w-full h-full object-cover object-center rounded-b-2xl transition-opacity duration-300 ${
                                    isImageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                                loading="lazy" // 지연 로딩
                                decoding="async" // 비동기 디코딩
                                // 이미지 최적화를 위한 속성들
                                style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                    backfaceVisibility: 'hidden',
                                    willChange: 'transform',
                                }}
                            />
                        )}
                    </div>
                </div>
                
                <div>
                    <p className="font-bold text-2xl text-center mb-4">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;