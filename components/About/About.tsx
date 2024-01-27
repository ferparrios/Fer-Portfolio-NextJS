import React from "react";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const About = () => {
  const { locale } = useRouter();
  return (
    <section
      className="is-primary is-medium has-text-centered is-long"
      id="about"
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="subtitle is-size-5-desktop has-text-weight-bold">
              {[
                locale === "es-PE" && es.profileDescription,
                locale === "en-US" && en.about,
                locale === "fr-CA" && fr.profileDescription,
              ]}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
