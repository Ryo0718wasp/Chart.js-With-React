import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chart from '../Chart';
import Rechart from '../Rechart';
import Nivo from '../Nivo';


const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Chart} />
        <Route path="/charttwo" component={Rechart} />
        <Route path="/chartthree" component={Nivo} />
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;