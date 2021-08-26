import React from 'react';

import LandingPage from './pages/LandingPage';
import CurrentWalk from './pages/CurrentWalk';
import Profile from './pages/Profile';
import StartNewWalk from './pages/StartNewWalk';
import TrailFinder from './pages/TrailFinder';
import Footer from './components/Footer';
import Header from './components/Header';
import TrailList from './components/TrailList';

function App() {
  return (
    <div>
      <Header/>
      <TrailList/>
      <LandingPage/>
      <Profile/>
      <TrailFinder/>
      <StartNewWalk/>
      <CurrentWalk/>
      <Footer/>
    </div>
  );
}

export default App;
