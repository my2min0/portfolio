import React from 'react';
import LandingPage from './components/sections/LandingPage';
import AnimatedBackground from './components/common/AnimatedBackground';
import AboutMe from './components/sections/AboutMe';

const App = () => {
  return (
    <div className="App">
      <AnimatedBackground>
        <LandingPage />
        <AboutMe />
      </AnimatedBackground>
    </div>
  );
};

export default App;