import React from "react";

// NavBar Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Counter{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
        <span className="m-2">TotalCount</span>
        <span className="badge badge-pill badge-primary">
          {props.totalValue}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
