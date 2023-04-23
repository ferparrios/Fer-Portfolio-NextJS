import React from "react";
// import { useRouter } from "next/router";

export const Navbar = () => {
  // const { locale, locales, defaultLocale, route } = useRouter();

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="images/fer-avatar.jpg" width="100%" height="100%" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Fernando Paredes Rios</a>

            <a className="navbar-item">About</a>

            <a className="navbar-item">Portfolio</a>

            <a className="navbar-item">Contacto</a>

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
            <a className="navbar-link">Lenguaje</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">EN</a>
              <a className="navbar-item">ES</a>
              <a className="navbar-item">FR</a>
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
