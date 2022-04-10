import React from "react";
import { HomeCard } from "@components/index";
import { blogsData } from "banners-data";
import { useRouter } from 'next/router';
import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";

export const BlogHome = () => {

  const { locale } = useRouter()

  return (
    <div className="blog-home-container" /*id="blog-home"*/>
      <h1 className="blog-home-title">
        {[
          locale === "en-US" && en.blogHomeTitle,
          locale === "es-PE" && es.blogHomeTitle,
          locale === "fr-CA" && fr.blogHomeTitle
        ]}
      </h1>
      <div className="blog-home-cards-container">
        {blogsData.map((i, index) => (
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
