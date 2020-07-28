import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Chart legendPosition="bottom" />
    </div>
  );
}

export default App;
