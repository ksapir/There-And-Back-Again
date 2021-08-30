import React from 'react';
import CurrentWalk from '../components/CurrentWalk'
import Progress from '../components/Progress'

export default function Profile() {
    return(
        <div className="container center">
            <div className="row">
                <CurrentWalk/>
                <Progress />
            </div>
        </div>
    )
}