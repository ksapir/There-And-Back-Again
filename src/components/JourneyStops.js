import React, { useState, useEffect } from 'react';
import API from '../utils/API'

const styles= {
    img: {
        width: '500px',
    }
}

export default function JourneyStops () {
    const [journey, setJourney] = useState([]);

    useEffect(() => {
      API.allLotr().then((res) => {
        console.log(res);
        setJourney(res.data);
      });
    }, []);
  
    return (
     <div className="container center">
        {journey.map((journey) => (
          <div className=" section row">
            <section className="col-sm-12 col-md-6 col-lg-6" key={journey._id}>
              <h2>{journey.name}</h2>
              <p>Distance: {journey.distance}</p>
              <p> {journey.description}, </p>
              </section>
              <section className="col-sm-12 col-md-6 col-lg-6">
              <img style={styles.img}
                  src={journey.url}
                  alt="LOTR Journey"
                />
            </section>
         </div>
        ))}
       </div>
    )
}