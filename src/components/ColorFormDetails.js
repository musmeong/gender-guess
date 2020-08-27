import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

import cool from "../assets/cool.jpg";
import neutral from "../assets/neutral.jpg";
import warm from "../assets/warm.jpg";

class ColorFormDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleChange('color', e);
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="Form">
        <div className="genie">
          <img src={logo} className="App-logo-Form" alt="logo" />
        </div>
        <div className="quiz">
          <div class="cloud-question sb2">
            What is your favorite color?
          </div>
          <div className="Choice">
            <button className="item-choice" value="Cool" onClick={this.continue}>
              <img src={cool}/>
              <p>Cool</p>
            </button>
            <button className="item-choice" value="Neutral" onClick={this.continue}>
              <img src={neutral}/>
              <p>Neutral</p>
            </button>
            <button className="item-choice" value="Warm" onClick={this.continue}>
              <img src={warm}/>
              <p>Warm</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorFormDetails;
