import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  footer: {
    textAlign: 'center',
    width: '100%',
    padding: '1em'
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <Typography component="p">
        9th Street Barber NYC © 2019 9th Street Barber Shop New York.
      </Typography>
      <Typography component="p">
        All Rights Reserved.
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);