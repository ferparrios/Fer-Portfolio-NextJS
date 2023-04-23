import React from "react";

export const ProfileCard = () => {
  return (
    <section className="section-primary hero is-white">
      <div className="hero-body column is-three-fifths is-offset-one-fifth">
        <div className="is-half is-offset-one-quarter">
          <img src="images/fer-avatar-png.png" alt="" />
        </div>
      </div>
      <div className="hero-foot column is-three-fifths is-offset-one-fifth">
        <div className="box">
          <p className="subtitle">Hi, my name is</p>
          <h1 className="title">Fernando Paredes Rios.</h1>
          <p>
            I like to create amazing applications for the web and smartphones,
            check some of my work here.
          </p>
        </div>
      </div>
    </section>
  );
};
