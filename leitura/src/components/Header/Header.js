import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import { styles } from './Header.styles';

// TODO: transformar criar post em sua propria tela

class Header extends Component {
  goToAddPostPage = () => {
    alert('fazer pagina de adicionar post')
  }

  render() {
    const { title, classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <NavLink className={classes.homeLink} to="/">
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </NavLink>
          <Button 
            onClick={this.goToAddPostPage}
            className={classes.addPost} 
            color="inherit"
          >
            Add post
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header);
