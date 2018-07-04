import React, { Component } from "react";

class Titles extends Component {
    render() {
        const titles = ["Make", "Model", "Model year", "Color", "Dealer e-mail"];
        return(
               titles.map(title => <td> {title} </td>)
            )
    }
}
export default Titles;