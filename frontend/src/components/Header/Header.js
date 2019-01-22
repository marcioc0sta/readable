import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({title}) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header;
