import React from 'react'

export default function CurrentWalk() {
return (
    <div className="container">
        <div className="row border">
            <h3>Current Walk:</h3>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <p>Progress: X miles</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <p>Remaining: X miles</p>
            </div>
        </div>
    </div>
    )
}