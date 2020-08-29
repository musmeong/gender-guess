import React from 'react';

import ColorFormDetails from './components/ColorFormDetails';
import MusicFormDetails from './components/MusicFormDetails';
import BeverageFormDetails from './components/BeverageFormDetails';
import SoftdrinkFormDetails from './components/SoftdrinkFormDetails';
import ResultScreen from './components/ResultScreen';

import './App.css';
import * as tf from '@tensorflow/tfjs';
import IntroScreen from './components/IntroScreen';

export class App extends React.Component {
  state = {
    step: 1,
    predValue: 0
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    // If on final page, click the button will Go Back to Main Menu
    if (step !== 6) {
      this.setState({
        step: step + 1
      });
    } else {
      this.setState({
        step: 1
      })
    }
  }

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle input value for every step
  handleChange = (input, e) => {
    this.setState({[input]: e.target.value});
  }

  // This will change choice into data array (one-hot encoding)
  text_to_arr = (color, music, beverage, softdrink) => {
    let array_color;
    let array_music;
    let array_beverage;
    let array_softdrink;

    if (color === "Cool") {
      array_color = [1, 0, 0];
    } else if (color === "Neutral") {
      array_color = [0, 1, 0];
    } else {
      array_color = [0, 0, 1];
    };

    if (music === "Electronic") {
      array_music = [1, 0, 0, 0, 0, 0, 0];
    } else if (music === "Folk/Traditional") {
      array_music = [0, 1, 0, 0, 0, 0, 0];
    } else if (music === "Hip Hop") {
      array_music = [0, 0, 1, 0, 0, 0, 0];
    } else if (music === "Jazz/Blues") {
      array_music = [0, 0, 0, 1, 0, 0, 0];
    } else if (music === "Pop") {
      array_music = [0, 0, 0, 0, 1, 0, 0];
    } else if (music === "R&B and Soul") {
      array_music = [0, 0, 0, 0, 0, 1, 0];
    } else {
      array_music = [0, 0, 0, 0, 0, 0, 1];
    }

    if (beverage === "Beer") {
      array_beverage = [1, 0, 0, 0, 0, 0];
    } else if (beverage === "Nothing") {
      array_beverage = [0, 1, 0, 0, 0, 0];
    } else if (beverage === "Other") {
      array_beverage = [0, 0, 1, 0, 0, 0];
    } else if (beverage === "Vodka") {
      array_beverage = [0, 0, 0, 1, 0, 0];
    } else if (beverage === "Whiskey") {
      array_beverage = [0, 0, 0, 0, 1, 0];
    } else {
      array_beverage = [0, 0, 0, 0, 0, 1];
    }

    if (softdrink === "7UP/Sprite") {
      array_softdrink = [1, 0, 0, 0];
    } else if (softdrink === "Coca Cola/Pepsi") {
      array_softdrink = [0, 1, 0, 0];
    } else if (softdrink === "Fanta") {
      array_softdrink = [0, 0, 1, 0];
    } else {
      array_softdrink = [0, 0, 0, 1];
    }

    let data_predict = [].concat(array_color, array_music, array_beverage, array_softdrink);
    data_predict = tf.tensor([data_predict])
    return data_predict;
  }

  // Load TFJS Model from URL
  loadModeltf = async () => {
    const modeltf = await tf.loadLayersModel('https://raw.githubusercontent.com/musmeong/gender-guess/master/src/models/model.json');
    return modeltf;
  }

  // Give prediction prob based on input data (from state)
  givePred = () => {
    const { step, color, music, beverage, softdrink } = this.state;
    const data = this.text_to_arr(color, music, beverage, softdrink);
    var that = this;

    this.loadModeltf().then(function (res) {
      const prediction = res.predict(data);
      that.setState(
        {
          predValue: prediction.dataSync(),
          step: step + 1
        },
      );
    }, function (err) {
      console.log(err);
    })
  }

  render() {
    const { step } = this.state;
    const { color, music, beverage, softdrink } = this.state;
    const values = { color, music, beverage, softdrink };
    const { predValue } = this.state;

    switch (step) {
      case 1:
        return (
          <IntroScreen
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <ColorFormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <MusicFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return (
          <BeverageFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 5:
        return (
          <SoftdrinkFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            givePred={this.givePred}
            values={values}
          />
        );
      case 6:
        return (
          <ResultScreen
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            predValue={predValue}
          />
        );
      default:
        console.log('nothing');
    }
  }
}

export default App;
