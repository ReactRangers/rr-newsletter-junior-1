import React from 'react';
import Car from "./Car";
import Titles from "./Titles";
import "./CarsDataTable.css";

const CarsDataTable = (props) => {
    const allCars = props.cars.map((car, index) => (
        <tr key={index}><Car carParams={car} /></tr>
    ))
const tableStyle = {border: "2px solid grey", textAlign: "center", padding: 0}
const divStyle = {textAlign: "center"}
  return (
    <div style={divStyle} ClassName="table">
      The list has {props.cars.length} cars.<br />
      <b>Your task is to render a table here </b>.
        <table style={tableStyle}>
            <Titles />
            {allCars}
        </table>
    </div>
  );
};
export default CarsDataTable;
