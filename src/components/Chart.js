import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfiled",
          "Lowell",
          "Cambridge",
          "New Bedford",
        ],
        datasets: [
          {
            label: '人口',
            data: [
              644292, 905450, 376785, 429748, 155463, 403136
            ],
            backgroundColor: [
              "rgba(255,  99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largets Cities In Massatusetts',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

      </div>
    );
  }
}

export default Chart;