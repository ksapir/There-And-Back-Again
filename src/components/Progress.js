import userEvent from '@testing-library/user-event';
import React from 'react';
import API from '../utils/API';

export default function Progress() {



    return (
        <div className="container center section">
            <h4>Your Progress On The Way To Mordor</h4>
            <div className="row">
            <section className="col-sm-12 col-md-6 col-lg-6">
            <p>You've Walked: {} miles</p>
            </section>
          
            </div>
        </div>
    )
}