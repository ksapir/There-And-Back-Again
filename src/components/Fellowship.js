import React from 'react';

export default function Fellowship() {
    return (
        <div className="container center">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 center">
                    <img
                        src={`http://placekitten.com/200/300`}
                        alt="Card cap" />
                    <h3>Name</h3>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 center">
                    <h3>Recent Walk:</h3>
                    <h4>Trail:</h4>
                    <p>Distance</p>
                    <p>Time</p>
                    <p>comment</p>
                </div>
            </div>
        </div>
    )
}