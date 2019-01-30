import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddPostForm from '../AddPostForm/AddPostForm';

import { styles } from './Header.styles';

class Header extends Component {
  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  }

  renderDialog = () => {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a new post"}</DialogTitle>
        <DialogContent>
          <AddPostForm handleDialogClose={this.handleDialogClose} />
        </DialogContent>
      </Dialog>
    )
  }

  render() {
    const { title, classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
          <Button 
            onClick={this.handleDialogOpen}
            className={classes.addPost} 
            color="inherit"
          >
            Add post
          </Button>
        </Toolbar>
        {this.renderDialog()}
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header);
