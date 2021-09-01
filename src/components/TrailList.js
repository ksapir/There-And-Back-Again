import React from 'react';
// import { useQuery } from '@apollo/client';
 
export default function TrailList(props){
    return(
      <div>
        <div className="row">
          <section className="col-sm-12 col-md-6 col-lg-6">
          <img
            src={`http://placekitten.com/200/300`}
            alt="Card cap"/>
          </section>
          <section className="col-sm-12 col-md-6 col-lg-6">
            <h2>Trail.Name</h2>
            <p >Trail.parkname</p>
            <p >Trail.distance</p>
            <p >Trail.location, trail.state</p>
            <p >Trail.descrption</p>
          </section>
        </div>
      </div>
    )
}