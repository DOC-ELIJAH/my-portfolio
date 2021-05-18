import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section>
        <div className="projects-wrapper">
          <h2 className="project-desc">projects </h2>
          <h2 className="projects">Stuffs I've worked on</h2>
        </div>
        <div className="project-card-container">
          <div className="project-card">
            <h2>Countdown Timer</h2>
            <div className="cta-container">
              <button className="card-cta">GitHub Repo</button>
              <button className="card-cta">view deployed app</button>
            </div>
            <p> Html CSS & js</p>
          </div>
          <div className="project-card">
            <h2>Booklist App</h2>
            <div className="cta-container">
              <button className="card-cta">GitHub Repo</button>
              <button className="card-cta">view deployed app</button>
            </div>
            <p> react CSS</p>
          </div>
          <div className="project-card">
            <h2>Github users</h2>
            <div className="cta-container">
              <button className="card-cta">GitHub Repo</button>
              <button className="card-cta">view deployed app</button>
            </div>
            <p> react CSS</p>
          </div>
          <div className="project-card">
            <h2>Image search</h2>
            <div className="cta-container">
              <button className="card-cta">GitHub Repo</button>
              <button className="card-cta">view deployed app</button>
            </div>
            <p> react|CSS</p>
          </div>
        </div>
      </section>
      <div>
        <p className="intro-web-works">
          {" "}
          you can see more of my awesomeness on{" "}
        </p>
        <div className="web-works-container">
          <div className="web-works">CodePen</div>
          <div className="web-works">GitHub</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
