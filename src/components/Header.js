import React from 'react';
import Navigation from './Navigation';

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import logo from './logo.png';
import background from './header_background.jpg';

const styles = () => ({
  container: {
    background: `url(${background})`,
    backgroundRepeat: 'repeat',
  }
});

const logoStyles = () => ({
  logo: {
    background: `url(${logo})`,
    width: 225,
    height: 160,
    margin: 'auto',
    backgroundSize: '100% 100%',
    opacity: '0.95',
    borderRadius: '4px'
  }
});

function Logo(props) {
  const { classes } = props;
  return <div className={classes.logo} />;
}

Logo = withStyles(logoStyles)(Logo);

function Header(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
    </Grid>
  );
  }


export default withStyles(styles)(Header);