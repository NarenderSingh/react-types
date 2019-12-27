## HOC or Higher Order Components

A higher-order component is an advanced technique in React for reusing component logic.
HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.

Concretely, a higher-order component is a function that takes a compoent and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
