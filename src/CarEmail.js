import React, { Component } from "react";

class CarEmail extends Component {
    render(){
        
        return(
            <td>
                <p>
                    <a href={`mailto: ${this.props.mail}`}>{this.props.mail}</a>
                </p>
            </td>
        );
    }
}
export default CarEmail;