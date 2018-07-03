import React from 'react';
import styles from './TableHeader.scss';

const TableHeader = () => {
    return (
        <thead className={styles.wrapper}>
            <tr className={styles.row}>
                <th className={styles.item}>Make</th>
                <th className={styles.item}>Model</th>
                <th className={styles.item}>Year</th>
                <th className={styles.item}>Body color</th>
                <th className={styles.item}>Dealer contact</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
