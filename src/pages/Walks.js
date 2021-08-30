import React from 'react';
import { Card } from 'react-bootstrap'

export default function Walks() {
    return (
        <div className="container">
            <h2 className="center">Your walks:</h2>
            <div className="row border">
                <h3>Current Walk:</h3>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <p>Progress: X miles</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <p>Remaining: X miles</p>
                </div>
            </div>
                <Card className="text-center">
                    <Card.Header>Date</Card.Header>
                    <Card.Body>
                        <Card.Title>Past Walk Title</Card.Title>
                        <Card.Text>
                            Description
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Miles to go:</Card.Footer>
                </Card>
        </div >
    )
}