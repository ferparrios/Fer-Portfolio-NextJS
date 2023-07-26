import React, { useState } from "react";
import Link from "next/link";
import {withRouter} from 'next/router'
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import { ModalMenu } from "@components/ModalMenu/ModalMenu";

export const Navbar = () => {
  const { locale } = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="images/fer-avatar.jpg" width="20px" height="100%" />
            </a>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {showMenu && <ModalMenu setShowMenu={setShowMenu} />}

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href={"/"}>
              <a className="navbar-item nav-item">{[en.name]}</a>
            </Link>

            <Link href={"#about"}>
              <a className="navbar-item">
                {[
                  locale === "es-PE" && es.acerca,
                  locale === "en-US" && en.aboutMe,
                  locale === "fr-CA" && fr.sur,
                ]}
              </a>
            </Link>

            <Link href={"#portfolio"}>
              <a className="navbar-item">
                {[
                  locale === "es-PE" && es.portfolioMenu,
                  locale === "en-US" && en.portfolioMenu,
                  locale === "fr-CA" && fr.portfolioMenu,
                ]}
              </a>
            </Link>

            <Link href={"#contact"}>
              <a className="navbar-item">
                {[
                  locale === "es-PE" && es.contactMenu,
                  locale === "en-US" && en.contactMenu,
                  locale === "fr-CA" && fr.contactMenu,
                ]}
              </a>
            </Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              {[
                locale === "es-PE" && es.languajeMenu,
                locale === "en-US" && en.languageMenu,
                locale === "fr-CA" && fr.languajeMenu,
              ]}
            </a>

            <div className="navbar-dropdown">
              <Link href={"/"} locale={"en-US"}>
                <a className="dropdown-item">EN</a>
              </Link>
              <Link href={"/"} locale={"es-PE"}>
                <a className="dropdown-item">ES</a>
              </Link>
              <Link href={"/"} locale={"fr-CA"}>
                <a className="dropdown-item">FR</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};