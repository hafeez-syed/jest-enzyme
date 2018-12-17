import React, { Component } from "react";
import axios from "axios";

import List from "./List";
import RegistrationForm from "./RegistrationForm";

export const doIncrement = prevState => ({
  counter: prevState.counter + 1
});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      asyncCounters: null
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(counter => this.setState({ asyncCounters: counter.data.total }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>My Counter</h1>
        <Counter counter={counter} />

        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>

        <button type="button" onClick={this.onDecrement}>
          Decrement
        </button>

        <List items={["Angular", "React"]} />
        <RegistrationForm />
      </div>
    );
  }
}

export const Counter = ({ counter }) => <p>{counter}</p>;

export default App;
