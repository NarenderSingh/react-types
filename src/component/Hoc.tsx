import React, { Component } from "react";

const initState = {
  name: "React using Typescript",
  message: "Hello from React"
};

type State = Readonly<typeof initState>;

const MessageHOC = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    readonly state: State = initState;

    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    }
  }

  return HOC;
};

export default MessageHOC;
