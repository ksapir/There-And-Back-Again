import React from 'react';


export default function TrailList(props){
    return(
        <div>
        <div className="card">
          <img
            className="card-img-top"
            src={`http://placecorgi.com/`}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Trail.Name</h5>
            <p className="card-text">Trail.parkname</p>
            <p className="card-text">Trail.distance</p>
            <p className="card-text">Trail.location, trail.state</p>
            <p className="card-text">Trail.descrption</p>
          </div>
        </div>
      </div>
    )
}