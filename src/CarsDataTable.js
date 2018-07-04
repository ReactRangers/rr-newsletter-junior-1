import React from 'react';
import Table from './Table';
import Table2Mui from './Table2Mui'

const CarsDataTable = (props) => {

  return (
    <div>
      The list has {props.cars.length} cars.<br />
      <b>Your task is to render a table here</b>
      <Table carsData={props.cars}/>
      <Table2Mui carsData={props.cars}/>
    </div> 
  );
};

export default CarsDataTable;
