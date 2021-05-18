import React from "react";
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Intro from "./components/IntroBody/Intro";
import Projects from "./components/Projects/Projects";
import "./components/Header/Header.css";
import Fade from "react-reveal/Fade";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return (
      <div className="preloader">
        <p>hope</p>
      </div>
    );
  }
  return (
    <>
      <Fade up>
        <Header />
        <Intro />
        <Projects />
        <Contact />
      </Fade>
    </>
  );
};

export default App;
