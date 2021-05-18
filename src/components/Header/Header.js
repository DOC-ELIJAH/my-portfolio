import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="main-nav">
        <div>
          <h3 className="gradient-text">hope</h3>
        </div>
        <nav>
          <ul className="main-nav-items">
            <li className="main-nav-item">About</li>
            <li className="main-nav-item">Contact</li>
            <li className="main-nav-item">Projects</li>
            <li className="main-nav-item">Resume</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
