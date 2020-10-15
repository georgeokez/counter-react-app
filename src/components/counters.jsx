import React, { Component } from "react";
import Counter from "./counter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

class Counters extends Component {
  /*
  ** State has been lifted to parent component (App Component)
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 7 },
      { id: 3, value: 8 },
      { id: 4, value: 3 }
    ]
  };
  */

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
