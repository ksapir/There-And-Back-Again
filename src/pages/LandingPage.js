import React, { useState } from 'react';
// import { checkPassword, validateEmail } from '../utils/helpers';
import API from "../utils/API";
import LoginSignup from './LoginSignup'

function LandingPage() {
//     const styles = {
//         space: {
//             paddingBottom: '30px'
//         }
//     }
//     // Create state variables for the fields in the form
//     // We are also setting their initial values to an empty string
//     const [email, setEmail] = useState('');
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

    

//     const handleInputChange = (e) => {
//         // Getting the value and name of the input which triggered the change
//         const { target } = e;
//         const inputType = target.name;
//         const inputValue = target.value;

//         // Based on the input type, we set the state of either email, username, and password
//         if (inputType === 'email') {
//             setEmail(inputValue);
//         } else if (inputType === 'userName') {
//             setUserName(inputValue);
//         } else {
//             setPassword(inputValue);
//         }
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         // const [user, setUser] = useState('')
        
//         if (!validateEmail(email) || !userName) {
//             setErrorMessage('Email or username is invalid');
//             return;
//         }
//         if (!checkPassword(password)) {
//             setErrorMessage(
//                 `Choose a more secure password for the account: ${userName}`
//             );
//             return;
//         }
//         alert(`Hello ${userName}`);

//         setUserName('');
//         setPassword('');
//         setEmail('');

//     };

//     return (
//         <div className="container center section">
     
//                 <h2 >Let's Go on an Adventure!</h2>

//             <div className="row">
//                 <div className="col-sm-12 col-md-5 col-md-5 border">
//                     <form >
//                         <input
//                             value={email}
//                             name="email"
//                             onChange={handleInputChange}
//                             type="email"
//                             placeholder="email"
//                         />
//                         <input
//                             value={userName}
//                             name="userName"
//                             onChange={handleInputChange}
//                             type="text"
//                             placeholder="username"
//                         />
//                         <input
//                             value={password}
//                             name="password"
//                             onChange={handleInputChange}
//                             type="password"
//                             placeholder="Password"
//                         />
//                         <button type="button" onClick={handleFormSubmit}>Submit</button>
//                     </form>
//                     {errorMessage && (
//                         <div>
//                             <p className="error-text">{errorMessage}</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="col-sm-12 col-md-5 col-md-5 border">
//                     <form >
//                         <input
//                             name="email"
//                             type="email"
//                             placeholder="email"
//                         />
//                         <input
//                             name="password"
//                             type="password"
//                             placeholder="password"
//                         />
//                         <button type="button">Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <div className="row">
//              <img style={styles.space} src="https://i.kym-cdn.com/entries/icons/original/000/000/143/493654d6ef.jpg" alt="Boromir Meme"/>
//             </div>
//         </div>

//     )
// }


const [formState,setFormState] = useState({
    email:"",
    password:""
  })
  const [signupFormState,setSignupFormState] = useState({
    email:"",
    password:"",
    username:""
  })

  const [userState,setUserState] = useState({
    token:"",
    user:{
    }
  })

  const handleFormSubmit = e =>{
    e.preventDefault();
    API.login(formState).then(res=>{
      console.log(res.data);
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          name:res.data.user.name,
          id:res.data.user.id
        }
      })
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
    setFormState({
      email:"",
      password:""
    })
  }

  const handleSignupFormSubmit = e=>{
    e.preventDefault();
    console.log(signupFormState);
    API.signup(signupFormState).then(res=>{
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          username:res.data.user.username,
          id:res.data.user.id
        }
      })
      console.log(API)
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
    setSignupFormState({
      name:"",
      email:"",
      password:""
    })

  }

  const handleLogout = ()=>{
    setUserState({
      token:"",
      user:{}
    })
    localStorage.removeItem("token")
  }

  return (
      <LoginSignup user={userState.user} 
      handleFormSubmit={handleFormSubmit} 
      formState={formState} 
      setFormState={setFormState} 
      signupFormState={signupFormState} 
      setSignupFormState={setSignupFormState}
      handleSignupFormSubmit={handleSignupFormSubmit}
      handleLogout={handleLogout}
      />
  )}
export default LandingPage