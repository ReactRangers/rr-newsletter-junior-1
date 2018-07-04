import React, { Component } from "react";
import CarText from "./CarText";
import CarColor from "./CarColor";
import CarEmail from "./CarEmail";



class Car extends Component {
    render() {
        const {id, carMake, carModel, carModelYear, bodyColor, dealerEmail} = this.props.carParams;
        const CarParams = Object.values(this.props.carParams);
        return(
                [<CarText text={carMake} />,
                <CarText text={carModel} />,
                <CarText text={carModelYear} />,
                <CarColor color={bodyColor} />,
                <CarEmail mail={dealerEmail} />]
        );
    }
}

export default Car;