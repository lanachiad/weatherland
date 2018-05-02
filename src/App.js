import React, { Component } from 'react';
import Rain from './Rain';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		showRain: false
  	}
  }

  _onRainBtnClick = () => {
  	let currentRainState = this.state.showRain;
  	this.setState({ showRain: !currentRainState })
  }

  render() {
    return (
      <div className="App">
        <h1>Depending on what the weather is, this page will render a simulated weather experience.</h1>
        <h2>Until I have this figured out, I'll simulate them through buttons, I guess</h2>
        <h3>Oh and this will only be for NYC, so sorry 'bout that</h3> 
        <button onClick={this._onRainBtnClick}>Rain</button>
        <div className="weather-section">
        	{this.state.showRain ? 
        		<Rain /> : 
        		<p>No weather to show</p>
        	}
        </div>
      </div>
    );
  }
}

export default App;
