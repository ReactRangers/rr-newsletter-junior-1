import React from 'react';

type Props = {
  cars: Array<Car>
}

type Car = {
  id: string,
  carMake: string,
  carModel: string,
  carModelYear: string,
  bodyColor: string,
  dealerEmail: string,
}

export default class CarsDataTable extends React.Component<Props> {
  renderRow(car) {
    return (
      <tr>
        <td>
          {car.carMake}
        </td>
        <td>
          {car.carModel}
        </td>
        <td>
          {car.carModelYear}
        </td>
        <td style={{backgroundColor: car.bodyColor}} />
        <td>
          {car.dealerEmail}
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table>
        <tr>
          <th>Brand</th>
          <th>Model number</th>
          <th>Year</th>
          <th>Color</th>
          <th>Dealer email address</th>
        </tr>
        {this.props.cars.map(car => this.renderRow(car))}
      </table>
    )
  }
};
