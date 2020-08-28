import React, { Component } from 'react';
import logo from '../genie.png';
import '../AppForm.css';

import * as tf from '@tensorflow/tfjs';
// import * as tfn from '@tensorflow/tfjs-node';

import modeltf from "../models/model.json";
import sprite from "../assets/sprite.jpg";
import cocacola from "../assets/cocacola.jpg";
import fanta from "../assets/fanta.jpg";
import other from "../assets/othersoft.jpg";
// modelok.then(function (res) {
//   const example = tf.tensor2d([[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]]);
//   const prediction = res.predict(example);
//   console.log(prediction);
// }, function (err) {
//   console.log(err);
// })

class SoftdrinkFormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      predictValue: ''
    };
  }

  handleClickChoice(e) { 
    e.preventDefault();
    this.setState({isModalOpen: true});
    this.props.handleChange('softdrink', e);
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // loadModeltf() {
  //   const modelLoad = async () => {
  //     const model = await tf.loadLayersModel(modeltf);
  //     // const example = tf.tensor2d([[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]]);
  //     // this.setState({predictValue: example});
  //   };
  //   modelLoad();
  // }
  

  render() {
    const {
      values: { color, music, beverage, softdrink }
    } = this.props;

    
    const loadModeltf = async () => {
      const handler = tf.io.browserFiles(modeltf);
      const modelok = await tf.loadLayersModel(handler);
      return modelok;
    };
    
    let modelok = loadModeltf();

    

    // await model = tf.loadLayersModel(modeltf);

    // this.loadModeltf();
    // loadModel;
    

    // const handlePredict = () => {
    //   // Use the model to do inference on a data point the model hasn't seen before:
    //   const predictedValue = modelState.model.predict(tf.tensor2d()).arraySync()[0][0];
  
    //   setModelState({
    //       ...modelState,
    //       predictedValue: predictedValue,
    //   });
    // }
    // for(let i=0; i<=2; i++){
    // console.log(this.loadModeltf.predict([1]));
    // }
    // alert(tf.tensor2d([[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]]));

    // console.log(modelState.predictedValue);

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
                onClick={() => this.handleClickClose()}
              >
                Submit
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
                <img src={sprite}/>
                <p>7UP/Sprite</p>
              </button>
              <button className="item-choice"
                value="Coca Cola/Pepsi"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={cocacola}/>
                <p>Coca Cola<br/>/Pepsi</p>
              </button>
            </div>
            <div className="row-choice">
              <button className="item-choice"
                value="Fanta"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={fanta}/>
                <p>Fanta</p>
              </button>
              <button className="item-choice"
                value="Other"
                onClick={(e) => {this.handleClickChoice(e)}}>
                <img src={other}/>
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
