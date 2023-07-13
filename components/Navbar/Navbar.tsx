import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

export const Navbar = () => {
  // const { locale, locales, defaultLocale, route } = useRouter();
  // const navbar = document.querySelector("#NavBar");
  // let top = navbar?.offsetTop;
  // function stickynavbar() {
  //   if (window.scrollY >= top) {
  //     navbar?.classList.add("sticky");
  //   } else {
  //     navbar?.classList.remove("sticky");
  //   }
  // }
  // window.addEventListener("scroll", stickynavbar);
  // console.log(window.screenY)
  return (
    <>
      <nav
        className="navbar is-fixed-top top-navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="#">
            <a className="navbar-item">
              <img src="images/fer-avatar.jpg" width="100%" height="100%" />
            </a>
          </Link>

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
            <Link href={"/"}>
              <a className="navbar-item nav-item">Fernando Paredes Rios</a>
            </Link>

            <Link href={"#about"}>
              <a className="navbar-item">About</a>
            </Link>

            <Link href={"#portfolio"}>
              <a className="navbar-item">Portfolio</a>
            </Link>

            <Link href={"#contact"}>
              <a className="navbar-item">Contact</a>
            </Link>

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
