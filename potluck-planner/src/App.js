import React from 'react';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import NavRouter from './components/NavRouter';
import Form from './components/SignUp';

import './App.css';

function App(props) {
  console.log('props in App.js: ', props);
  return (
    <div className="App">
      <Nav />
      <NavRouter />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  }
}

export default connect(mapStateToProps, {})(App);
