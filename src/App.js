import React from "react";
import Nav from "./components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./App.css";
import "aos/dist/aos.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";
import About from "./components/About";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/intro" component={Intro} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      <ScrollToTop />
    </>

  );
};

export default App;
