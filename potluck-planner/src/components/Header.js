import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

const Header = props => {

  return (
    <header className="ui red header segment">
      <Image className="ui centered medium image" src={require('../components/img/logo.png')} alt="Potluck Planner Logo" />
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