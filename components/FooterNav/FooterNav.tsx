import React from "react";

export const FooterNav = () => {
  return (
    <nav className="navbar navbar-dark footer-container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          &copy; Fernando Paredes Rios
        </a>

        <ul className="footer-links-list">
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
