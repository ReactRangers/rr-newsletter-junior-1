import React from 'react';
import styles from './ColorSquare.scss';

const ColorSquare = (props) => {
    const {color} = props;
    return (
        <span className={styles.base} style={{backgroundColor: color}}></span>
    );
};

export default ColorSquare;
