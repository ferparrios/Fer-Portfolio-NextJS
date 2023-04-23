import React from "react";
// import { FooterNav } from "@components/index";
import Link from "next/link";

export const FooterContainer = () => {
  return (
    <div className="footer-container">
      <Link href="#" as={"/"}>
        <a className="navbar-brand footer-navbar-text">
          &copy; Fernando Paredes Rios - 2023
        </a>
      </Link>
    </div>
  );
};
