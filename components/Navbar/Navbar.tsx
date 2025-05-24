import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import { ModalMenu } from "@components/ModalMenu/ModalMenu";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const { locale } = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);

  const localeOptions = [
    {
      route: "#about",
      loc: [
        locale === "es-PE" && es.blog,
        locale === "en-US" && en.blogMenu,
        locale === "fr-CA" && fr.blogMenu,
      ],
    },
    {
      route: "#portfolio",
      loc: [
        locale === "es-PE" && es.portfolioMenu,
        locale === "en-US" && en.portfolioMenu,
        locale === "fr-CA" && fr.portfolioMenu,
      ],
    },
    {
      route: "#contact",
      loc: [
        locale === "es-PE" && es.contactMenu,
        locale === "en-US" && en.contactMenu,
        locale === "fr-CA" && fr.contactMenu,
      ],
    },
  ];
  return (
    <nav className="fixed top-0 w-full bg-white ">
      <div className="flex items-center justify-between px-2 py-2 max-w-screen-2xl">
        <div className="flex items-center space-x-4">
          <Link href="/" className="navbar-item">
            <img src="images/fer-avatar.jpg" width="70px" height="100%" />
          </Link>
          <Link
            href={"/"}
            className="text-black font-semibold  text-xl md:text-2xl pr-4 pb-2 relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            {/* {[en.name]} */}
            Fernando <br />
            Paredes Rios
          </Link>
          <div
            id="navbarBasicExample"
            className="hidden space-x-16 px-6 lg:block"
          >
            {localeOptions.map((loc, index) => (
              <Link
                href={loc.route}
                key={index}
                className="text-black font-normal text-xl pb-2 relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {loc.loc}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden relative lg:block">
          <button
            className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 ease-in-out"
            onClick={() => setLanguageMenu(!languageMenu)}
          >
            <a className="navbar-link">
              {[
                locale === "es-PE" && es.languajeMenu,
                locale === "en-US" && en.languageMenu,
                locale === "fr-CA" && fr.languajeMenu,
              ]}
            </a>
          </button>
          {languageMenu && (
            <div className="navbar-dropdown absolute top-10 right-2 bg-white shadow-md mt-2 w-24">
              <Link
                href={"/"}
                locale={"en-US"}
                className="block px-4 py-2 hover:bg-black hover:text-white transition duration-500 ease-in-out font-semibold"
                onClick={() => setLanguageMenu(!languageMenu)}
              >
                {[
                  locale === "es-PE" && es.englishMenu,
                  locale === "en-US" && en.englishMenu,
                  locale === "fr-CA" && fr.englishMenu,
                ]}
              </Link>
              <Link
                href={"/"}
                locale={"es-PE"}
                className="block px-4 py-2 hover:bg-black hover:text-white transition duration-500 ease-in-out font-semibold"
                onClick={() => setLanguageMenu(!languageMenu)}
              >
                {[
                  locale === "es-PE" && es.spanishMenu,
                  locale === "en-US" && en.spanishMenu,
                  locale === "fr-CA" && fr.spanishMenu,
                ]}
              </Link>
              <Link
                href={"/"}
                locale={"fr-CA"}
                className="block px-4 py-2 hover:bg-black hover:text-white transition duration-500 ease-in-out font-semibold"
                onClick={() => setLanguageMenu(!languageMenu)}
              >
                {[
                  locale === "es-PE" && es.frenchMenu,
                  locale === "en-US" && en.frenchMenu,
                  locale === "fr-CA" && fr.frenchMenu,
                ]}
              </Link>
            </div>
          )}
        </div>
        <button
          className="navbar-burger block lg:hidden"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Icon icon="material-symbols-light:menu" color="black" width="40" />
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
        </button>
      </div>
      {showMenu && <ModalMenu setShowMenu={setShowMenu} />}
    </nav>
  );
};
