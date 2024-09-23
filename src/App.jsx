import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
    </>
  );
}

export default App;
