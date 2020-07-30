import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chart from '../Chart';
import Rechart from '../Rechart';


const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Chart} />
          <Route path="/charttwo" component={Rechart} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;