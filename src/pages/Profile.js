import React from 'react';
import CurrentWalk from '../components/CurrentWalk'
import MileInput from '../components/logMiles/mileInput';
import Progress from '../components/Progress'

export default function Profile() {
    return(
        <div className="container center">
                <CurrentWalk/>
                <Progress />
                <MileInput/>
        </div>
    )
}