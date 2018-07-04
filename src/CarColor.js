import React, { Component } from "react";

class CarColort extends Component {
    render(){
        const tdStyle = {backgroundColor: this.props.color, padding: "20px"}
        return(
            <td style={tdStyle}>
                
            </td>
        );
    }
}
export default CarColort;