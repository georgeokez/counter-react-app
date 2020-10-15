import React, { Component } from "react";
import Counter from "./counter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

class Counters extends Component {
  render() {
    return (
      <div className="container">
        <button
          style={{ marginLeft: 32 }}
          className="btn btn-info btn-md mt-4 mb-1"
          onClick={this.props.onReset}
        >
          <FontAwesomeIcon icon={faSync} /> Refresh
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
