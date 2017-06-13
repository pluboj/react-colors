import React, { Component } from 'react';
import './App.css';
import { Grid, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  state = {
    bck: 'lightgrey',
  };

  handleColor = (color) => {
    this.setState({
      bck: color,
    });
  };
  
  render() {
    return (
      <Grid className="grid-layout">
        <ButtonList
          handleClick={this.handleColor}
        >
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
  handleClick = (e) => {
    this.props.handleClick(e.target.name);
  }

  addColor = (e) => {
    const colors = this.state.colors;
    const clr_index = colors.indexOf('closed');
    colors.splice(clr_index,0,this.generateColor());

    this.setState({
      colors: colors,
    })
  }

  generateColor = () => {
    const hue = 'rgb(' + this.getRandom() + ',' + this.getRandom() + ',' + this.getRandom() + ')';
    return hue;
  }

  getRandom = () => (
    Math.floor(Math.random() * 256)
  ) 

  state = {
    colors: [
      'closed',
    ]
  }

  render() {

    const buttons = this.state.colors.map((item,index) => (
        <button
          className="btn-layout"
          key={index}
          style={{backgroundColor:item === 'closed' ? 'lightgrey' : item}}
          name={item}
          onClick={item === 'closed' ? this.addColor : this.handleClick}
        >
        {item === 'closed' ? '+' : ''}
        </button>
      )
    )

    return (
      <ButtonToolbar className="btn-list-layout">
        {buttons}
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
      marginTop: '30px',
    }

    return (
      <div style={displayStyle}></div>
    );
  }
}

export default App;
