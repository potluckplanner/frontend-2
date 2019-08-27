import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import Signup from './SignUp';
import Dashboard from './Dashboard';

import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* <PrivateRoute path="/event/:id" component={Event} /> */}
      </Switch>
    </div>
  );
}