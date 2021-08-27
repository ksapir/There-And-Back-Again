import React from 'react';
import LandingPage from './pages/LandingPage';
import CurrentWalk from './pages/CurrentWalk';
import Profile from './pages/Profile';
import StartNewWalk from './pages/StartNewWalk';
import TrailFinder from './pages/TrailFinder';
import Footer from './components/Footer';
import TrailList from './components/TrailList';
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
          <Link ato='/'>Home</Link>
          <Link to='/profile'>My Profile</Link>
          <Link to='/startnewwalk'>Start New Walk</Link>
          <Link to='/currentwalk'>Current Walk</Link>
          <Link to='/traillist'>Trail List</Link>
          <Link to='/trailfinder'>Trail Finder</Link>
        </nav>
      </header>
      </div>
        <div className="App">
          <Switch>
            <Route exact path='/'><LandingPage /></Route>
            <Route exact path='/profile'><Profile /></Route>
            <Route exact path='/startnewalk'><StartNewWalk /></Route>
            <Route exact path='/currentwalk'><CurrentWalk /></Route>
            <Route exact path='/traillist'><TrailList /></Route>
            <Route exact path='/trailfinder'><TrailFinder /></Route>
          </Switch>
          <Footer />
        </div>
  </Router>
      );
}

      export default App;
