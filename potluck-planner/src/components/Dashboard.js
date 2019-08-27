import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import Header from './Header';
import PotluckCard from './PotluckCard';
import MyDatePicker from './DatePicker';

const Dashboard = props => {

  console.log("props in Dashboard: ", props);

  const [events, setevents] = useState([]);

  useEffect(() => {
    const id = [props.match.params.id];
    axios
      .get(`https://pure-headland-63143.herokuapp.com/${id}`)
      .then(response => {
        setevents(response.data.result);
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
      {events.map(event => {
        return (<PotluckCard key={event.id} event={event} />);
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