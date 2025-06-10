import React from 'react';
import LandingPage from './components/sections/LandingPage';
import AnimatedBackground from './components/common/AnimatedBackground';
import AboutMe from './components/sections/AboutMe';
import SkillAndTool from './components/sections/Skill&Tool';

const App = () => {
  return (
    <div className="App">
      <AnimatedBackground>
        <LandingPage />
        <AboutMe />
        <SkillAndTool />
      </AnimatedBackground>
    </div>
  );
};

export default App;