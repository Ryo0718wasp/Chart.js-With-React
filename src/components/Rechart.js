import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, HorizontalBar, Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
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
        <Link to="/">
          <button>
            show PageTwo when you click this!!
        </button>
        </Link>
        <div className="chart-grid">
          <h2>seconnd</h2>
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