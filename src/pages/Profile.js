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

      const [journeyStop, setJourneyStop] = useState({
        name: "Bag End- The Shire",
        distance: 0,
        description: "Gandalf arrives at Bag End to celebrate the 111th birthday of Frodo’s uncle, Bilbo. Bilbo leaves the Ring to Frodo. Once it is found by Gandalf, he insists the Frodo leave the Shire. Frodo departs the Shire with his friend Samwise Gamgee.",
        url: "https://i.postimg.cc/MZyYy8ys/cntraveler-visiting-the-shire-by-drone.jpg"
      })
      
      useEffect(() => {
        console.log('########')
        API.journeyBreakpoint(props.token).then(res => {
          console.log(res.data)
          setJourneyStop(res.data)
        }).catch (err => {
          console.log(err)
        })
      }, [props.token])

    return(
        <div className="container center">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-md-5 section">
            <img
                  src={props.user.avatar}
                  alt="Your Avatar"
                />
            </div>
          
                <MileInput user={props.user} token={props.token}/>
       
                <InBetween journeyStop={journeyStop}/>
           
                {/* <Progress /> */}
        </div>
        </div>
    )
}
