import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

import electronic from "../assets/electronic.jpg";
import folk from "../assets/folk.jpg";
import hiphop from "../assets/hiphop.jpg";
import pop from "../assets/pop.jpg";
import jazz from "../assets/jazz.jpg";
import rnb from "../assets/rnb.jpg";
import rock from "../assets/rock.jpg";

class MusicFormDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleChange('music', e);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            What is your favorite music?
          </div>
          <div className="Choice">
            <div className="row-choice">
              <button className="item-choice" value="Electronic" onClick={this.continue}>
                <img src={electronic}/>
                <p>Electronic</p>
              </button>
              <button className="item-choice" value="Folk/Traditional" onClick={this.continue}>
                <img src={folk}/>
                <p>Folk/Traditional</p>
              </button>
              <button className="item-choice" value="Hip Hop" onClick={this.continue}>
                <img src={hiphop}/>
                <p>Hip Hop</p>
              </button>
              <button className="item-choice" value="Jazz/Blues" onClick={this.continue}>
                <img src={jazz}/>
                <p>Jazz/Blues</p>
              </button>
            </div>
            <div className="row-choice">
              <button className="item-choice" value="Pop" onClick={this.continue}>
                <img src={pop}/>
                <p>Pop</p>
              </button>
              <button className="item-choice" value="R&B and Soul" onClick={this.continue}>
                <img src={rnb}/>
                <p>R&B and Soul</p>
              </button>
              <button className="item-choice" value="Rock" onClick={this.continue}>
                <img src={rock}/>
                <p>Rock</p>
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

export default MusicFormDetails;
