import React, { useState } from "react";

export const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [clickBlog, setClickMenu] = useState(false);
  const [clickPortfolio, setClickPortfolio] = useState(false)
  const [clickContact, setClickContact] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container navbar-layout">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Fernando Paredes Rios
        </a>
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
              <a
                className={clickBlog ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#blog-home"
                onClick={() => {
                  setClickMenu(true);
                  setClickPortfolio(false);
                  setClickContact(false);
                }}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clickPortfolio ? "nav-link active" : "nav-link"}
                href="#portfolio-home"
                onClick={() => {
                  setClickMenu(false);
                  setClickPortfolio(true);
                  setClickContact(false);
                }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={clickContact ? "nav-link active" : "nav-link"}
                href="#contact-home"
                onClick={() => {
                  setClickMenu(false);
                  setClickPortfolio(false);
                  setClickContact(true);
                }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item dropdown languaje-container">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setDropdownActive(!dropdownActive)}
              >
                Languaje
              </a>
              <ul
                className={
                  dropdownActive ? "dropdown-menu-show" : "dropdown-menu"
                }
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    EN
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FR
                  </a>
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
