import React, { useState, useEffect } from 'react';
import API from '../utils/API'

const styles= {
    img: {
        width: '100%',
    }
}

export default function JourneyStops () {
    const [journey, setJourney] = useState([]);

    useEffect(() => {
      API.allLotr().then((res) => {
        // console.log(res);
        setJourney(res.data);
      });
    }, []);
  
    return (
     <div className="container center">
        {journey.map((journey) => (
          <div className=" section row">
            <section className="col-sm-12 col-md-6 col-lg-6" key={journey._id}>
              <div >
              <h1>{journey.name}</h1>
              </div>
              <hr/>
              <h2>Distance: {journey.distance} miles</h2>
              <div class="journeyDesc">
              <p> {journey.description}, </p>
              </div>
              </section>
              <section className="col-sm-12 col-md-6 col-lg-6" class="text-center">
              <img class="img-container" style={styles.img}
                  src={journey.url}
                  alt="LOTR Journey"
                />
            </section>
         </div>
        ))}
       </div>
    )
}