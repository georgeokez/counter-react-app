import React, { Component } from "react";

// NavBar Component
class NavBar extends Component {
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
            {this.props.totalValue}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
