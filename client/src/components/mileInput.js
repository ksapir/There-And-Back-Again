
import React from 'react'

export default function mileInput(){

    //User mile input component 


    // need to store and call upon distance reamaining in 
    
    getRemaining(){

        const distanceRemaining = 1900 

        var input = Number(document.getElementById("usermiles").value);
        var remaining = Number(distanceRemaining).value;
        var distanceToGo = remaining - input
        document.getElementById("updatedDistanceRemaining").value = distanceToGo.toFixed(2);
        console.log(distanceToGo)

    }
    <div className="container">
        
      <h1>
        Your FellowShip has travelled 'X' Miles on their Journey to mordor
        </h1>
        

        <form>

            <label>Log miles</label>
               <input type="number" name="userDistance" id="userMiles" placeholder="miles"/>
        <input readonly id="updatedDistanceRemaining" placeholder="miles to go"/>
        </form>
    
    </div>
}

