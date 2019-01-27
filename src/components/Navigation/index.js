import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

function Navigation(props) {
  return (
    <React.Fragment>
      <Hidden xsDown>
        <NavigationDesktop />
      </Hidden>
      <Hidden smUp>
        <NavigationMobile />
      </Hidden>
    </React.Fragment>   
  );
}



export default Navigation;