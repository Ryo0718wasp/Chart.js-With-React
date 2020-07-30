import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, HorizontalBar, Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount = () => {
    this.getChartData();
  }


  getChartData() {
    this.setState({
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
    })
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }
  render() {
    return (
      <div className="chart">
        <Link to="/charttwo">
          <button>
            show PageTwo when you click this!!
        </button>
        </Link>
        <div className="chart-grid">
          <Bar
            width={600}
            height={600}
            data={this.state.chartData}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
            }}
          />
          <Line
            width={600}
            height={600}
            data={this.state.chartData}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          <HorizontalBar
            width={600}
            height={600}
            data={this.state.chartData}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
        <div className="chart-grid">
          <Polar
            data={this.state.chartData}
            width={600}
            height={600}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          <Pie
            data={this.state.chartData}
            width={600}
            height={600}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          <Radar
            data={this.state.chartData}
            width={600}
            height={600}
            options={{
              responsive: false,
              title: {
                display: this.props.displayTitle,
                text: 'Largets Cities In ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>

      </div>
    );
  }
}

export default Chart;