import React from "react";
import { BlogCard } from "@components/index";

export const BlogHome = () => {
  return (
    <div className="blog-home-container" id="blog-home">
      <h1 className="blog-home-title">Check my Posts</h1>
      <div className="blog-home-cards-container">
      <BlogCard />
      <BlogCard />
      </div>
    </div>
  );
};
