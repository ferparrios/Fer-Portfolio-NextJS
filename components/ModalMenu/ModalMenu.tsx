import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

interface Props {
  setShowMenu: (showMenu: boolean) => void;
}

export const ModalMenu = ({ setShowMenu }: Props) => {
  const { locale } = useRouter();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const localeOptions = [
    {
      link: "#blog",
      title:
        (locale === "es-PE" && es.blog) ||
        (locale === "en-US" && en.blogMenu) ||
        (locale === "fr-CA" && fr.blogMenu),
    },
    {
      link: "#portfolio",
      title:
        (locale === "es-PE" && es.portfolioMenu) ||
        (locale === "en-US" && en.portfolioMenu) ||
        (locale === "fr-CA" && fr.portfolioMenu),
    },
    {
      link: "#contact",
      title:
        (locale === "es-PE" && es.contactMenu) ||
        (locale === "en-US" && en.contactMenu) ||
        (locale === "fr-CA" && fr.contactMenu),
    },
    {
      link: "",
      title:
        (locale === "es-PE" && es.languajeMenu) ||
        (locale === "en-US" && en.languageMenu) ||
        (locale === "fr-CA" && fr.languajeMenu),
    },
  ];

  const languagesOptions = [
    {
      loc: "es-PE",
      title: "ES",
    },
    {
      loc: "en-US",
      title: "EN",
    },
    {
      loc: "fr-CA",
      title: "FR",
    },
  ];

  return (
    <div className="relative z-10 p-8">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start p-10">
            <ul className="space-y-2">
              {localeOptions.map((loc, index) => (
                <li className="list-disc" key={index}>
                  <Link href={loc.link}>
                    <p
                      className="text-xl font-semibold"
                      onClick={() => {
                        if (
                          loc.title === en.languageMenu ||
                          loc.title === es.languajeMenu ||
                          loc.title === fr.languajeMenu
                        ) {
                          setShowLanguageMenu(true);
                        } else {
                          setShowLanguageMenu(false);
                          setShowMenu(false);
                        }
                      }}
                    >
                      {loc.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {showLanguageMenu && (
              <ul>
                {languagesOptions.map((lang, index) => (
                  <li key={index}>
                    <Link href={"/"} locale={lang.loc}>
                      <p
                        className="dropdown-item text-xl"
                        onClick={() => {
                          setShowLanguageMenu(!showLanguageMenu);
                        }}
                      >
                        {lang.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
