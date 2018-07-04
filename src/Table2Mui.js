import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn } from 'material-ui/Table';

// Component written as a class

class Table2Mui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCheckboxes: false,
        }
    }

    render () {

        const rowList = this.props.carsData.map((element, index) =>
            // We can use as key element id or index 
            <TableRow key={ element.id } >
                <TableRowColumn>{ index + 1 }</TableRowColumn>
                <TableRowColumn>{ element.carMake }</TableRowColumn>
                <TableRowColumn>{ element.carModel }</TableRowColumn>
                <TableRowColumn>{ element.carModelYear }</TableRowColumn>
                <TableRowColumn style={{ backgroundColor: `${element.bodyColor}` }}>{ element.bodyColor }</TableRowColumn>
                <TableRowColumn>{ element.dealerEmail }</TableRowColumn>
            </TableRow>
            )


        return (
            <MuiThemeProvider>
                <Table>
                    <TableHeader adjustForCheckbox={this.state.showCheckboxes} displaySelectAll={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn>No.</TableHeaderColumn>
                        <TableHeaderColumn>Brand</TableHeaderColumn>
                        <TableHeaderColumn>Model</TableHeaderColumn>
                        <TableHeaderColumn>Car's Year</TableHeaderColumn>
                        <TableHeaderColumn>Car's Color</TableHeaderColumn>
                        <TableHeaderColumn>Dealer Email</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={this.state.showCheckboxes} >{rowList}</TableBody>
                </Table>
            </MuiThemeProvider>
            )
    }
}

// Component write as a function

// const Table2Mui = (props) => {

//     const rowList = props.carsData.map((element, index) => 
//         // We can use as key element id or index
//         <TableRow key={ element.id } >
//             <TableRowColumn>{ index + 1 }</TableRowColumn>
//             <TableRowColumn>{ element.carMake }</TableRowColumn>
//             <TableRowColumn>{ element.carModel }</TableRowColumn>
//             <TableRowColumn>{ element.carModelYear }</TableRowColumn>
//             <TableRowColumn style={{ backgroundColor: `${element.bodyColor}` }}>{ element.bodyColor }</TableRowColumn>
//             <TableRowColumn>{ element.dealerEmail }</TableRowColumn>
//         </TableRow>
//         )

//     return (
//         <MuiThemeProvider>
//             <Table>
//                 <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
//                 <TableRow>
//                     <TableHeaderColumn>No.</TableHeaderColumn>
//                     <TableHeaderColumn>Brand</TableHeaderColumn>
//                     <TableHeaderColumn>Model</TableHeaderColumn>
//                     <TableHeaderColumn>Car's Year</TableHeaderColumn>
//                     <TableHeaderColumn>Car's Color</TableHeaderColumn>
//                     <TableHeaderColumn>Dealer Email</TableHeaderColumn>
//                 </TableRow>
//                 </TableHeader>
//                 <TableBody displayRowCheckbox={false} >{rowList}</TableBody>
//             </Table>
//         </MuiThemeProvider>
//     )
// }

export default Table2Mui;