import React from 'react';

function PotluckPage( props ) {
    const potluck = props.potlucks.find( potluck => props.match.params.id === `${potluck.id}` );
  return (
    <div>
      <div className = "potluck-page">
        <img src = "/potluck-img.jpg" alt = "Classified image by Brooke Lark" />
        <h1>{potluck.name}</h1>
        <h2>{potluck.description}</h2>
        <h3>{potluck.location}</h3>
      </div>
    </div>
  );
}

export default PotluckPage;