import React, { useState, useEffect } from 'react';
import LandingPage from './components/sections/LandingPage';
import AnimatedBackground from './components/common/AnimatedBackground';
import AboutMe from './components/sections/AboutMe';
import SkillAndTool from './components/sections/Skill&Tool';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';

const App = () => {
  const [ scrollProgress, setScrollProgress ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 전체 페이지의 80% 지점에서 스크롤 시작
      const transitionStartPoint = (documentHeight - windowHeight) * 0.8;
      const transitionDistance = (documentHeight - windowHeight) * 0.2;

      if (scrollY >= transitionStartPoint) {
        const progress = Math.min(1, (scrollY - transitionStartPoint) / transitionDistance);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="App relative">
      <div
        className="main-content relative z-20 drop-shadow-lg"
        style={{
          transform: `translateY(-${scrollProgress * 100}vh)`,
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
        }}
      >
        <AnimatedBackground>
          <LandingPage />
          <AboutMe />
          <SkillAndTool />
          <Project />
        </AnimatedBackground>
      </div>

      <div
        className="contact-section fixed inset-0 z-10"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 100}vh)`,
          transition: scrollProgress > 0 ? 'transform 0.1s ease-out' : 'none',
        }}
      >
        <Contact />
      </div>

      {/* 스크롤 공간 확보 */}
      <div style={{ height: '120vh' }}></div>
    </div>
  );
};

export default App;