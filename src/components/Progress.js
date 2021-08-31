import React from 'react';

export default function Progress() {
    return (
        <div className="container section">
            <h4>Your Progress On The Way To Mordor</h4>
            <div className="row">
            <section className="col-sm-12 col-md-6 col-lg-6">
            <p>You've Walked: X miles</p>
            </section>
            <section className="col-sm-12 col-md-6 col-lg-6">
            <p>Remaining Distance: X miles</p>
            </section>
            </div>
        </div>
    )
}