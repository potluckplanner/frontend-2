import React from 'react';
import { connect } from 'react-redux';
import {Tab, Menu, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const createLabel = (iconName, labelText) => (

    <span>
      <Icon name={iconName} />
      {labelText}
    </span>
  );
  
  const dashboardLabel = createLabel("th", "My Potlucks");

  
  const panes = [
    
    {
      menuItem: ( 
        <Menu.Item key="dashboard" as={NavLink} to={`/dashboard`} content={dashboardLabel} />
      )
    },
 
  ];
  
  const Nav = props => {

    console.log("props in Nav.js: ", props);

    return (<Tab panes={panes} renderActiveOnly={false} />)
  };

  const mapStateToProps = state => {
    return {
      users: state.users,
      events: state.events
    }
  }
  
  export default connect(mapStateToProps, {})(Nav);