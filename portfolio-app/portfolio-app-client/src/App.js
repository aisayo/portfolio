import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import './App.css';

class App extends Component {
  render() {
    console.log('props', this.props)
    // const { classes } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">

          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
