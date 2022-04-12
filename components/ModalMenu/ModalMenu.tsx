import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
// import { Icon } from "@iconify/react";

export const ModalMenu = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [clickBlog, setClickMenu] = useState(false);
  const [clickPortfolio, setClickPortfolio] = useState(false);
  const [clickContact, setClickContact] = useState(false);
  const [clickLanguaje, setClickLanguaje] = useState(false);

  const { locale, locales, defaultLocale, route } = useRouter();

  return (
    <div className="modal-menu-home">
      {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
      <ul className="navbar-responsive">
        <li className="navbar-responsive-item">
          <Link href="#blog-home">
            <a
              className={clickBlog ? "nav-link responsive-active" : "nav-link"}
              aria-current="page"
              onClick={() => {
                setClickMenu(true);
                setClickPortfolio(false);
                setClickContact(false);
                setClickLanguaje(false);
                setDropdownActive(false);
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
        <li className="navbar-responsive-item">
          <Link href="#portfolio-home">
            <a
              className={
                clickPortfolio ? "nav-link responsive-active" : "nav-link"
              }
              onClick={() => {
                setClickMenu(false);
                setClickPortfolio(true);
                setClickContact(false);
                setClickLanguaje(false);
                setDropdownActive(false);
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
        <li className="navbar-responsive-item">
          <Link href="#contact-home">
            <a
              className={
                clickContact ? "nav-link responsive-active" : "nav-link"
              }
              onClick={() => {
                setClickMenu(false);
                setClickPortfolio(false);
                setClickContact(true);
                setClickLanguaje(false);
                setDropdownActive(false);
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
        <li className="navbar-responsive-item dropdown">
          <a
          className={
            clickLanguaje ? "nav-link dropdown-toggle responsive-active" : "nav-link dropdown-toggle "
          }
            // className="nav-link dropdown-toggle responsive-active"
            // href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              setDropdownActive(!dropdownActive);
              setClickMenu(false);
              setClickPortfolio(false);
              setClickContact(false);
              setClickLanguaje(true);
            }}
          >
            {[
              locale === "es-PE" && es.languajeMenu,
              locale === "en-US" && en.languajeMenu,
              locale === "fr-CA" && fr.languajeMenu,
            ]}
            {/* <Icon icon="bxs:down-arrow" color="white" width="10" className='dropdown-arrow-down' /> */}
          </a>
          <ul
            className={
              dropdownActive ? "dropdown-menu-show-responsive" : "dropdown-menu"
            }
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link href={"/"} locale={"en-US"}>
                <a className="dropdown-item">EN</a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"es-PE"}>
                <a className="dropdown-item">ES</a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"fr-CA"}>
                <a className="dropdown-item">FR</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};
