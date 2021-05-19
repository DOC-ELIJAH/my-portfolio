import React from "react";
import { useState, useEffect } from "react";
import "./components/Header/Header.css";
import "./index.css";
import Header from "./components/Header/Header";
import IntroBody from "./components/IntroBody/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Fade from "react-reveal/Fade";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return (
      <div className="preloader">
        <p>hope</p>
      </div>
    );
  }
  return (
    <Fade top>
      <Header />
      <IntroBody />
      <Projects />
      <Contact />
    </Fade>
  );
};

export default App;
