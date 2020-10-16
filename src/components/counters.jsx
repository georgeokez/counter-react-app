import React from "react";
import Counter from "./counter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Counters = (props) => {
  return (
    <div className="container">
      <button
        style={{ marginLeft: 32 }}
        className="btn btn-info btn-md mt-4 mb-1"
        onClick={props.onReset}
      >
        <FontAwesomeIcon icon={faSync} /> Refresh
      </button>

      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
