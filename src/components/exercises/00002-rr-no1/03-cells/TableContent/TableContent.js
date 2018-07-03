import React from 'react';
import styles from './TableContent.scss';
import TableHeader from '../../02-molecules/TableHeader/TableHeader';
import TableRow from '../../01-atoms/TableRow/TableRow';

const TableContent = (props) => {
    /*
     * Define const from props
     */
    const {
        carsArray,
        searchArrayBy
    } = props;

    /*
     * Filter if has input and loop over cars array in order to create
     * TableRow array
     */
    // Way #1
    // const tableRows = [];
    // carsArray.forEach((singleCar) => {
    //     if (singleCar.carMake.indexOf(filterByVal) === -1){
    //         return;
    //     }
    //     tableRows.push(
    //         <TableRow key={singleCar.id} carDetails={singleCar} />
    //     );
    // });

    const checkIfIsIndexed = (byPhrase, overItem) => {
        return overItem.toLowerCase().indexOf(byPhrase.toLowerCase());
    };

    // Way #2
    const tableRows = carsArray.map((singleCar) => {
        // TODO: Handle case, where nothing is found
        // Take locals vars
        const {
            id,
            carMake,
            carModel,
            carModelYear,
            dealerEmail
        } = singleCar;
        //const filteredCarMake = carMake.toLowerCase().indexOf(searchArrayBy.toLowerCase());
        const filteredCarMake = checkIfIsIndexed(searchArrayBy, carMake);
        const filteredCarModel = checkIfIsIndexed(searchArrayBy, carModel);
        //const filteredCarModelYear = checkIfIsIndexed(searchArrayBy, carModelYear);
        const filteredDealerEmail = checkIfIsIndexed(searchArrayBy, dealerEmail);

        // If you can't find within do not return
        const filteredList = filteredCarMake !== -1 || filteredCarModel !== -1 || filteredDealerEmail !== -1;

        if (filteredList) {
            return (
                <TableRow key={id} carDetails={singleCar}/>
            );
        }
        //return console.warn('<-- the following number of table rows did not match!');
    });

    //console.log(tableRows);

    // Create loop over content and create rows
    return (
        <table className={styles.table}>
            <TableHeader/>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
};

export default TableContent;
