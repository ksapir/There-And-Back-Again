import React from 'react';
import { Card } from 'react-bootstrap'

export default function PastWalk() {
    return (
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
    )
}