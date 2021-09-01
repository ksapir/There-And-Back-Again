import React from 'react';

export default function LoginSignup(props) {
    return (
        <div className="LoginSignp">
        {!props.user.name ? (<>
          <form onSubmit = {props.handleFormSubmit}> 
          <input name="email" placeholder="email" value = {props.formState.email} onChange={(e)=>props.setFormState({...props.formState,email:e.target.value})}/>
          <input name="password"  type="password" placeholder="password" value = {props.formState.password} onChange={(e)=>props.setFormState({...props.formState,password:e.target.value})}/>
          <input type="submit" value="login"/>
        </form>
        <form onSubmit = {props.handleSignupFormSubmit}> 
          <input name="email" placeholder="email" value = {props.signupFormState.email} onChange={(e)=>props.setSignupFormState({...props.signupFormState,email:e.target.value})}/>
          <input name="name" placeholder="username" value = {props.signupFormState.username} onChange={(e)=>props.setSignupFormState({...props.signupFormState,name:e.target.value})}/>
          <input name="password" placeholder="password" type="password" value = {props.signupFormState.password} onChange={(e)=>props.setSignupFormState({...props.signupFormState,password:e.target.value})}/>
          <input type="submit" value="signup"/>
        </form>
        </>):(
         <>
        <h1>Welcome back, {props.user.name}</h1>
        <button onClick={props.handleLogout}>Logout</button>
       </>
      )}
      </div>
    )

    // <div className="container center section">
     
    //               <h2 >Let's Go on an Adventure!</h2>
    
    //            <div className="row LoginSignp"">
    //                 <div className="col-sm-12 col-md-5 col-md-5 border">
    //          {!props.user.name ? (<>
    //                  <form >
    //                        <input
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
    // </>):
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
}