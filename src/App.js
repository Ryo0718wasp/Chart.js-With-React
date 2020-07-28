import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Chart chartData={this.state.chartData} legendPosition="bottom" location="Massachusetts" />
      </div>
    );
  }
}

export default App;