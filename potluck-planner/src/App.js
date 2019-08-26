import React from 'react';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  console.log('props in App.js: ', props);
  return (
    <div className="App">
      <h1>Potluck Planner</h1>
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
