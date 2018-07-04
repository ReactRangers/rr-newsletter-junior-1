import React, { Component } from "react";

class CarText extends Component {
    render(){
        const tdStyle = {padding: "0 20px"}
        return(
            <td style={tdStyle}>
                <p>{this.props.text}</p>
            </td>
        );
    }
}
export default CarText;