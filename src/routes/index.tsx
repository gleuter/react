import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import { Dashbaord } from '../pages/Dashboard';
// import { Repo } from '../pages/Repo';

const Dashbaord = React.lazy(() => import('../pages/Dashboard'));
const Repo = React.lazy(() => import('../pages/Repo'));


export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
    <Switch>
      <Route component={Dashbaord} path="/" exact />
      <Route component={Repo} path="/repositories/:repository+" />
    </Switch>
  </React.Suspense>
  );
}

