import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>The Count Is: {this.state.count}</h1>
        <button onClick={this.addCount}>Add 1</button>
      </div>
    );
  }
}

export default CounterClass;
