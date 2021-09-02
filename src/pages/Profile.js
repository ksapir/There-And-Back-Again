import React, { useState, useEffect } from 'react';
import MileInput from '../components/logMiles/mileInput';
// import Progress from '../components/Progress'
import InBetween from '../components/InBetween';
import API from '../utils/API'

export default function Profile(props) {
    const [userState, setUserState] = useState({
        token: "",
        user: {
        }
      })
    
      useEffect(() => {
        const token = localStorage.getItem("token")
        // console.log(props)
        if (token) {
          API.getProfile(props.token, props.user).then(res => {
            // console.log(res.data.avatar);
            setUserState({
              token: props.token,
              user: {
                email: res.data.email,
                password: res.data.password,
                username: res.data.username,
                // _id: res.data.user._id,
                avatar: res.data.avatar
              }
            })
          }).catch(err => {
            console.log(err)
            console.log("no logged in user")
            // setUserState({
            //   token: "",
            //   user: {}
            // })
          })
        } else {
          console.log("no token provided")
        }
      }, [props.token, props.user])

    return(
        <div className="container center">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-md-5 section">
            <img
                  src={userState.user.avatar}
                  alt="Your Avatar"
                />
            </div>
          
                <MileInput/>
       
                <InBetween />
           
                {/* <Progress /> */}
        </div>
        </div>
    )
}