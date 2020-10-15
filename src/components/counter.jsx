import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // eslint-disable-next-line no-unused-vars
  faTrash,
  faTrashAlt,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  /* 
  *** State has been lifted to parent component
  ** State if removed and handled by the parent component (Counter Component)
  state = {
    value: this.props.counter.value,
    tag: []
  };
  */

  /*
  * The constructor
   constructor() {
     super();
     this.handleIncrement = this.handleIncrement.bind(this);
   }
  */

  /*
  *Increment method would be handled by Top level component
  handleIncrement = currentCount => {
    console.log(currentCount);
    this.setState({ value: this.state.value + 1 });
  };
  */

  /*
  *Decrement method would be handled by Top level component
  handleDecrement = currentCount => {
    console.log(currentCount);
    if (this.state.value !== 0) this.setState({ value: this.state.value - 1 });
  };
  */

  /*
  * Helper Method
  doHandleIncrement = () => {
    this.handleIncrement({ id: this.state.value + 1 });
  };
  */

  render() {
    return (
      <div className="m-1 p-1 row">
        <div className="col-1">
          <span
            className={this.getBadgeClasses()}
            style={{ fontSize: 24, marginLeft: 2 }}
          >
            {this.formatCount()}
          </span>
        </div>

        {/* Increment button */}
        <div className="col-md-4" style={{ paddingLeft: 4 }}>
          <button
            //onClick={this.doHandleIncrement} old way of passing arguments
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-md m-2"
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>

          {/* Decrement button */}
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-md"
          >
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>

          {/* Delete button */}
          <button
            className="btn btn-danger btn-md m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>

        {/* {this.renderTag()} */}
      </div>
    );
  }

  renderTag() {
    if (this.state.tag.length >= 1) {
      return (
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    } else {
      return <p>No Tags to display</p>;
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 Span-label badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
