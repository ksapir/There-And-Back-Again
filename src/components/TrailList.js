import React from 'react';
<<<<<<< HEAD
// import { useQuery } from '@apollo/client';
=======

>>>>>>> 059192a948dc8954cb1e7c185aaedf7cb321660f
 
export default function TrailList({ trails }){

      return(
      <div>
        {trails.map((trail) => (
        <div className=" section row">
          <section className="col-sm-12 col-md-6 col-lg-6" key={trail._id}>
            <h2>{ trail.name }</h2>
            <p >Park: { trail.parkName }</p>
            <p >Distance: { trail.distance }</p>
            <p >City, State: { trail.location}, { trail.state}</p>
            <p >Description: { trail.description }</p>
          </section>
        </div>
        ))}
      </div>
    )
}