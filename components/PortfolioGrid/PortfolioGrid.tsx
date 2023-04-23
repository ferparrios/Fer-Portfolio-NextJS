import React from "react";
import { en } from "i18n/en";

export interface PortfolioGridProps {
  image: string;
  title: string;
  description?: string;
  link: string;
}

export const PortfolioGrid = ({
  image,
  title,
  description,
  link,
}: PortfolioGridProps) => {
  return (
    
      
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <figure className="image is-3by2">
            <img src={image} className="project-thumb" alt={title} />
            <figcaption className="caption-box">
              <h1 className="title is-size-5 is-size-4-widescreen">{title}</h1>
              <a href={link} target="_blank" className="button is-primary is-outlined isrounded">
                <span>{[en.visitProjectButton]}</span>
              </a>
            </figcaption>
          </figure>
        </div>
      
    
  );
};
