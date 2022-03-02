import React from "react";
import { HomeCard } from "@components/index";
import { portfolioData } from "banners-data";

export const PortfolioContainer = () => {
  return (
    <div className="portfolio-home-container" id="portfolio-home">
      <h1 className="blog-home-title">Projects</h1>
      <div className="blog-home-cards-container">
      {portfolioData.map((i) => (
          <HomeCard 
            title={i.title}
            backgroundImage={i.backgroundImage}
            referenceLink={i.referenceLink}
            referenceImage={i.referenceImage}
            link={i.link}
          />
        ))}
      </div>
    </div>
  );
};
