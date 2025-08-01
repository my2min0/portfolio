import React, { useState, useEffect } from 'react';
import LandingPage from './components/sections/LandingPage';
import AboutMe from './components/sections/AboutMe';
import SkillAndTool from './components/sections/Skill&Tool';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';
import TeamReviewModal from './components/sections/TeamReviewModal';

const App = () => {
  const [ scrollProgress, setScrollProgress ] = useState(0);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // 기존 섹션들의 실제 높이를 계산
      const mainContent = document.querySelector('.main-content');
      if (!mainContent) return;

      const mainContentHeight = mainContent.scrollHeight;

      // 마지막 섹션이 화면에 거의 다 보일 때부터 전환 시작
      const transitionStartPoint = mainContentHeight - windowHeight * 1.5;
      const transitionDistance = windowHeight;

      if (scrollY >= transitionStartPoint) {
        const progress = Math.min(1, (scrollY - transitionStartPoint) / transitionDistance);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    // 초기 로딩 후와 리사이즈 시에도 체크
    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
  }, []);

  return (
    <div className="App relative">
      <div
        className="main-content relative z-20
        bg-gradient-to-tr from-[#B0F1C9] via-[#C9F5DA] to-[#B9F1B7]"
        style={{
          transform: `translateY(-${scrollProgress * 100}vh)`,
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
          touchAction: 'pan-y', // 세로 스크롤은 허용, 가로 제스처는 제한
        }}
      >
        <LandingPage />
        <AboutMe onOpenModal={() => setIsModalOpen(true)} />
        <SkillAndTool />
        <Project />
      </div>

      <div
        className="contact-section fixed inset-0 z-10"
        style={{
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
        }}
      >
        <Contact />
      </div>

      <TeamReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 스크롤 공간 확보 */}
      <div style={{ height: '100vh' }}/>
    </div>
  );
};

export default App;