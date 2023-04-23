import React from "react";
import { PortfolioGrid } from "@components/index";
import { portfolioData } from "banners-data";
// import { useRouter } from "next/router";

export const PortfolioContainer = () => {
  // const { locale } = useRouter();
  return (
    <section className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          My recent work
        </h1>
        <h2 className="subtitle is-size-5-desktop">
          Here a few past design projects I've worked on
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
