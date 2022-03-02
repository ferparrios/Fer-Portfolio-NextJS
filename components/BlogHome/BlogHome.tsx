import React from "react";
import { HomeCard } from "@components/index";
import { blogsData } from "banners-data";

export const BlogHome = () => {
  return (
    <div className="blog-home-container" id="blog-home">
      <h1 className="blog-home-title">Check my Posts</h1>
      <div className="blog-home-cards-container">
        {blogsData.map((i) => (
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
