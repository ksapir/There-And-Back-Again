import React from 'react';

const styles={
    center: {
        textAlign: 'center',
    }
}

export default function InBetween() {
    return (
        <div className="container section center">

            <h3>You just left Bagend</h3>
            <div className="row">
                <section className="col-sm-12 col-md-6 col-lg-6">
                    <h3>You've arrived at:</h3>
                    <p>You walked X miles</p>
                </section>
                <section style={styles.center} className="col-sm-12 col-md-6 col-lg-6">
                    <h3>Next stop:</h3>
                    <p>Miles to go: </p>
                </section>
            </div>
            
        </div>
    )
}