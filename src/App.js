import React, { Component } from 'react';
import './App.css';
import { Grid, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  state = {
    bck: '#d3d3d3',
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
    const red = this.getHexColor();
    const green = this.getHexColor();
    const blue = this.getHexColor();

    return '#'+red+green+blue;
  }

  getHexColor = () => {
    const rand = Math.floor(Math.random() * 256).toString(16);
    if (rand.length < 2) {
      return '0' + rand;
    }
    return rand;
  }

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
        {item === 'closed' ? '+' : this.white_space}
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
      backgroundColor: '#FFF',
      width: '50%',
      float: 'right',
      height: 500,
      border: '1px solid grey',
      marginTop: '30px',
    }
    return (
      <div style={displayStyle}>
        <DisplayColor bckColor={this.props.bckColor}/>
        <Label bckColor={this.props.bckColor}/>
      </div>
    );
  }
}

class DisplayColor extends Component {
  render() {
   const displayColorStyle = {
     height: 400,
     backgroundColor: this.props.bckColor,
   }
    return (
      <div style={displayColorStyle}></div>
    );
  }
}

class Label extends Component {
  render() {
    const labelStyle = {
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      fontSize: 34,
      padding: 20,
    }
    return (
      <p style={labelStyle}>{this.props.bckColor}</p>
    );
  }
}

export default App;
