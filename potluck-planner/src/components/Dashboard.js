
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import axios from 'axios';
import Header from './Header';
import PotluckCard from './PotluckCard';
import MyDatePicker from './DatePicker';

import { getUsers, getEvents } from '../actions';

const Dashboard = props => {

  useEffect(_ => (
    props.getUsers(),
    props.getEvents()
  ), [])

  console.log("props in Dashboard: ", props);

  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const id = [props.match.params.id];
  //   axios
  //     .get(`https://potluckplanner-be.herokuapp.com/${id}`)
  //     .then(response => {
  //       setEvents(response.data.result);
  //       console.log(response.data.result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },[props.match.params.id])

  if (props.events.length > 0) {
    return (
      <section className="dashboard">
        <Header />
        <MyDatePicker />
        <div className="potluck-cards">
          {props.events.map(event => {
            return (<PotluckCard key={event.id} event={event} />);
          })}
        </div>
      </section>
    )
  }
  return <h3>Loading</h3>
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  }
}

export default connect(mapStateToProps, { getUsers, getEvents })(Dashboard);