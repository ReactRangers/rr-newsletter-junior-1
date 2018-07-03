import React from 'react';
import styles from './TableRow.scss';

import ColorSquare from '../ColorSquare/ColorSquare';

/*
 * Single row html structure
 */
const TableRow = (props) => {

    /*
     * Destructure carDetails as separate variables
     */
    // TODO: Add Proptypes!
    const {
        carMake,
        carModel,
        carModelYear,
        bodyColor,
        dealerEmail
    } = props.carDetails;

    return(
        <tr className={styles.row}>
            <td>{carMake}</td>
            <td>{carModel}</td>
            <td>{carModelYear}</td>
            <td>
                <ColorSquare color={bodyColor}/>
            </td>
            <td>{dealerEmail}</td>
        </tr>
    );
};

export default TableRow;

