import React, { useState } from "react";
const initialFormnData = {
  formMiles: "",
};
// import API from '../../utils/API'
Object.freeze(initialFormnData);

export default function MileInput(props) {
  const [formState, setFormState] = useState({ ...initialFormnData });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // console.log(formState)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //established variables
    //will grab userMiles from here to go forward
    const userMiles = 50;
    const groupMiles = 50;
    const userMilesToGo = 1900;
    const groupMilesToGo= 1900;



    // console log
    console.log("current user miles " + userMiles);
    // console.log("current group miles " + groupMiles);
    console.log("current user miles left to go " + userMilesToGo);
    // console.log("current group miles left to go  " + groupMilesToGo);
    
    console.log(formState);

    
//parsing into integers
//takes form state plus previous user miles
    const newUserMiles = parseInt(formState.formMiles) + parseInt(userMiles);

    // const newGroupMiles = parseInt(formState.formMiles) + parseInt(groupMiles);

    const newUserMilesToGo = parseInt(userMilesToGo) - parseInt(formState.formMiles);

    // const newGroupMilesToGo = parseInt(groupMilesToGo) - parseInt(formState.formMiles);


    // console log 
    console.log("updated user miles " + newUserMiles);
    // console.log("updated group miles " + newGroupMiles);
    console.log("updated user miles left to go " + newUserMilesToGo);
    // console.log("updated group miles left to go " + newGroupMilesToGo)


    // fetch user id and update userMiles
    // fetch("api/users/:id")
    // API.updateUser
    fetch("https://localhost:3001/api/users/:id", {
      method: "post",
      body: JSON.stringify({
        userMiles: `${newUserMiles}`,
        userMilesToGo: `${newUserMilesToGo}`
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        console.log("userMiles logged!");
        console.log("userMilesToGo logged!");
      })
      .catch((error) => console.log(error));



// fetch by fellowship id and update groupMiles
 // fetch by fellowship id and update groupMilesToGo
    // fetch("api/fellowship/:id")
    // fetch("https://localhost:3001/fellowships/:id",{
    //   method: "post",
    //   body: JSON.stringify({
    //     groupMiles: `${newGroupMiles}`,
    //     groupMilesToGo:`${newGroupMilesToGo}`
    //   }),
    //   headers: {"Content-Type": "application/json"},
    // })
    // .then(function () {
    //   console.log("groupMiles logged!");
    //   console.log("groupMilestoGo logged!");
    // })
    //   .catch((err) => console.log(err));


     
  };
//return of form input
  return (
    <div className="container section center">
      <h3>Log The Miles You Have Walked</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="mileLog"
          placeholder="log miles"
          name="formMiles"
          value={formState.formMiles}
          onChange={handleChange}
        />
        <button type="submit">Log Miles</button>
      </form>
    </div>
  );
}
   // db.user.updateOne({username: "keith"}, {$set:{usermiles: newUserMiles})