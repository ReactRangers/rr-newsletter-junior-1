import React from 'react';

// Component written as a class

class Table extends React.Component {

    render() {

        const rowList = this.props.carsData.map((element, index) => 
        // We can use as key element id or index
            <tr key={ element.id }>
                <td>{ index + 1 }</td>
                <td>{ element.carMake }</td>
                <td>{ element.carModel }</td>
                <td>{ element.carModelYear }</td>
                <td bgcolor={ element.bodyColor }>{ element.bodyColor }</td>
                <td>{ element.dealerEmail }</td>
            </tr>
            );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Brand</td>
                        <td>Model</td>
                        <td>Car's Year</td>
                        <td>Car's Color</td>
                        <td>Dealer Email</td>
                    </tr>
                </thead>
                <tbody>{rowList}</tbody>
            </table>
            )
    }

}

// Component write as a function

// const Table = (props) => {

//     const rowList = this.props.carsData.map((element, index) =>
//           // We can use as key element id or index
//             <tr key={index}>
//                 <td>{ index + 1 }</td>
//                 <td>{ element.carMake }</td>
//                 <td>{ element.carModel }</td>
//                 <td>{ element.carModelYear }</td>
//                 <td bgcolor={element.bodyColor}>{element.bodyColor}</td>
//                 <td>{ element.dealerEmail }</td>
//             </tr>
//             );

//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <td>No.</td>
//                     <td>{"Brand"}</td>
//                     <td>{"Model"}</td>
//                     <td>{"Car's Year"}</td>
//                     <td>{"Car's Color"}</td>
//                     <td>{"Dealer Email"}</td>
//                 </tr>
//             </thead>
//             <tbody>{rowList}</tbody>
//         </table>
//         )
// }

export default Table;