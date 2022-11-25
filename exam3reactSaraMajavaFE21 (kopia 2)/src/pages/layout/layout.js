import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}
