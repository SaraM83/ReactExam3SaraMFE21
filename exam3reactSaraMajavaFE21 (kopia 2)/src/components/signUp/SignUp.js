import React from "react";
import { useState, useEffect, useSyncExternalStore } from "react";
import Modal from "../modal/Modal";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      show: false
    }
  }
  render() {
    const userObject = {
      userEmail: "",
      userPassword: "",
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let parsedData = localStorage.getItem("userKey") ?
        (JSON.parse(localStorage.getItem("userKey"))) : [];
      for (const item of e.target.children) {
        if (item !== e.target.lastChild) {
          item.value = "";
        }
      }
      for (const item of parsedData) {
        if (item.userEmail === userObject.userEmail) {
          this.setState({show: this.state.show = true});
          return;
        }
      }

      this.props.addUser(userObject);
    };

    const btnText = "OK!";
    const modalText = "Email is already being used, choose another one";

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter email adress"
            onChange={(e) => (userObject.userEmail = e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => (userObject.userPassword = e.target.value)}
          />
          <br></br>
          <input type="submit" value="Sign Up" />
          {this.state.show === true && (
            <div>
              {
                <Modal
                  onClose={() => this.setState({show: this.state.show = false}) }
                  btnText={btnText}
                  modalText={modalText}
                />
              }
            </div>
          )}
        </form>
      </>
    );
  }
}
