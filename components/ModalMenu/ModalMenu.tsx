import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

interface Props {
  setShowMenu: (showMenu: boolean) => void;
}

export const ModalMenu = ({ setShowMenu }: Props) => {
  const { locale, locales, defaultLocale, route } = useRouter();

  const localeOptions = [
    [
      locale === "es-PE" && es.acerca,
      locale === "en-US" && en.aboutMe,
      locale === "fr-CA" && fr.sur,
    ],
    [
      locale === "es-PE" && es.portfolioMenu,
      locale === "en-US" && en.portfolioMenu,
      locale === "fr-CA" && fr.portfolioMenu,
    ],
    [
      locale === "es-PE" && es.contactMenu,
      locale === "en-US" && en.contactMenu,
      locale === "fr-CA" && fr.contactMenu,
    ],
    [
      locale === "es-PE" && es.languajeMenu,
      locale === "en-US" && en.languageMenu,
      locale === "fr-CA" && fr.languajeMenu,
    ],
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
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-24  py-24 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <ul className="navbar-responsive space-y-4">
                  {localeOptions.map((loc) => (
                    <li className="navbar-responsive-item">
                      <Link href={"#about"}>
                        <a
                          className="navbar-item text-4xl hover:underline list-disc"
                          onClick={() => {
                            setShowMenu(false);
                          }}
                        >
                          {loc}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {languagesOptions.map((lang) => (
                    <li>
                      <Link href={"/"} locale={lang.loc}>
                        <a
                          className="dropdown-item text-3xl"
                          onClick={() => {
                            setShowMenu(false);
                          }}
                        >
                          {lang.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
