import React from 'react';

const styles = {
    foot:{
    verticalAlign: 'middle'
    }
}

export default function Footer() {
    return (
        <div style={styles.foot} className="container center section">
            <p> Created by The Fellowship</p>
        </div>
    )
}