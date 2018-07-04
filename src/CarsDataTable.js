import React from 'react';
import Car from "./Car";
import Titles from "./Titles";


const CarsDataTable = (props) => {
    const allCars = props.cars.map((car, index) => (
        <tr key={index}><Car carParams={car} /></tr>
    ))
const tableStyle = {border: "2px solid black"}
const titles = Object.keys(props.cars[0]);
  return (
    <div>
      The list has {props.cars.length} cars.<br />
      <b>Your task is to render a table here </b>.
        <table style={tableStyle}>
            <Titles colNames={titles} />
            {allCars}
        </table>
    </div>
  );
};
export default CarsDataTable;
