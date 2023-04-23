import React from "react";
import { en } from "../../i18n/en";

export const About = () => {
  return (
    <section className="section is-medium is-primary has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="subtitle is-size-5-desktop has-text-weight-normal">
              {[en.about]}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
