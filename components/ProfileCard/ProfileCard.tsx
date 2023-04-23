import React from "react";
import { en } from "i18n/en";

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
          <p className="subtitle">{[en.sayHi]}</p>
          <h1 className="title">{[en.name]}</h1>
          <p>{[en.description]}</p>
        </div>
      </div>
    </section>
  );
};
