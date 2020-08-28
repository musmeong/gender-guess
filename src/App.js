import React from 'react';
import logo from './genie.png';
import ColorFormDetails from './components/ColorFormDetails'
import MusicFormDetails from './components/MusicFormDetails'
import BeverageFormDetails from './components/BeverageFormDetails'
import SoftdrinkFormDetails from './components/SoftdrinkFormDetails'
import './App.css';

export class App extends React.Component {
  state = {
    step: 5
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = (input, e) => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { color, music, beverage, softdrink } = this.state;
    const values = { color, music, beverage, softdrink };

    switch (step) {
      case 1:
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
                onClick={this.nextStep}
                value="Start Game" />
            </header>
          </div>
        );
      case 2:
        return (
          <ColorFormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <MusicFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <BeverageFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <SoftdrinkFormDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      default:
        console.log('nothing');
    }
  }
}

export default App;
