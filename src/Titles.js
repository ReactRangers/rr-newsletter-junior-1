import React, { Component } from "react";

class Titles extends Component {
    render() {
        const titles = ["Make", "Model", "Model year", "Color", "Dealer e-mail"];
        const tdStyle = {padding: "0 20px", backgroundColor: "#7f7f7f", fontWeight: "bold"}
        return(
               titles.map(title => <td style={tdStyle}> {title} </td>)
            )
    }
}
export default Titles;