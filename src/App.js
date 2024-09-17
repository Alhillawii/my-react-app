import React from "react";
import Nav from "./portffolio/nav";
import Start from "./portffolio/start";
import About from "./portffolio/about";
import Skill from "./portffolio/skill";
import Soft from "./portffolio/soft";
import Footer from "./portffolio/footer";
import Test from "./portffolio/Test";
// import get from "./portffolio/about";

import "./App.css";
// import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Nav />
    <Start />
    <About />
    <Skill />
    <Soft />
    <Footer />
    </div>

  );
};

export default App;
