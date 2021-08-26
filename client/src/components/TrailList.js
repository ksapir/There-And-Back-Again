import React from 'react';

export default function Trail(props){
    return(
        <div>
        <div className="card">
          <img
            className="card-img-top"
            src={`http://placecorgi.com/`}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.length}</p>
            <a href="#" className="btn btn-primary">
              See more info
            </a>
          </div>
        </div>
      </div>
    )
}