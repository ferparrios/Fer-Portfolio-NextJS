import Link from "next/link";
import React from "react";

export const FooterNav = () => {
  return (
    <div className="container-fluid footer-container">
      <Link href="#" as={"/"}>
        <a className="navbar-brand footer-navbar-text">
          &copy; Fernando Paredes Rios
        </a>
      </Link>
    </div>
  );
};
