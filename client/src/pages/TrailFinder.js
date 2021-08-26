import React from 'react';
import { useQuery } from '@apollo/client';
import TrailList from '../components/TrailList'

import {QUERY_TRAILS} from '../utils/queries.js';

const TrailFinder = () => {
    const { loading, data } = useQuery(QUERY_TRAILS);

    return (
        <div>
             {loading ? (
            <div>Loading...</div>
          ) : (
            <TrailList
              trails={trails}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
    )
}