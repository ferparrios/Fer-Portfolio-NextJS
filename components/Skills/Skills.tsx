import React from "react";

export const Skills = () => {
  return (
    <section className="section skills">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
                <figure className="image is-96x96">
                  <img src="images/frontend.png" alt="" />
                </figure>
                <p>Frontend Developer</p>
              </div>

              <div className="column">
                <p>Languages: HTML, CSS, Javascript, Typescript</p>
                <p>
                  Frameworks and Libraries: Bootstrap, Bulma, Sass, Tailwind.
                  React, Vue
                </p>
                <p>Dev Tools: Git, Github, VsCode, Terminal, Gitlab</p>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
                <figure className="image is-96x96">
                  <img src="images/mobile.png" alt="" />
                </figure>
                <p>Mobile Developer</p>
              </div>

              <div className="column">
                <p>Languages: Javascript, Typescript, Dart, Kotlin</p>
                <p>Frameworks and Libraries: React Native, Flutter</p>
                <p>
                  Dev Tools and Frameworks: Git, Github, VsCode, Terminal,
                  Android Studio, Xcode{" "}
                </p>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-one-quarter skill-data">
              <figure className="image is-96x96">
                  <img src="images/backend.png" alt="" />
                </figure>
                <p>Backend Developer</p>
              </div>

              <div className="column">
                <p>Languages: Javascript, Python, Go</p>
                <p>Frameworks and Libraries: NodeJs, Django, MySql, MongoDB</p>
                <p>
                  Dev Tools and Frameworks: Git, Github, VsCode, Terminal,
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
