import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import './layout.scss';

function Layout(props) {
  return ( 
    <Fragment>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            ToDo App 
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
      <div className="footer">
        <div>
          footer
        </div>
      </div>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};
 
export default Layout;