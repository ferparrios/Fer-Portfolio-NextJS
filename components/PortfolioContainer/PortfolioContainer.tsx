import React from "react";
import { HomeCard } from "@components/index";
import { portfolioData } from "banners-data";
import { useRouter } from "next/router";
import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";

export const PortfolioContainer = () => {
  const { locale } = useRouter();
  return (
    <div className="portfolio-home-container" /*id="portfolio-home"*/>
      <h1 className="blog-home-title">
        {[
          locale === "en-US" && en.projectsTitle,
          locale === "es-PE" && es.projectsTitle,
          locale === "fr-CA" && fr.projectsTitle,
        ]}
      </h1>
      <div className="blog-home-cards-container">
        {portfolioData.map((i, index) => (
          <HomeCard
            title={i.title}
            backgroundImage={i.backgroundImage}
            referenceLink={i.referenceLink}
            referenceImage={i.referenceImage}
            link={i.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
