import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

import beer from "../assets/beer.jpg";
import vodka from "../assets/vodka.jpg";
import whiskey from "../assets/whiskey.jpg";
import wine from "../assets/wine.jpg";
import other from "../assets/otheralc.jpg";
import nodrink from "../assets/nodrink.jpg";

class BeverageFormDetails extends Component {
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
    return (
      <div className="Form">
        <div className="genie">
          <img src={logo} className="App-logo-Form" alt="logo" />
        </div>
        <div className="quiz">
          <div className="cloud-question sb2">
            What is your favorite beverage?
          </div>
          <div className="Choice">
            <div className="row-choice">
              <button className="item-choice" value="Beer" onClick={this.continue}>
                <img src={beer} alt="Beer" />
                <p>Beer</p>
              </button>
              <button className="item-choice" value="Vodka" onClick={this.continue}>
                <img src={vodka} alt="Vodka" />
                <p>Vodka</p>
              </button>
              <button className="item-choice" value="Whiskey" onClick={this.continue}>
                <img src={whiskey} alt="Whiskey" />
                <p>Whiskey</p>
              </button>
            </div>
            <div className="row-choice">
              <button className="item-choice" value="Wine" onClick={this.continue}>
                <img src={wine} alt="Wine" />
                <p>Wine</p>
              </button>
              <button className="item-choice" value="Other" onClick={this.continue}>
                <img src={other} alt="Other" />
                <p>Other</p>
              </button>
              <button className="item-choice" value="Nothing" onClick={this.continue}>
                <img src={nodrink} alt="Nothing" />
                <p>Nothing</p>
              </button>
            </div>
          </div>
          <input
            className="Back-link"
            type="submit"
            onClick={this.back}
            value="Back" />
        </div>
      </div>
    );
  }
}

export default BeverageFormDetails;
