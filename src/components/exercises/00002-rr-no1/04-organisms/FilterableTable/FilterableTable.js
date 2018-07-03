import React, {Component} from 'react';
import SearchBar from '../../02-molecules/SearchBar/SearchBar';
import TableContent from '../../03-cells/TableContent/TableContent';
import carsData from '../../data/carsData';

class FilterableTable extends Component{
    /*
     * Component constructor
     */
    constructor(props){
        super(props);
        this.state = {
            searchInputValue: ''
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue(event) {
        //console.log(`Task name state: ${event.target.value}`);
        this.setState({
            searchInputValue: event.target.value
        });
    }


    render(){
        return (
            <div>
                <SearchBar
                    searchArrayBy={this.state.searchInputValue}
                    controlFunction={this.handleInputValue}
                />
                <TableContent
                    searchArrayBy={this.state.searchInputValue}
                    carsArray={carsData}
                />
            </div>
        );
    }

};

export default FilterableTable;
