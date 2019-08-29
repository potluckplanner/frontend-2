import React from 'react';

function PotluckPage( props ) {
    const event = props.events.find( event => props.match.params.id === `${event.id}` );
    console.log(`PotluckPage: `, props);
  return (
    <div>
      <div className = "potluck-page">
        <img src={require('./img/potluck-img.jpg')} alt = "Potluck by Brooke Lark" />
        <h1>Event Name: {event.event_name}</h1>
        <h2>Date: {event.event_date}</h2>
        <h3>Time: {event.event_time}</h3>
        <p>Location: {event.address}</p>
        <p>Description: {event.description}</p>
      </div>
    </div>
  );
}

export default PotluckPage;