import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

import anastasiaAvatar from './anastasia.png';
import arthurAvatar from './arthur.png';
import jackAvatar from './jack.png';
import michaelAvatar from './michael.png';

const styles = () => ({
  margin: {
    marginTop: '10px'
  }
});

const stuff = [
  {
    name: "Anastasia Morgan",
    img: anastasiaAvatar,
    number: "(296) 215-1342"
  },
  {
    name: "Arthur Jackson",
    img: arthurAvatar,
    number: "(921) 936-8292"
  },
  {
    name: "Jack Owson",
    img: jackAvatar,
    number: "(316) 782-1111"
  },
  {
    name: "Michael Luciano",
    img: michaelAvatar,
    number: "(253) 346-7416"
  }
];

function Stuff(props) {
  const { classes } = props;

  const stuffItems = stuff.map((employee) => 
    <ListItem key={employee.name}>
      <ListItemAvatar>
        <Avatar src={employee.img} alt={employee.name} />
      </ListItemAvatar>
      <ListItemText primary={employee.name} secondary={employee.number} />
    </ListItem>
  );

  return (
    <Paper className={classes.margin}>
      <List>
        <ListItem>
          <ListItemText primary="Our Staff" />
        </ListItem>
        { stuffItems }
      </List>
    </Paper>
  );
}

export default withStyles(styles)(Stuff);