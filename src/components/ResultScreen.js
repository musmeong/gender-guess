import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

class ResultScreen extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleChange('beverage', e);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { predValue } = this.props;
    let sex;
    let finalPred;

    // Change the final prob and give label based on prob
    if (predValue < 0.5 ) {
      sex = "Female";
      finalPred = 1 - predValue;
    } else {
      sex = "Male";
      finalPred = predValue;
    }

    return (
      <div className="Form">
        <div className="genie">
          <img src={logo} className="App-logo-Form" alt="logo" />
        </div>
        <div className="quiz">
          <div className="cloud-question sb2">
            <div className="cloud-text" style={{ "font-size": "50px" }}> 
              I am <span>{Math.round(finalPred*100)}% </span>
              sure that you are a <span>{sex}</span>.
            </div>
          </div>
          <input
            className="Reset-link"
            type="submit"
            onClick={this.continue}
            value="Reset Game" />
        </div>
      </div>
    );
  }
}

export default ResultScreen;
