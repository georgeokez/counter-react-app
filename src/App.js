import React, { Component } from "react";
import NavBar from "./components/navbar.jsx";
import "./App.css";
import Counters from "./components/counters.jsx";

class App extends Component {
  // Counter Component State and mutator methods
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    totalCount: 0,
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let totalCount =
      this.state.totalCount !== 0
        ? this.state.totalCount
        : this.getInitialTotalValue();
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    totalCount++;
    this.setState({ counters, totalCount });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let totalCount =
      this.state.totalCount !== 0
        ? this.state.totalCount
        : this.getInitialTotalValue();
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) {
      counters[index].value--;
      totalCount--;
    }
    this.setState({ counters, totalCount });
  };

  handleDelete = (counterId) => {
    console.log("Delete method called from child component id = " + counterId);
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    let counter = this.state.counters.filter((c) => c.id === counterId);
    let totalCount =
      this.state.totalCount !== 0
        ? this.state.totalCount
        : this.getInitialTotalValue();
    totalCount -= counter[0].value;
    this.setState({ counters, totalCount });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    let totalCount = this.state.totalCount;
    counters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    totalCount = 0;
    this.setState({ counters, totalCount });
  };

  getInitialTotalValue = () => {
    let counters = [...this.state.counters];
    let totalCount = this.state.totalCount;
    counters.map((counter) => {
      totalCount += counter.value;
      return counter;
    });
    return totalCount;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          totalValue={this.state.totalCount}
          initCountValue={this.getInitialTotalValue()}
        />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
