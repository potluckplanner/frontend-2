import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import Header from './Header';
import PotluckCard from './PotluckCard';
import MyDatePicker from './DatePicker';

const Dashboard = props => {

  console.log("props in Dashboard: ", props);

  const [potlucks, setPotlucks] = useState([]);

  useEffect(() => {
    const id = [props.match.params.id];
    axios
      .get(`https://pure-headland-63143.herokuapp.com/${id}`)
      .then(response => {
        setPotlucks(response.data.result);
        console.log(response.data.result);
      })
      .catch(error => {
        console.log(error);
      })
  },[props.match.params.id])

  return (
    <section className="dashboard">
      <Header />
      <MyDatePicker />
      {potlucks.map(potluck => {
        return <PotluckCard key={potluck.id} potluck={potluck} />;
      })}
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