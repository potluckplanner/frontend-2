import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}