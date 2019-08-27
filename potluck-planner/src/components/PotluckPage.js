import React from 'react';

function PotluckPage( props ) {
    const event = props.events.find( event => props.match.params.id === `${event.id}` );
  return (
    <div>
      <div className = "potluck-page">
        <img src={require('../components/img/potluck-img.png')} alt = "Classified image by Brooke Lark" />
        <h1>{event.name}</h1>
        <h2>{event.description}</h2>
        <h3>{event.location}</h3>
      </div>
    </div>
  );
}

export default PotluckPage;