import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <NavLink to="/movies">
            {<img src="./images/Grit-Academy-logo.png" alt="grit-logo"></img>}
          </NavLink>
          <NavLink to="/movies">Profile</NavLink>
        </div>
      </header>
    );
  }
}
