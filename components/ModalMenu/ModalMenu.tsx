import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
// import { Icon } from "@iconify/react";

interface Props {
  setShowMenu: (showMenu: boolean) => void;
}

export const ModalMenu = ({ setShowMenu }: Props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [clickBlog, setClickMenu] = useState(false);
  const [clickPortfolio, setClickPortfolio] = useState(false);
  const [clickContact, setClickContact] = useState(false);
  const [clickLanguaje, setClickLanguaje] = useState(false);

  const { locale, locales, defaultLocale, route } = useRouter();

  return (
    <div className="modal-menu-home">
      <ul className="navbar-responsive">
        <li className="navbar-responsive-item">
          <Link href="#">
            <a
              className="navbar-item nav-item"
              aria-current="page"
              onClick={() => {
                setClickMenu(true);
                setClickPortfolio(false);
                setClickContact(false);
                setClickLanguaje(false);
                setDropdownActive(false);
                setShowMenu(false);
              }}
            >
              {en.name}
            </a>
          </Link>
        </li>
        <li className="navbar-responsive-item">
          <Link href={"#about"}>
            <a
              className="navbar-item"
              onClick={() => {
                setClickMenu(false);
                setClickPortfolio(true);
                setClickContact(false);
                setClickLanguaje(false);
                setDropdownActive(false);
                setShowMenu(false);
              }}
            >
              {[
                locale === "es-PE" && es.acerca,
                locale === "en-US" && en.aboutMe,
                locale === "fr-CA" && fr.sur,
              ]}
            </a>
          </Link>
        </li>
        <li className="navbar-responsive-item">
          <Link href={"#portfolio"}>
            <a
              className="navbar-item"
              onClick={() => {
                setClickMenu(false);
                setClickPortfolio(false);
                setClickContact(true);
                setClickLanguaje(false);
                setDropdownActive(false);
                setShowMenu(false);
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
        <li>
          <Link href={"#contact"}>
            <a
              className="navbar-item"
              onClick={() => {
                setShowMenu(false);
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
            className="navbar-item"
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
              locale === "en-US" && en.languageMenu,
              locale === "fr-CA" && fr.languajeMenu,
            ]}
          </a>
          <ul
            className={
              dropdownActive ? "dropdown-menu-show-responsive" : "dropdown-menu"
            }
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link href={"/"} locale={"en-US"}>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  EN
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"es-PE"}>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  ES
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"fr-CA"}>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  FR
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};
