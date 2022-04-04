import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [clickBlog, setClickMenu] = useState(false);
  const [clickPortfolio, setClickPortfolio] = useState(false);
  const [clickContact, setClickContact] = useState(false);

  const { locale, locales, defaultLocale, route } = useRouter();
  console.log("Locale: ", locale);
  console.log("Available Locales: ", locales);
  console.log("Defaul locale: ", defaultLocale);
  console.log("Route: ", route)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container ">
      <div className="container-fluid navbar-layout">
        <Link href="/">
          <a className="navbar-brand">Fernando Paredes Rios</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="#blog-home">
                <a
                  className={clickBlog ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  onClick={() => {
                    setClickMenu(true);
                    setClickPortfolio(false);
                    setClickContact(false);
                  }}
                >
                  {[
                    locale === "es-PE" && es.blogMenu,
                    locale === "en-US" && en.blogMenu,
                    locale === "fr-CA" && fr.blogMenu,
                  ]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#portfolio-home">
                <a
                  className={clickPortfolio ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    setClickMenu(false);
                    setClickPortfolio(true);
                    setClickContact(false);
                  }}
                >
                  {[
                    locale === "es-PE" && es.portfolioMenu,
                    locale === "en-US" && en.portfolioMenu,
                    locale === "fr-CA" && fr.portfolioMenu,
                  ]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact-home">
                <a
                  className={clickContact ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    setClickMenu(false);
                    setClickPortfolio(false);
                    setClickContact(true);
                  }}
                >
                  {[
                    locale === "es-PE" && es.contactMenu,
                    locale === "en-US" && en.contactMenu,
                    locale === "fr-CA" && fr.contactMenu,
                  ]}
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown languaje-container">
              <a
                className="nav-link dropdown-toggle"
                // href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setDropdownActive(!dropdownActive)}
              >
                {[
                  locale === "es-PE" && es.languajeMenu,
                  locale === "en-US" && en.languajeMenu,
                  locale === "fr-CA" && fr.languajeMenu,
                ]}
              </a>
              <ul
                className={
                  dropdownActive ? "dropdown-menu-show" : "dropdown-menu"
                }
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link href={'/'} locale={'en-US'} >
                    <a className="dropdown-item">EN</a>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} locale={'es-PE'}>
                    <a className="dropdown-item">ES</a>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} locale={'fr-CA'}>
                    <a className="dropdown-item">FR</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar
