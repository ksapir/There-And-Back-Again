import React from 'react';
import CurrentWalk from '../components/CurrentWalk'
import Progress from '../components/Progress'
import InBetween from '../components/InBetween';

export default function Profile() {
    return(
        <div>
                <CurrentWalk/>
                <InBetween />
                <Progress />
        </div>
    )
}