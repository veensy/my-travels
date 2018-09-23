import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
          <Travel
            destination ="NEW-YORK"
            photo = "http://image.noelshack.com/fichiers/2018/38/7/1537721347-new-york.jpg"
            distance = "5 834 km"
            country = "Etats-Unis"
          />
            <Travel
            destination ="GUADELOUPE / DESHAIES"
            photo = "http://image.noelshack.com/fichiers/2018/38/7/1537722141-grande-anse.jpg"
            distance = "6 750 km"
            country = "France"
          />
      </div>
    );
  }
}

export default App;
