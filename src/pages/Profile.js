import React from 'react';
import MileInput from '../components/logMiles/mileInput';
import Progress from '../components/Progress'
import InBetween from '../components/InBetween';

export default function Profile() {
    return(
        <div>
                <MileInput/>
       
                <InBetween />
           
                <Progress />
        </div>
    )
}