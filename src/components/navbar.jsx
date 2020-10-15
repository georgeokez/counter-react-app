import React, { Component } from "react";

// NavBar Component
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 1,
    };
  }

  getCountValue = () => {
    if (this.state.init === 1) {
      this.setState((state) => state.init++);
      return this.props.initCountValue;
    } else {
      return this.props.totalValue;
    }
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Counter{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
          <span className="m-2">TotalCount</span>
          <span className="badge badge-pill badge-primary">
            {this.getCountValue()}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
