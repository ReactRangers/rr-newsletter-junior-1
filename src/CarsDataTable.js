import React from 'react';

const CarsDataTable = (props) => {
  return (
    <div>
      The list has {props.cars.length} cars.<br />
      <b>Your task is to render a table here</b>.
    </div>
  );
};

export default CarsDataTable;
