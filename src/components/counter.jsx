import React, { Component } from "react";

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
      <div className="m-1 p-1">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* Increment button */}
        <button
          //onClick={this.doHandleIncrement} old way of passing arguments
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>

        {/* Decrement button */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm"
        >
          -
        </button>

        {/* Delete button */}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

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
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
