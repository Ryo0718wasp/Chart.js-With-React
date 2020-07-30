import React, { useState, Component } from 'react';
import './App.css';
import { FcGenericSortingDesc } from 'react-icons/fc';
import AppRoute from './components/router/AppRoute';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo-wrapper">
            <FcGenericSortingDesc style={{ fontSize: 30 }} />
            <h2 className="Logo-wrapper-inner-text">PRST Analysis tools</h2>
          </div>
        </header>
        <AppRoute />
      </div>
    );
  }
}

export default App;