import React, { useState, useRef } from "react";

const LandingPage = () => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const textRef = useRef(null);
    
    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
            console.log('상대 위치 : ', e.clientX - rect.left, e.clientY - rect.top);
        }
    };
    const handleMouseEnter = () => {
        console.log('마우스 들어옴!');
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        console.log('마우스 나감!');
        setIsHovering(false);
    };

    // 마스크 효과 스타일
    const hoverTextStyle = {
        opacity: isHovering ? 1 : 0,
        maskImage: isHovering
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
        webkitMaskImage: isHovering
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
            : 'none',
    }

    // Front-End 타이틀 랜더링 함수
    const renderMainTitle = () => {
        return (
            <h1 className="font-black text-6xl md:text8xl lg:text-9xl tracking-tighter">
                Front-End
            </h1>
        );
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Front-End 큰 제목 */}
                <div className="relative cursor-pointer mb-8 lg:mb-1"
                    onMouseMove={ handleMouseMove }
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >
                    {/* 첫 번째 레이어 */}
                    <div className="text-pink-100 leading-none select-none">
                        { renderMainTitle() }
                    </div>

                    {/* 두 번째 레이어 : 마우스 위치에 따라 마스크 효과 적용 */}
                    <div className="absolute text-pink-400 top-0 left-0 leading-none transition-opacity duration-300 select-none" style={ hoverTextStyle }>
                        { renderMainTitle() }
                    </div>
                </div>

                {/* 서브 타이틀 */}
                <div className="text-black font-medium">
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                        문제 해결 능력을 갖춘 개발자 <b>이민영</b>입니다
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LandingPage;