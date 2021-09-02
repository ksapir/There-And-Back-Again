import userEvent from '@testing-library/user-event';
import React from 'react';

export default function PastWalk() {
    return (
        <div className="container section">
            <h3>Date</h3>
            <p>Miles Walked </p> 
            <p>Notes</p> <textarea/>
        </div>
    )
}