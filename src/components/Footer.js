import React from 'react';

const styles = {
    foot:{
    verticalAlign: 'middle'
    }
}

export default function Footer() {
    return (
        <div style={styles.foot} className="center border">
            <p> Created by The Fellowship</p>
        </div>
    )
}