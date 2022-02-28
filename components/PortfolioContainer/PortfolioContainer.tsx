import React from "react";
import { BlogCard } from "@components/index";

export const PortfolioContainer = () => {
  return (
    <div className="portfolio-home-container" id="portfolio-home">
      <h1 className="blog-home-title">Projects</h1>
      <div className="blog-home-cards-container">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
