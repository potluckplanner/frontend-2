import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* <PrivateRoute path="/event/:id" component={Event} /> */}
      </Switch>
    </div>
  );
}