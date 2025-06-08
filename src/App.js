import React from 'react';
import LandingPage from './components/sections/LandingPage';
import AnimatedBackground from './components/common/AnimatedBackground';

const App = () => {
  return (
    <div className="App">
      <AnimatedBackground>
        <LandingPage />

      </AnimatedBackground>
    </div>
  );
};

export default App;