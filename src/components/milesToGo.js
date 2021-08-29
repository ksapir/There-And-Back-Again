// const mongoose = require("mongoose");
// import Fellowship from ('../../server/models/Fellowship');
// import LotrJourney from ('../../server/models/LotrJourney');

// import User from('../../server/models/User');
// import mileInput from './components/mileInput';




// TODO: 
// // set each specific Journeys total Distance
//  LotrJourney(totalDistance) = 1900

// TODO:
// // update total miles on input both userMiles and groupMiles
// User(userMiles) + mileInput 

// Fellowship(groupMiles) + mileInput

// // on  mileLog update userMiles to show their total contribution 
// // mileLog shown in src/components/mileInpus.js



// // on  mileLog update User milesToGo for (each) User Journey 
// // on mileLog update FellowShip milesToGo 
// // 
// Fellowship(milesToG0) = User(milesToGo)

// // on milelog getRemaining() for fellowship/and or user? as seen in mileInput.js

// getRemaining() {
//     milesToG0 = LotrJourney - groupMiles
// }




// module.exports = Fellowship;
// module.exports = User;
// module.exports = LotrJourney;

import React, { useState } from 'react'

export default function MilesToGo() {
    const [miles, setMiles] = useState('');
    const [time, setTime] = useState('');


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'miles') {
            setMiles(inputValue);
        } else if (inputType === 'time') {
            setTime(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        

        setMiles('');
        setTime('');
    };
    return (
        <div className="container">
            <div className="row">
            <h2>Add A Walk</h2>
            <div className="col s4 m4 l4">
                <form>
                    <input className="form"
                        name ="milesInput"
                        onChange = {handleInputChange}
                        placeholder = "miles"/>
                    <input className="form"
                        name ="timeInput"
                        onChange = {handleInputChange}
                        placeholder = "time"/>
                   <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
}
