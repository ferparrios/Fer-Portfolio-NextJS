import React from "react";
import "animate.css";

export const Skills = () => {
  return (
    <section className="section skills">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
                <figure className="image is-96x96 skill-image">
                  <img src="images/frontend.png" alt="" />
                </figure>
                <p>Frontend Developer</p>
              </div>

              <div className="column">
                <p>
                  <span className="skill-title">Languages:</span> HTML, CSS,
                  Javascript, Typescript
                </p>
                <p>
                  <span className="skill-title">Frameworks and Libraries:</span>{" "}
                  Bootstrap, Bulma, Sass, Tailwind. React, Angular
                </p>
                <p>
                  <span className="skill-title">Dev Tools:</span> Git, Github,
                  VsCode, Terminal, Gitlab
                </p>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
                <figure className="image is-96x96 skill-image">
                  <img src="images/mobile.png" alt="" />
                </figure>
                <p>Mobile Developer</p>
              </div>

              <div className="column">
                <p>
                  <span className="skill-title">Languages:</span> Javascript,
                  Typescript, Dart, Kotlin
                </p>
                <p>
                  <span className="skill-title">Frameworks and Libraries:</span>{" "}
                  React Native, Flutter
                </p>
                <p>
                  <span className="skill-title">Dev Tools:</span> Git, Github,
                  VsCode, Terminal, Android Studio, Xcode{" "}
                </p>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
                <figure className="image is-96x96 skill-image">
                  <img src="images/backend.png" alt="" />
                </figure>
                <p>Backend Developer</p>
              </div>

              <div className="column">
                <p><span className="skill-title">Languages:</span> Javascript, Python, Go</p>
                <p><span className="skill-title">Frameworks and Libraries:</span> NodeJs, Django, MySql, MongoDB</p>
                <p>
                <span className="skill-title">Dev Tools:</span> Git, Github, VsCode, Terminal,
                  Postman, Mongo Compass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
