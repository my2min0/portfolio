import React, { useState, useRef } from 'react';

const App = () => {
  const [ mousePosition, setMousePosition ] = useState({ x : 0, y : 0})
  const [isHovering, setIsHovering] = useState(false);
  const textRef = useRef(null);

  // 마우스 이벤트 핸들러
  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  }
  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  const hoverTextStyle = {
    // 마스크 없을 때는 분홍색 레이어 숨기기
    opacity: isHovering ? 1 : 0,
    // 마스크 효과 (중요!)
    maskImage: isHovering
      ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
      : 'none',
    WebkitMaskImage: isHovering
      ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)`
      : 'none',
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-300/20 via-purple-300/30 to-pink-400/20">
      {/* 배경 그라디언트 오버레이들 */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>

      <div 
        className="relative cursor-pointer text-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={textRef}
      >
        {/* 첫 번째 레이어 : 흰색 테스트 (기본) */}
        <div className="text-white font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">FrontEnd Developer</h1> 
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-2">Welcome to Minyoung's Portfolio</h2>
        </div>

        {/* 두 번째 레이어 : 마우스 위치에 따라 색상이 변하는 텍스트 */}
        <div 
          className="absolute top-0 left-0 text-pink-400 font-bold transition-opacity duration-300"
          style={hoverTextStyle}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">FrontEnd Developer</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-2">Welcome to Minyoung's Portfolio</h2>
        </div>
      </div>

      {/* 커스텀 배경을 위한 스타일 */}
      <style jsx>{`
        .bg-gradient-radial {
          background: 
            radial-gradient(circle 500px at 25% 35%, rgba(255, 105, 180, 0.2) 0%, transparent 50%),
            radial-gradient(circle 400px at 10% 20%, rgba(255, 190, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle 500px at 75% 60%, rgba(230, 160, 200, 0.4) 0%, transparent 50%),
            radial-gradient(circle 450px at 90% 40%, rgba(221, 160, 221, 0.3) 0%, transparent 50%),
            radial-gradient(circle 700px at 95% 100%, rgba(255, 105, 180, 0.2) 0%, transparent 50%),
            radial-gradient(circle 250px at 45% 60%, rgba(200, 150, 225, 0.3) 0%, transparent 50%),
            radial-gradient(circle 250px at 55% 60%, rgba(200, 150, 255, 0.3) 0%, transparent 50%);
        }
      `}
      </style>
    </div>
  );
};

export default App;