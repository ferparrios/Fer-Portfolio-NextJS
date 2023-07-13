import React from "react";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import "animate.css";

export const ProfileCard = () => {
  const { locale } = useRouter();
  return (
    <section className="section-primary hero is-white">
      <div className="hero-body column is-three-fifths is-offset-one-fifth">
        <div className="is-half is-offset-one-quarter">
          <img
            className="animate__animated animate__bounceInUp"
            src="images/fer-avatar-png.png"
            alt="img-avatar"
          />
        </div>
      </div>
      <div className="hero-foot column is-three-fifths is-offset-one-fifth ">
        <div className="box name-box">
          <p className="subtitle">
            {[
              locale === "es-PE" && es.profileTitle,
              locale === "en-US" && en.profileTitle,
              locale === "fr-CA" && fr.profileTitle,
            ]}
          </p>
          <h1 className="title">{[en.name]}</h1>
          <p>
            {[
              locale === "es-PE" && es.description,
              locale === "en-US" && en.description,
              locale === "fr-CA" && fr.description,
            ]}
          </p>
        </div>
      </div>
    </section>
  );
};
