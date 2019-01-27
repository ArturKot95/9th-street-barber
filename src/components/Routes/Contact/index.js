import React from 'react';
import classNames from 'classnames';

import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import OpenHoursList from '../../OpenHoursList';
 
const coords = {
  lat: 40.733991,
  lng: -73.998590
};
 
const params = {v: '3.exp', key: '<API-KEY>'};

const styles = () => ({
  padding: {
    padding: '1em'
  },
  contactColumn: {
    textAlign: 'center'
  }
});



 
class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <Grid container className={classes.padding}>
        <Grid item xs={12} lg={4} className={classNames(classes.contactColumn, classes.padding)}>
          <Typography variant="h4">How To Reach Us</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="439 E 9th St, New York, NY 10009, USA" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="(123) 456 7890" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Owner" secondary="Jack Owson" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.padding}>
        <Gmaps
        style={{borderRadius: '4px'}}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={18}
        loadingMessage={'Loading...'}
        params={params}>
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'9th Street Barber'}
            />
          <Circle
            lat={coords.lat}
            lng={coords.lng}
            radius={10}
            />
          </Gmaps>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.padding}>
          <OpenHoursList />
        </Grid>
      </Grid>
      
    );
  }
 
};

export default withStyles(styles)(Contact);
