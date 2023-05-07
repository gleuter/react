import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Dashbaord } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';


export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route  component={Dashbaord} path="/" exact />
      <Route  component={Repo} path="/repositories/:repository"  />
    </Switch>
  );
}


