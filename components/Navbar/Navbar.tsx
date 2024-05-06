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
        locale === "es-PE" && es.acerca,
        locale === "en-US" && en.aboutMe,
        locale === "fr-CA" && fr.sur,
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
    <nav className="fixed top-0 w-full bg-white">
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center">
          <Link href="/">
            <a className="navbar-item">
              <img src="images/fer-avatar.jpg" width="50px" height="100%" />
            </a>
          </Link>
          <Link href={"/"}>
            <a className="hover:underline text-black font-semibold">
              {/* {[en.name]} */}
              Fernando <br />
              Paredes Rios
            </a>
          </Link>
          <div
            id="navbarBasicExample"
            className="hidden space-x-4 px-4 lg:block"
          >
            {localeOptions.map((loc) => (
              <Link href={loc.route}>
                <a className="hover:underline text-black font-semibold">
                  {loc.loc}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden relative lg:block">
          <button
            className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
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
              <Link href={"/"} locale={"en-US"}>
                <a className="dropdown-item block px-4 py-2">EN</a>
              </Link>
              <Link href={"/"} locale={"es-PE"}>
                <a className="dropdown-item block px-4 py-2">ES</a>
              </Link>
              <Link href={"/"} locale={"fr-CA"}>
                <a className="dropdown-item block px-4 py-2">FR</a>
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
