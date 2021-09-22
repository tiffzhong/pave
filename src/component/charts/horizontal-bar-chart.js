import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class HorizontalBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
  render() {
    return (
      <div className="chart-container">
        <Bar
          type="verticalBar"
          data={this.state.chartData}
          labels={this.state.chartData.labels}
          options={{
            responsive: true,
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2,
              }
            },
            plugins: {
              legend: {
                display: true,
                postion: 'right'
              },
              title: {
                display: true,
                text: this.props.title,
                fontSize: 25
              }
            }
          }} />
      </div>
    )
  }
}
export default HorizontalBarChart;