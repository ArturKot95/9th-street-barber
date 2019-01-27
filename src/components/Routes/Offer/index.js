import React from 'react';
import shortid from 'shortid';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import servicePhoto from './service.jpg';
import servicesJSON from './services.json';

const styles = theme => ({
  container: {
    padding: '1em',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    marginBottom: '.5em',
    paddingBottom: '.5em',
    borderBottom: `solid 2px ${theme.palette.primary.main}`
  }
});

const serviceCardStyles = () => ({
  card: {
    margin: '1em'
  },
  media: {
    height: 140
  }
});

function ServiceCard(props) {
  const { classes, name, description, price } = props;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={servicePhoto} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          { name } - { price }$
        </Typography>
        <Typography component="p">
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/contact">
          <Button size="small" variant="contained" color="secondary">Contact Us</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

// Apply styles to card
ServiceCard = withStyles(serviceCardStyles)(ServiceCard);

function Offer(props) {
  const { classes } = props;

  const ServiceCardItems = servicesJSON.services.map((service) => 
    <Grid key={shortid.generate()} item xs={12} lg={4}>
      <ServiceCard {...service} />
    </Grid>
  );

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography className={classes.header} variant="h3">Our Services</Typography>
      </Grid>
      { ServiceCardItems }
    </Grid>
  )
}

export default withStyles(styles)(Offer);