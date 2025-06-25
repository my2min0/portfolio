import React, { useState, useEffect, useCallback } from 'react';
import LandingPage from './components/sections/LandingPage';
import AnimatedBackground from './components/common/AnimatedBackground';
import AboutMe from './components/sections/AboutMe';
import SkillAndTool from './components/sections/Skill&Tool';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';
import TeamReviewModal from './components/sections/TeamReviewModal';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 스크롤 이벤트 최적화를 위한 throttle 함수
  const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  const handleScroll = useCallback(() => {
    // requestAnimationFrame으로 성능 최적화
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const mainContent = document.querySelector('.main-content');
      if (!mainContent) return;

      const mainContentHeight = mainContent.scrollHeight;
      const transitionStartPoint = mainContentHeight - windowHeight * 1.5;
      const transitionDistance = windowHeight;

      if (scrollY >= transitionStartPoint) {
        const progress = Math.min(1, (scrollY - transitionStartPoint) / transitionDistance);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    });
  }, []);

  // throttle 적용된 스크롤 핸들러
  const throttledHandleScroll = useCallback(
    throttle(handleScroll, 16), // 60fps 기준
    [handleScroll]
  );

  useEffect(() => {
    // 초기 로딩 후 체크
    const timeoutId = setTimeout(handleScroll, 100);

    // passive 옵션 제거하고 일반 이벤트 리스너 사용
    window.addEventListener('scroll', throttledHandleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll, throttledHandleScroll]);

  return (
    <div className="App relative">
      <div
        className="main-content relative z-20 bg-white"
        style={{
          transform: `translate3d(0, -${scrollProgress * 100}vh, 0)`,
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
          willChange: 'transform', // GPU 가속 활성화
        }}
      >
        <AnimatedBackground>
          <LandingPage />
          <AboutMe onOpenModal={() => setIsModalOpen(true)} />
          <SkillAndTool />
          <Project />
        </AnimatedBackground>
      </div>

      <div
        className="contact-section fixed inset-0 z-10"
        style={{
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
          willChange: 'transform', // GPU 가속 활성화
        }}
      >
        <Contact />
      </div>

      <TeamReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 스크롤 공간 확보 */}
      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default App;