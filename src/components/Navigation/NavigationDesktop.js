import React from 'react';

import { routesList } from '../Routes';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  button: {
    backgroundColor: theme.palette.background.default,
    fontSize: '2em',
    padding: '1em',
    width: '100%',
    fontFamily: "'Playfair Display', serif",
    opacity: '0.95',
    '&:hover': {
      textShadow: '2px 2px 15px black',
    }
  }
});

function NavigationDesktop(props) {
  // Navigation for desktop and large screens
  const { classes } = props;

  const itemSize = Math.floor(12 / routesList.length);
  const routesLinks = routesList.map(route => 
    <Grid item xs={itemSize} key={route.path}>
      <NavLink exact={route.exact} to={route.path} activeClassName='active-link--desktop'>
        <ButtonBase className={classes.button}>
          { route.title }
        </ButtonBase>
      </NavLink>
    </Grid>
  );

  return (
    <Grid container>
      { routesLinks }
    </Grid>
  );
}

export default withStyles(styles)(NavigationDesktop);