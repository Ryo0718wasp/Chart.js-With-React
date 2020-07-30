import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import RechartVer from '../components/Rechart/RechartVer';
import RechartPie from '../components/Rechart/RechartPie';
import RechartBarChart from '../components/Rechart/RechartBarChart';
import RechartArea from '../components/Rechart/RechartArea';
import RechartRadar from '../components/Rechart/RechartRadar';

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
        <div className="chart-grid">
          <h2>Rechart Ver</h2>
        </div>
        <div className="chart-grid">
          {/* <RechartVer /> */}
          <RechartPie />
          <RechartBarChart />
        </div>
        <div className="chart-grid">
          <RechartArea />
          <RechartRadar />
        </div>
        <Link to="/">
          <button>
            show PageTwo when you click this!!
        </button>
        </Link>
        <Link to="/chartthree">
          <button>
            show PageTwo when you click this!!
        </button>
        </Link>
      </div>
    );
  }
}

export default Chart;