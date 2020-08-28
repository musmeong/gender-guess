import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

class IntroScreen extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="intro-logo">
            <div className="cloud-box-title sb1">
              <div className="cloud-text">
                Welcome to <br/><span><b>Gender Guess</b></span>.
              </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="cloud-box-subtitle sb2">
              <div className="cloud-text">
                I will guess your gender by asking <span>some of your interests</span>.
              </div>
            </div>
          </div>
          <input
            className="App-link"
            type="submit"
            onClick={this.continue}
            value="Start Game" />
        </header>
      </div>
    );
  }
}

export default IntroScreen;
