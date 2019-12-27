import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let firstValue: string = "Many";
    let values: number[] = [1, 2, 3];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstValue} is of {typeof firstValue} type ! <br />
            The value {values} is of {typeof values} type !
          </p>
        </header>
      </div>
    );
  }
}

export default App;
