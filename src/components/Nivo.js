import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../components/Nivo/BarChart';
import Pie from '../components/Nivo/Pie';


class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <div className="chart-grid">
          <h2>Nivo Ver</h2>
        </div>
        <div className="chart-grid">
          <BarChart />
          <Pie />
        </div>
        <Link to="/">
          <button>
            show PageTwo when you click this!!
        </button>
        </Link>
      </div>
    );
  }
}

export default Chart;