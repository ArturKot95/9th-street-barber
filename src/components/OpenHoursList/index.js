import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';

function OpenHoursList(props) {
  return (
    <List>`
      <ListItem>
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Open Early, Close Late" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Monday" secondary="10AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Tuesday" secondary="10AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Wednesday" secondary="10AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Thursday" secondary="10AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Friday" secondary="10AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Saturday" secondary="12AM - 6PM" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BlockIcon />
        </ListItemIcon>
        <ListItemText primary="Sunday" secondary="Closed" />
      </ListItem>
    </List>
  );
}

export default OpenHoursList;