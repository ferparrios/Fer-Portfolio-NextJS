import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { es } from "i18n/es";
import { en } from "i18n/en";
import { fr } from "i18n/fr";

export const FooterContainer = () => {
  const { locale } = useRouter();
  const socialMediaValues = [
    {
      title: "instagram",
      icon: "akar-icons:instagram-fill",
      link: "https://www.instagram.com/ferparrios/",
    },
    {
      title: "linkedin",
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/ferparrios/",
    },
    {
      title: "X",
      icon: "ri:twitter-x-line",
      link: "https://twitter.com/ferparrios",
    },
    {
      title: "github",
      icon: "akar-icons:github-fill",
      link: "https://github.com/ferparrios",
    },
  ];

  return (
    <section className="w-full bg-black md:rounded-tl-full md:rounded-tr-full rounded-tr-3xl rounded-tl-3xl mt-10">
      <div className="md:flex items-center justify-center">
        <div className="p-6">
          <h2 className="text-white text-center text-xl md:text-2xl font-semibold pb-6">
            {[
              locale === "es-PE" && es.footerTitle,
              locale === "en-US" && en.footerTitle,
              locale === "fr-CA" && fr.footerTitle,
            ]}
          </h2>
          <p className="text-white text-center md:px-10 md:text-xl">
            {[
              locale === "es-PE" && es.footerSubtitle,
              locale === "en-US" && en.footerSubtitle,
              locale === "fr-CA" && fr.footerSubtitle,
            ]}
          </p>
        </div>
        <div className="grid grid-cols-2 px-12 md:pt-12">
          {socialMediaValues.map((social) => (
            <Link
              href={social.link}
              key={social.title}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon={social.icon}
                width={80}
                className="mx-auto p-2 m-2 hover:scale-150 cursor-pointer transition duration-500 ease-in-out"
                color="white"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center p-6">
        <Link
          href="#"
          as={"/"}
          className="text-white pb-2 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer "
        >
          &copy; Fernando Paredes Rios - 2024
        </Link>
      </div>
    </section>
  );
};
