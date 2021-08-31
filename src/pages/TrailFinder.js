import React from 'react';
import TrailList from '../components/TrailList'
import { Form } from 'react-bootstrap';


export default function TrailFinder() {
    return (
        <div>
        <div className="container section center">
   
                    <h2 >Find A Trail Near You</h2>
                    <Form>
                    <input name ="search" placeholder = "i.e. Seattle, WA"/>
                    </Form>
                    <button type="button">Search</button>
 
        </div>
        <div className="container section center">
            <TrailList />
        </div>
    </div>

    )
}
