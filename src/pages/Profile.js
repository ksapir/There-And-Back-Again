import React from 'react';
import CurrentWalk from '../components/CurrentWalk'
import MileInput from '../components/logMiles/mileInput';
import Progress from '../components/Progress'
import InBetween from '../components/InBetween';

export default function Profile() {
    return(
        <div>
                <CurrentWalk/>
                <InBetween />
                <Progress />
                <MileInput/>
        </div>
    )
}