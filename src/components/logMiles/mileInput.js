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

    // console log
    console.log("current user miles " + props.user.userMiles);
    
    console.log(formState);

    
//parsing into integers
//takes form state plus previous user miles
    const newUserMiles = parseInt(formState.formMiles) + parseInt(props.user.userMiles);

  
    
    // console log 
    console.log("updated user miles " + newUserMiles);
    alert("logged! New total " + newUserMiles)

      API.logMiles(newUserMiles, props.token).then(res => {
        console.log(res)
        window.location.reload()
      })
  
     
  };
//return of form input
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
          required

        <button type="submit">Log Miles</button>
      </form>
    </div>
  );
}
 