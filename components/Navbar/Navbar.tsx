import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import { ModalMenu } from "@components/ModalMenu/ModalMenu";

export const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [clickBlog, setClickMenu] = useState(false);
  const [clickPortfolio, setClickPortfolio] = useState(false);
  const [clickContact, setClickContact] = useState(false);
  const [menuResponsive, setmenuResponsive] = useState(false)

  const { locale, locales, defaultLocale, route } = useRouter();
  

  return (
    <>
      {/* <nav classNameName="navbar">
      <div classNameName="container-fluid navbar-layout">
        <Link href="/">
          <a classNameName="navbar-brand navbar-name">Fernando Paredes Rios</a>
        </Link>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setmenuResponsive(!menuResponsive)}
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
          <ul classNameName="navbar-nav">
            <li classNameName="nav-item">
              <Link href="#blog-home">
                <a
                  classNameName={clickBlog ? "nav-link active" : "nav-link"}
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
            <li classNameName="nav-item">
              <Link href="#portfolio-home">
                <a
                  classNameName={clickPortfolio ? "nav-link active" : "nav-link"}
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
            <li classNameName="nav-item">
              <Link href="#contact-home">
                <a
                  classNameName={clickContact ? "nav-link active" : "nav-link"}
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
            <li classNameName="nav-item dropdown languaje-container">
              <a
                classNameName="nav-link dropdown-toggle"
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
                classNameName={
                  dropdownActive ? "dropdown-menu-show" : "dropdown-menu"
                }
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link href={'/'} locale={'en-US'} >
                    <a classNameName="dropdown-item">EN</a>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} locale={'es-PE'}>
                    <a classNameName="dropdown-item">ES</a>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} locale={'fr-CA'}>
                    <a classNameName="dropdown-item">FR</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}

    {/* {
      menuResponsive && (
        <ModalMenu />
      )
    } */}

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="images/fer-avatar.jpg" width="100%" height="100%" />
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Fernando Paredes Rios
      </a>

      <a className="navbar-item">
        About
      </a>

      <a className="navbar-item">
        Portfolio
      </a>

      <a className="navbar-item">
        Contacto
      </a>

      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Lenguaje
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            EN
          </a>
          <a className="navbar-item">
            ES
          </a>
          <a className="navbar-item">
            FR
          </a>
          
        </div>
      </div> */}
    </div>

    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Lenguaje
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            EN
          </a>
          <a className="navbar-item">
            ES
          </a>
          <a className="navbar-item">
            FR
          </a>
          {/* <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a> */}
        </div>
      </div>

    {/* <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> */}
  </div>
</nav>
    
    
    </>
  );
};

// export default Navbar
