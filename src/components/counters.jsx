import React, { Component } from "react";
import Counter from "./counter.jsx";

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


  My own method of implementing the Increment method
  handleIncrement = counter => {
    const index = this.state.counters.indexOf(counter);
    this.state.counters[index].value++;
    this.setState(this.state.counters);
  };


  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Delete method called from child component id = " + counterId);
    let counterArr = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counterArr });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  */

  render() {
    return (
      <div>
        <button className="btn btn-primary sm m-2" onClick={this.props.onReset}>
          Reset to Zero
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
