import React, { useState, useEffect } from 'react';
import Profile from './pages/Profile';
import TrailFinder from './pages/TrailFinder';
import Journeys from './pages/Journeys'
import Walks from './pages/Walks'
import Footer from './components/Footer';
import JourneyStops from './components/JourneyStops';
import API from './utils/API'
import './styles/style.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export default function App() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })
  const [signupFormState, setSignupFormState] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [userState, setUserState] = useState({
    token: "",
    user: {
    }
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
  
    console.log(token)
    if (token) {
      API.getProfile(token).then(res => {
        console.log(res.data);
        setUserState({
          token: token,
          user: {
            email: res.data.email,
            password: res.data.password,
            username: res.data.username,
            _id: res.data._id,
            userMiles: res.data.userMiles,
            avatar: res.data.avatar
          }
        })
      }).catch(err => {
        console.log(err)
        console.log("no logged in user")
        setUserState({
          token: "",
          user: {}
        })
      })
    } else {
      console.log("no token provided")
    }
  }, [])



  const handleFormSubmit = e => {
    e.preventDefault();
    API.login(formState).then(res => {
      console.log(res.data);
      alert("logged in!")
      localStorage.setItem("token", res.data.token)
      setUserState({
        ...userState,
        token: res.data.token,
        user: {
          email: res.data.user.email,
          username: res.data.user.username,
          password: res.data.user.password,
          _id: res.data.user._id,
          userMiles: res.data.userMiles,
          avatar: res.data.avatar
        }
      })
    }).catch(err => {
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token: "",
        user: {}
      })
    })
    setFormState({
      email: "",
      password: ""
    })
  }

  const handleSignupFormSubmit = e => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      console.log(res.data);
      alert("Sign up Success!")
      localStorage.setItem("token", res.data.token)
      setUserState({
        ...userState,
        token: res.data.token,
        user: {
          email: res.data.user.email,
          username: res.data.user.username,
          password: res.data.user.password,
          _id: res.data.user._id,
          userMiles: res.data.userMiles,
          avatar: res.data.avatar
        }
      })
    }).catch(err => {
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token: "",
        user: {}
      })
    })
    setSignupFormState({
      username: "",
      email: "",
      password: ""
    })

  }

  const handleLogout = () => {
    setUserState({
      token: "",
      user: {}
    })
    localStorage.removeItem("token")
  }

  return (
    <div>
      <Router>
        <div>
       
          <div className="container section center" >
          
            <h1>There and Back Again</h1>
           
            {!userState.token ? (<>
            <nav>
              <Link to='/trailfinder'>Trail Finder</Link>
              </nav>
              </>) : (
                <>
                <nav>
              <Link to='/journeys'>Journeys</Link>
              <Link to='/users/:id'>My Profile</Link>
              <Link to='/mywalks'>My Walks</Link>
              <Link to='/trailfinder'>Trail Finder</Link>
              <Link to='/' onClick={handleLogout}>Logout</Link>
            </nav>

          </>

          )}

          </div>

        </div>

          <div className="container center section">
          {!userState.token ? (<>
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5">
              <form onSubmit={handleFormSubmit}>
                <input name="email" placeholder="email" class="userAuth" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />

                <input name="password" type="password" placeholder="password"  class="userAuth" value={formState.password} onChange={(e) => setFormState({ ...formState, password: e.target.value })} />

                <input type="submit" value="Login" class="authBtn" />
              </form>
              </div>

              <div className="col-sm-12 col-md-5 col-lg-5">
              <form onSubmit={handleSignupFormSubmit}>
                <input name="email" placeholder="email"  class="userAuth" value={signupFormState.email} onChange={(e) => setSignupFormState({ ...signupFormState, email: e.target.value })} />

                <input name="username" placeholder="username"   class="userAuth" value={signupFormState.username} onChange={(e) => setSignupFormState({ ...signupFormState, username: e.target.value })} />

                <input name="password" placeholder="password" type="password"  class="userAuth" value={signupFormState.password} onChange={(e) => setSignupFormState({ ...signupFormState, password: e.target.value })} />

                <input type="submit" value="Signup" class="authBtn" />
              </form>
              </div>
              </div>
            </>) : (
              <>
              <Redirect to={`/users/${userState.user._id}`}/>
              </> 
            )}
          </div>


        <div>
          <div className="App">
            <Switch>
              <Route exact path='/'><Journeys /></Route>
              <Route exact path='/users/:id'><Profile user={userState.user} token={userState.token} /></Route>
              <Route exact path='/journeys'><Journeys /></Route>
              <Route exact path='/journey/lotr'><JourneyStops /></Route>
              <Route exact path='/trailfinder'><TrailFinder /></Route>
              <Route exact path='/mywalks'><Walks user={userState.user} token={userState.token}/></Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  )
}


