import React from 'react';
import { connect } from 'react-redux';

const Header = props => {

  console.log("props in Header: ", props);

  return (
    <header className="header">
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