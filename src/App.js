import React, { Component } from 'react';
import './App.css';
import { Grid, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  state = {
    bck: 'lightgrey',
  };
  render() {
    return (
      <Grid className="grid-layout">
        <ButtonList>
        </ ButtonList>
        <Display
          bckColor={this.state.bck}
        >
        </ Display>
      </Grid>
    );
  }
}

class ButtonList extends Component {
  render() {
    return (
      <ButtonToolbar className="btn-list-layout">
        <button 
          className="btn-layout"
        >
        test
        </button>
      </ ButtonToolbar>
    );
  }
}

class Display extends Component {
  render() {
    const displayStyle = {
      backgroundColor: this.props.bckColor,
      width: '50%',
      float: 'right',
      height: 400,
      border: '1px solid grey',
    }

    return (
      <div style={displayStyle}></div>
    );
  }
}

export default App;
