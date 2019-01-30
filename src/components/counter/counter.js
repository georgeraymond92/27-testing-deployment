import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <div className="deck">
        <div className="leftBtn">
          <a
            href="#"
            className="btn btn-red down clicker"
            onClick={this.handleDown}
          >
            Decrement
          </a>
        </div>

        <div className="count">
          <span className={classes}>
            <h1>{this.state.count}</h1>
          </span>
        </div>

        <div className="btnRight">
          <a
            href="#"
            className="btn btn-green up clicker"
            onClick={this.handleUp}
          >
            Increment
          </a>
        </div>
      </div>
    );
  }
}

export default Counter;
