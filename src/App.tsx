import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./component/Message";

const initState = {
  name: "React using Typescript",
  message: "Hello from React"
};

type State = Readonly<typeof initState>;

class App extends Component<any, State> {
  readonly state: State = initState;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
