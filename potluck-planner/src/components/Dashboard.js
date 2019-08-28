import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import PotluckCard from './PotluckCard';

import { getUsers, getEvents } from '../actions';

const Dashboard = props => {

  console.log("props in Dashboard: ", props);

  useEffect(_ => (
    props.getUsers(),
    props.getEvents()
  ), [])

  return (
    <section className="dashboard">
      <Header />
      <PotluckCard />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  }
}

export default connect(mapStateToProps, { getUsers, getEvents })(Dashboard);