import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

// Import gallery photos
import photo1 from './1.jpg';
import photo2 from './2.jpg';
import photo3 from './3.jpg';
import photo4 from './4.jpg';

const photos = [photo1, photo2, photo3, photo4];

const galleryCardStyles = () => ({
  photo: {
    width: '100%'
  }
});

function GalleryCard(props) {
  const { classes } = props;

  return (
    <Card onClick={props.onClick.bind(this, props.photo)}>
      <CardActionArea>
        <CardContent>
          <img src={props.photo} className={classes.photo} alt="service_photo" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
GalleryCard = withStyles(galleryCardStyles)(GalleryCard);

const galleryDialogStyles = () => ({
  appBar: {
    position: 'relative'
  },
  photo: {
    width: '100%'
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function GalleryDialog(props) {
  const { classes } = props;

  return (
    <Dialog
    fullScreen
    open={props.open}
    onClose={props.onClose}
    TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={props.onClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Button variant='text' onClick={props.onClose}>Close</Button>
        </Toolbar>
        <img src={props.photo} className={classes.photo} alt="service_photo" />
      </AppBar>
    </Dialog>
  );
}

GalleryDialog = withStyles(galleryDialogStyles)(GalleryDialog);

const galleryStyles = () => ({
  item: {
    padding: '5px'
  }
});

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogPhoto: null
    }

    this.handleDialogClickOpen = this.handleDialogClickOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleDialogClickOpen(photo) {
    this.setState({
      dialogOpen: true,
      dialogPhoto: photo
    });
  }

  handleDialogClose() {
    this.setState({
      dialogOpen: false,
      dialogPhoto: null
    });
  }

  render() {
    const { classes } = this.props;

    const photoCards = photos.map((photo) => 
      <Grid key={photo} item xs={12} md={6} lg={4} className={classes.item}>
        <GalleryCard 
        onClick={this.handleDialogClickOpen}
        photo={photo} />
      </Grid>
    );

    return (
      <React.Fragment>
        <Grid container>
          { photoCards }
        </Grid>
        <GalleryDialog
        open={this.state.dialogOpen}
        onClose={this.handleDialogClose}
        photo={this.state.dialogPhoto} />
      </React.Fragment>
    )
  }
}

export default withStyles(galleryStyles)(Gallery);