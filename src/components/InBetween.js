
import React from 'react';

const styles={
    center: {
        textAlign: 'center',
    }
}

export default function InBetween(props) {
    return (
        <div className="container section center">
            <div className="row">
                <section className="col-sm-12 col-md-6 col-lg-6">
                    <h3>You just left {props.journeyStop?.name}</h3>
                    <p>You walked {props.journeyStop?.distance} miles</p> 
                </section>
                <section style={styles.center} className="col-sm-12 col-md-6 col-lg-6">
                    <p>{props.journeyStop?.description}</p>
                    <img src={props.journeyStop?.url}/>
                </section>
            </div>
            
        </div>
    )
}