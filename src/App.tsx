import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // tuple
    let Tuple: [string, number, string] = ["React", 1, "using TypeScript"];
    // enum
    enum Codes {
      first = 1,
      second = 2
    }
    // any
    let FirstName: any = "React";
    // void
    const warning = (): void => {
      console.log("warning");
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {Tuple[0]} is of {typeof Tuple[0]} type ! <br />
          </p>
          <p>
            The value {Codes.first} is of {typeof Codes.first} type ! <br />
          </p>
          <p>
            <button onClick={warning}>Warning</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
