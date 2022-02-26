import React from "react";
import { BlogCard } from "@components/index";

export const BlogHome = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
      id="blog-home"
    >
      <BlogCard />
      <BlogCard />
    </div>
  );
};
