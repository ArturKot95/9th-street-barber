import React from 'react';

import { routesList } from '../Routes';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListIcon from '@material-ui/icons/List';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  menuButton: {
    position: 'fixed',
    zIndex: '1001',
    top: '15px',
    left: '15px'
  }
});

class NavigationMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(isOpen) {
    this.setState({
      menuOpen: isOpen
    });
  }

  render() {
    const { classes } = this.props;

    const routesLinks = routesList.map(route => 
        <NavLink key={route.path} exact={route.exact} to={route.path} activeClassName={'active-link--mobile'}>
          <ListItem>
            <ListItemText primary={route.title} />
          </ListItem>
        </NavLink>
      );
  
    return (
      <React.Fragment>
        <Fab 
        color="primary" 
        aria-label="Menu" 
        className={classes.menuButton}
        onClick={this.toggleMenu.bind(this, true)}>
          <ListIcon />
        </Fab>
        <SwipeableDrawer 
        anchor="left" 
        open={this.state.menuOpen} 
        onClose={this.toggleMenu.bind(this, false)}
        onOpen={this.toggleMenu.bind(this, true)}>
          <div onClick={this.toggleMenu.bind(this, false)}>
            <List component="nav">
              { routesLinks }
              <ListItem>
                <ListItemText secondary="9th Street Barber NYC ©" />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NavigationMobile);