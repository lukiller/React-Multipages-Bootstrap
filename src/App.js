import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MenuNavBar from "./Components/MenuNavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MenuNavBar />
        <main role="main" className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/page1" component={Page1}></Route>
          <Route exact path="/page2" component={Page2}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
