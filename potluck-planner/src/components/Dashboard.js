import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import PotluckCard from './PotluckCard';
import MyDatePicker from './DatePicker';

const Dashboard = props => {

  console.log("props in Dashboard: ", props);

  return (
    <section className="dashboard">
      <Header />
      <MyDatePicker />
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

export default connect(mapStateToProps, {})(Dashboard);