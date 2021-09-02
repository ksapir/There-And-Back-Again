import React, { useState } from "react";
import API from "../../utils/API";
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
    const userMiles = 50;
    // const groupMiles = 50;
    // const userMilesToGo = 1900;
    // const groupMilesToGo= 1900;



    // console log
    console.log("current user miles " + userMiles);
    // console.log("current group miles " + groupMiles);
    // console.log("current user miles left to go " + userMilesToGo);
    // console.log("current group miles left to go  " + groupMilesToGo);
    
    console.log(formState);

    

    const newUserMiles = parseInt(formState.formMiles) + parseInt(userMiles);

    // const newGroupMiles = parseInt(formState.formMiles) + parseInt(groupMiles);

    // const newUserMilesToGo = parseInt(userMilesToGo) - parseInt(formState.formMiles);

    // const newGroupMilesToGo = parseInt(groupMilesToGo) - parseInt(formState.formMiles);


    // console log 
    console.log("updated user miles " + newUserMiles);
    alert("logged! New total " + newUserMiles)
    // console.log("updated group miles " + newGroupMiles);
    // console.log("updated user miles left to go " + newUserMilesToGo);
    // console.log("updated group miles left to go " + newGroupMilesToGo)


    // fetch user id and update userMiles
    // fetch("api/users/:id")
    // API.logMiles
    // fetch("https://localhost:3001/api/users/journey:id", {
    //   method: "post",
    //   body: JSON.stringify({
    //     userMiles: `${newUserMiles}`,
    //     userMilesToGo: `${newUserMilesToGo}`
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then(function () {
    //     console.log("userMiles logged!");
    //     console.log("userMilesToGo logged!");
    //   })
    //   .catch((error) => console.log(error));

    
      API.logMiles(newUserMiles, props.token).then(res => {
        console.log(res)

      })
    
   




     
  };

  return (
    <div className="col-sm-12 col-md-5 col-md-5 section">
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