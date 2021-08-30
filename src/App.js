import React from 'react';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import TrailFinder from './pages/TrailFinder';
import Walks from './pages/Walks'
import Footer from './components/Footer';
import './styles/style.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <header>
        <h1>There and Back Again</h1>
        <nav >
          <Link to='/'>Home</Link>
          <Link to='/profile'>My Profile</Link>
          <Link to='/trailfinder'>Trail Finder</Link>
          <Link to='/mywalks'>My Walks</Link>
        </nav>
      </header>
      </div>
        <div className="App">
          <Switch>
            <Route exact path='/'><LandingPage /></Route>
            <Route exact path='/profile'><Profile /></Route>
            <Route exact path='/trailfinder'><TrailFinder /></Route>
            <Route exact path='/mywalks'><Walks /></Route>
          </Switch>
          <Footer />
        </div>
  </Router>
      );
}

      export default App;
