import React from 'react';

function PotluckPage( props ) {
    const event = props.events.find( event => props.match.params.id === `${event.id}` );
    console.log(`PotluckPage: `, props);
  return (
    <div>
      <div className = "potluck-page">
        <img src={require('./img/potluck-img.jpg')} alt = "Potluck by Brooke Lark" />
        <h1>Event Name: {event.name}</h1>
        <h2>Description: {event.description}</h2>
        <h3>Locatoin: {event.location}</h3>
      </div>
    </div>
  );
}

export default PotluckPage;