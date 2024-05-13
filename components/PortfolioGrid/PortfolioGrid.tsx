import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";

export interface PortfolioGridProps {
  image: string;
  title: string;
  description?: string | any;
  link?: string;
  tecs: string[];
  androidLink?: string;
  iosLink?: string;
}

export const PortfolioGrid = ({
  image,
  title,
  description,
  link,
  tecs,
  androidLink,
  iosLink,
}: PortfolioGridProps) => {
  const { locale } = useRouter();
  const getLinkIcon = () => {
    if (androidLink || iosLink) {
      return (
        <div className="flex space-x-2">
          {androidLink !== "" && (
            <a href={androidLink} target="_blank" rel="noreferrer">
              <Icon
                icon="bi:android2"
                color="black"
                width="40"
                className="hover:animate-bounce"
              />
            </a>
          )}
          {iosLink !== "" && (
            <a href={iosLink} target="_blank" rel="noreferrer">
              <Icon
                icon="uil:apple"
                color="black"
                width="40"
                className="hover:animate-bounce"
              />
            </a>
          )}
        </div>
      );
    } else if (link) {
      return (
        <>
          {link !== "" && (
            <a href={link} target="_blank" rel="noreferrer">
              <Icon
                icon="mdi:web"
                color="black"
                width="40"
                className="hover:animate-bounce"
              />
            </a>
          )}
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="px-10 w-10/12 my-4 mx-auto border-2 rounded-3xl shadow max-w-3xl py-8 hover:bg-gray-200">
      <div className="flex space-x-4 items-center md:justify-center md:px-2">
        <img src={image} className="w-1/3 md:w-1/4 rounded-lg" alt={title} />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p className="py-4 md:px-2 md:h-auto">{description}</p>
      <div className="md:h-32">
        {tecs.map((tec, index) => (
          <div className="inline-flex items-center rounded-md bg-black px-2 py-0.5 font-medium text-white mr-1 my-1 hover:scale-150 cursor-pointer transition duration-500 ease-in-out" key={index}>
            <p>{tec}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between cursor-pointer py-4 md:py-0 md:px-8">
        {androidLink || link || iosLink ? (
          <h3 className="text-sm md:text-base">
            {[
              locale === "es-PE" && es.checkProject,
              locale === "en-US" && en.checkProject,
              locale === "fr-CA" && fr.checkProject,
            ]}
          </h3>
        ) : null}
        {getLinkIcon()}
      </div>
    </div>
  );
};
