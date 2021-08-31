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
      <header className="section">
        <h1>There and Back Again</h1>
        <nav >
          <Link className="section" to='/'>Home</Link>
          <Link className="section" to='/profile'>My Profile</Link>
          <Link className="section" to='/trailfinder'>Trail Finder</Link>
          <Link className="section" to='/mywalks'>My Walks</Link>
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
