import "../App.css";

import React from "react";

import Carousal from "./Carousal";
import About from "./About";
import Contact from "./Contact";
import Goals from "./Goals";

function Home() {
  return (
    <>
      <Carousal />
      <About />
      <Goals />
      <Contact />
    </>
  );
}

export default Home;
