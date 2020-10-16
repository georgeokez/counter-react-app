import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 Span-label badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    let count = props.counter.value;
    return count === 0 ? "Zero" : count;
  };

  return (
    <div className="m-1 p-1 row">
      <div className="col-1">
        <span
          className={getBadgeClasses()}
          style={{ fontSize: 24, marginLeft: 2 }}
        >
          {formatCount()}
        </span>
      </div>

      {/* Increment button */}
      <div className="col-md-4" style={{ paddingLeft: 4 }}>
        <button
          //onClick={this.doHandleIncrement} old way of passing arguments
          onClick={() => props.onIncrement(props.counter)}
          className="btn btn-primary btn-md m-2"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        {/* Decrement button */}
        <button
          onClick={() => props.onDecrement(props.counter)}
          className="btn btn-secondary btn-md"
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>

        {/* Delete button */}
        <button
          className="btn btn-danger btn-md m-2"
          onClick={() => props.onDelete(props.counter.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
