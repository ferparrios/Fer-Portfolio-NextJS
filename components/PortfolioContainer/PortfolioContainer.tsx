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
    // <div className="portfolio-home-container">
    //   <h1 className="blog-home-title">
    //     {[
    //       locale === "en-US" && en.projectsTitle,
    //       locale === "es-PE" && es.projectsTitle,
    //       locale === "fr-CA" && fr.projectsTitle,
    //     ]}
    //   </h1>
    //   <div className="blog-home-cards-container">
    //     {portfolioData.map((i, index) => (
    //       <HomeCard
    //         title={i.title}
    //         backgroundImage={i.backgroundImage}
    //         referenceLink={i.referenceLink}
    //         referenceImage={i.referenceImage}
    //         link={i.link}
    //         key={index}
    //       />
    //     ))}
    //   </div>
    // </div>
    <section className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My recent work</h1>
        <h2 className="subtitle is-size-5-desktop">
          Here a few past design projects I've worked on
        </h2>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure className="image is-3by2">
                <img src="images/mobile-projects/m-project1.png" className="project-thumb" alt="" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">
                  High-end, custom residential renovaters serving Fraser Valley homeowners.
                  </h1>
                  <a href="#" className="button is-primary is-outlined isrounded">
                    <span>Visit website or repo</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
