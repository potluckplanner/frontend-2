import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

const Header = props => {

  console.log("props in Header: ", props);

  return (
    <header className="ui header red header segment">
      <Image className="ui mini image" src={require('../components/img/utensils-solid.png')} alt="Potluck Planner Logo" />
      <h1>My Potlucks</h1>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  }
}

export default connect(mapStateToProps, {})(Header);