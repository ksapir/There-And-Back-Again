
import React from 'react';

const styles={
    center: {
        textAlign: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    }
}

export default function InBetween(props) {
    return (
        <div className="container section center">
            <div className="row">
                <section className="col-sm-12 col-md-6 col-lg-6">
                    <h3>You just left {props.journeyStop?.name}</h3>

                    <p>Last journey breakpoint: {props.journeyStop?.distance} miles</p> 
                    <img style={styles.img} src={props.journeyStop?.url}/>
=======
                    <p>Last Journey Breakpoint {props.journeyStop?.distance} miles</p> 
                    {/* <p>You have walked {props.journeyStop?.props.user.userMies}</p> */}

                </section>
                <section style={styles.center} className="col-sm-12 col-md-6 col-lg-6">
                    <p>{props.journeyStop?.description}</p>
                </section>
            </div>
            
        </div>
    )
}