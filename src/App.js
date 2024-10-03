// src/App.js
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureCards from './components/FeatureCards/FeatureCards';
import MainContent from './components/MainContent/MainContent';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import Authentication from './components/Authentication/Authentication';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [publicKey, setPublicKey] = useState(null);

  const handleAuthenticate = (key) => {
    setAuthenticated(true);
    setPublicKey(key);
  };

  const handleDisconnect = () => {
    setAuthenticated(false);
    setPublicKey(null);
  };

  return (
    <div className="App">
      {!authenticated ? (
        <Authentication onAuthenticate={handleAuthenticate} onDisconnect={handleDisconnect} />
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <main>
            <p>Welcome, your public key is: {publicKey}</p>
            <WeatherForecast />
            <FeatureCards />
            <MainContent />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;