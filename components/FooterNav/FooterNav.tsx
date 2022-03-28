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
            <a href="https://twitter.com/ferparrios">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ferparrios/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fparedesr112/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ferparrios">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
