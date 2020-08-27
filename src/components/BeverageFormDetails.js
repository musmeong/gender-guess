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
    if (e.target.value === null) {
      alert("??");
    } else {
      this.props.nextStep();
      this.props.handleChange('beverage', e);
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="Form">
        <div className="genie">
          <img src={logo} className="App-logo-Form" alt="logo" />
        </div>
        <div className="quiz">
          <div class="cloud-question sb2">
            What is your favorite beverage?
          </div>
          <div className="Choice">
            <div className="row-choice" value="Beer" onClick={this.continue}>
              <button className="item-choice">
                <img src={beer}/>
                <p>Beer</p>
              </button>
              <button className="item-choice" value="Vodka" onClick={this.continue}>
                <img src={vodka}/>
                <p>Vodka</p>
              </button>
              <button className="item-choice" value="Whiskey" onClick={this.continue}>
                <img src={whiskey}/>
                <p>Whiskey</p>
              </button>
            </div>
            <div className="row-choice">
              <button className="item-choice" value="Wine" onClick={this.continue}>
                <img src={wine}/>
                <p>Wine</p>
              </button>
              <button className="item-choice" value="Other" onClick={this.continue}>
                <img src={other}/>
                <p>Other</p>
              </button>
              <button className="item-choice" value="Nothing" onClick={this.continue}>
                <img src={nodrink}/>
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
