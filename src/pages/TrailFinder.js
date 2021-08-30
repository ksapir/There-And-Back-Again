import React from 'react';
import TrailList from '../components/TrailList'
import { Form } from 'react-bootstrap';

export default function TrailFinder() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2>Find A Trail Near You</h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <Form>
                    <input
                        name ="search"
                        placeholder = "i.e. Seattle, WA"/>
                    </Form>
                    <button type="button">Search</button>
                </div>
            </div>
        <div>
            <TrailList />
        </div>
        </div>
    )
}
