import React from "react";
import { NavLink } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavLink to='/login'><button>Add Movie</button> </NavLink>
      </>
    );
  }
}
