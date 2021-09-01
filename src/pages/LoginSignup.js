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
          <input name="name" placeholder="username" value = {props.signupFormState.name} onChange={(e)=>props.setSignupFormState({...props.signupFormState,name:e.target.value})}/>
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
}