import Link from "next/link";
import React from "react";


interface HomeCardProps {
  backgroundImage: string
  title: string
  referenceLink: string
  referenceImage: string
  link: string
}

export const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="blog-card-container">
      <div className="card bg-ligh text-black blog-card-container-inside">
        <img
          src={props.backgroundImage}
          className="card-img blog-card-background-image"
          alt={props.referenceLink}
        />
        <div className="card-img-overlay blog-card-content-container">
          <div className="blog-card-inside-content">
            <div className="blog-card-inside-content-text-container">
              <p className="blog-card-inside-text">{props.title}</p>
              <p className="blog-card-inside-text-link">
                <Link href={props.link}>
                <a >{props.referenceLink}</a>
                </Link>
              </p>
            </div>
            <div className="blog-card-inside-image-container">
              <img
                src={props.referenceImage}
                className="blog-card-inside-image"
                alt={props.referenceLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
