import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class VerticalBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      employeeTotal: props.employeeTotal,
      maleTotal: props.maleTotal,
      femaleTotal: props.femaleTotal
    }
  }
  render() {
    return (
      <div className="chart-container">
        <Bar
          type="bar"
          data={this.state.chartData}
          labels={this.state.chartData.labels}
          options={{
            // responsive: true,
            plugins: {
              legend: {
                display: true,
                postion: 'top'
              },
              title: {
                display: true,
                text: this.props.title,
                fontSize: 25
              }
            }
          }} />
        <div>
          <p>Total Number of {this.props.title} employees: {this.props.employeeTotal}</p>
          <p>Total Number of Male employees: {this.props.maleTotal}</p>
          <p>Total Number of Female employees: {this.props.femaleTotal}</p>
        </div>

      </div>
    )
  }
}
export default VerticalBarChart;