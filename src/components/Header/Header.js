import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
// import { VscMenu } from "react-icons/vsc ";

const Header = () => {
  return (
    <>
      <header className="main-nav">
        <div>
          <h3 className="gradient-text">hope</h3>
        </div>
        {/* <nav>
          <ul className="main-nav-items">
            <li className="main-nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="main-nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="main-nav-item">
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav> */}
      </header>
    </>
  );
};

export default Header;
