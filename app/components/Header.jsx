"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import headerStyles from "../header.module.css";
import MobileMenu from "./MobileMenu";



const Header = () => {
  const pathname = usePathname();
    console.log(pathname)
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link href="/" className="header__titulo">
            <div>COMMANTECH</div>
            <div className="header__titulo-srls">SRLS</div>
          </Link>
        </div>

        <div className="navBar">
          <Link
            href="/about"
            className={`navBar__link ${
              pathname === "/about/" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`navBar__link ${
              pathname === "/services/" ? "active" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`navBar__link ${
              pathname === "/projects/" ? "active" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`navBar__contact ${
              pathname === "/contact/" ? "" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;