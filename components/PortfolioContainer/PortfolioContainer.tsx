import React from "react";
import { PortfolioGrid } from "@components/index";
import { portfolioData } from "banners-data";
import { useRouter } from "next/router";
import { en } from "i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const PortfolioContainer = () => {
  const { locale } = useRouter();
  return (
    <section
      className="section projects is-medium is-white has-text-centered"
      id="portfolio"
    >
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          {[
            locale === "es-PE" && es.recentProjectsTitle,
            locale === "en-US" && en.recentWorkTitle,
            locale === "fr-CA" && fr.recentProjectsTitle,
          ]}
        </h1>
        <h2 className="subtitle is-size-5-desktop">
          {[
            locale === "es-PE" && es.recentProjectscta,
            locale === "en-US" && en.recentWorkSubtitle,
            locale === "fr-CA" && fr.recentProjectscta,
          ]}
        </h2>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            {portfolioData.map((item, index) => (
              <PortfolioGrid
                title={item.title}
                image={item.image}
                link={item.productionLink}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
