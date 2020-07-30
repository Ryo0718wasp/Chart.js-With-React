import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VisBar from '../components/Vis/VisBar';


class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <div className="chart-grid">
          <h2>Nivo Ver</h2>
        </div>
        <div className="chart-grid">
          <VisBar />
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