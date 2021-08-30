import React from 'react';

import CurrentWalk from '../components/CurrentWalk'
import PastWalk from '../components/PastWalk'

export default function Walks() {
    return (
        <div>
            <CurrentWalk />
            <PastWalk />
        </div>
    )
}