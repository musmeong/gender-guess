import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

import sprite from "../assets/sprite.jpg";
import cocacola from "../assets/cocacola.jpg";
import fanta from "../assets/fanta.jpg";
import other from "../assets/othersoft.jpg";

class SoftdrinkFormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      loadinginButton: false
    };
  }

  fetchData = () => {
    this.setState({loadinginButton: true});

    setTimeout(() => {
      this.setState({loadinginButton: false});
    }, 15000);
  }

  // Last choice will trigger modal section to true
  handleClickChoice(e) { 
    e.preventDefault();
    this.setState({isModalOpen: true});
    this.props.handleChange('softdrink', e);
  }

  handleClickSubmit() {
    this.props.givePred();
    this.fetchData();
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {
      values: { color, music, beverage, softdrink }
    } = this.props;

    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>Are you sure?</h2>
              <b><span className="a-span">Favorite Color</span>: </b>{color}<br/>
              <b><span className="a-span">Favorite Music</span>: </b>{music}<br/>
              <b><span className="a-span">Favorite Beverage</span>: </b>{beverage}<br/>
              <b><span className="a-span">Favorite Soft Drink</span>: </b>{softdrink}<br/>
            </div>
            <div className="modal-button-nav">
              <button
                className='modal-submit-btn'
                disabled={this.state.loadinginButton}
                onClick={() => this.handleClickSubmit()}
              >
                {this.state.loadinginButton && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {this.state.loadinginButton && <span>Loading</span>}
                {!this.state.loadinginButton && <span>Submit</span>}
              </button>
              <button
                className='modal-close-btn'
                onClick={() => this.handleClickClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Form">
        <div className="genie">
          <img src={logo} className="App-logo-Form" alt="logo" />
        </div>
        <div className="quiz">
          <div className="cloud-question sb2">
            What is your favorite soft drink?
          </div>
          <div className="Choice">
            <div className="row-choice">
              <button className="item-choice"
                value="7UP/Sprite"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={sprite} alt="7UP/Sprite" />
                <p>7UP/Sprite</p>
              </button>
              <button className="item-choice"
                value="Coca Cola/Pepsi"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={cocacola} alt="Pepsi" />
                <p>Coca Cola<br/>/Pepsi</p>
              </button>
            </div>
            <div className="row-choice">
              <button className="item-choice"
                value="Fanta"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={fanta} alt="Fanta" />
                <p>Fanta</p>
              </button>
              <button className="item-choice"
                value="Other"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={other} alt="Other" />
                <p>Other</p>
              </button>
            </div>
          </div>
          <input
            className="Back-link"
            type="submit"
            onClick={this.back}
            value="Back" />
          {modal}
        </div>
      </div>
    );
  }
}

export default SoftdrinkFormDetails;
