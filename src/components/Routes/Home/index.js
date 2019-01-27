import React from 'react';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';

import { Link } from 'react-router-dom';

import StarsIcon from '@material-ui/icons/Stars';

import { withStyles } from '@material-ui/core/styles';

import homePhoto from './home.jpg';
import offerPhotoBeardTrim from './offer3.jpg';
import offerPhotoRegularHaircut from './offer2.jpg';
import offerPhotoRoyalShave from './offer1.jpg';
import discountPhoto from './discount.jpg';
import salePhoto from './sale.jpg';

import Stuff from '../../Stuff';
import OpenHoursList from '../../OpenHoursList';

const styles = theme => ({
  container: {
    width: '100%'
  },
  item: {
    padding: '1em'
  },
  padding: {
    padding: '1em'
  },
  paper: {
    marginBottom: '1em'
  },
  homePhoto: {
    background: `url(${homePhoto})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: '548px',
    borderRadius: '4px'
  },
  photo: {
    width: '100%'
  }
});

const offerPhotoStyles = () => ({
  photo: {
    width: '100%',
    height: '200px',
    borderRadius: '4px',
    marginTop: '1em',
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"

  },
  paper: {
    padding: '7px',
    marginTop: '10px'
  }
});

function OfferPhoto(props) {
  const { classes } = props;
  
  return (
    <div style={{backgroundImage: `url(${props.photo})`}} className={classes.photo} />
  );
}

OfferPhoto = withStyles(offerPhotoStyles)(OfferPhoto);

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Hidden smDown>
        <Grid container>
          <Grid item xs={12} className={classes.homePhoto} />
        </Grid>
      </Hidden>
      <Grid container className={classes.container}>
        <Grid item xs={12} lg={6} className={classes.item}>
          <Paper className={classNames(classes.padding, classes.paper)}>
            <Typography variant="h2">
              9th Street Barber
            </Typography>
            <Typography component="p">
              9th Street Barber, founded by Jack Owson, provides high-end, low-cost quality services. Mixing the classic comforts
              and contemporary hairstyling of today, with experienced stuff provides unique experience and guaranteed client satisfaction.
            </Typography>
            <hr />
            <Typography variant="h3">
              Men's Haircut and Shaving
            </Typography>
            <Typography component="p">
              From old school straight razor shave to traditional wet shaving. We use high-quality assortment and tools to
              provide your satisfaction and enjoyment. And of course You will be pleased with Your new fresh, great-looking hairstyle.
            </Typography>
          </Paper>
          <Grid item xs={12}>
            <Paper className={classNames(classes.padding, classes.paper)}>
              <img src={discountPhoto} style={{borderRadius: '3px'}} className={classes.photo} alt="discount" />
            </Paper>
          </Grid>
        </Grid>
        <Grid container xs={12} lg={6}>
          <Grid item xs={12} lg={6} className={classNames(classes.padding, classes.item)}>
            <Paper>
              <OpenHoursList />
            </Paper>
            <Grid item xs={12}>
              <Stuff />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.item}>
            <Paper>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <StarsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Popular Services" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Regular Haircut" secondary={
                    <OfferPhoto photo={offerPhotoRegularHaircut} />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Beard Trim" secondary={
                    <OfferPhoto photo={offerPhotoBeardTrim} />
                  } />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Royal Shave" secondary={
                    <OfferPhoto photo={offerPhotoRoyalShave} />
                  } />
                </ListItem>
                <Link to="/offer">
                  <ListItem button>
                    <ListItemText primary="See Offer" />
                  </ListItem>
                </Link>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} >
          <Paper className={classNames(classes.padding, classes.paper)}>
              <img src={salePhoto} style={{borderRadius: '3px'}} className={classes.photo} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withStyles(styles)(Home);