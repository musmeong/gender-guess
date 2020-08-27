import React from 'react';
import logo from './genie.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="intro-logo">
          <div class="cloud-box-title sb1">
            Welcome to <br/><span><b>Gender Guess</b></span>.
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div class="cloud-box-subtitle sb2">
            I will guess your gender by asking <span>some of your interests</span>.
          </div>
        </div>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Game
        </a>
      </header>
    </div>
  );
}

export default App;
