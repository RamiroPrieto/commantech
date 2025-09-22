"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import headerStyles from "../header.module.css";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--small" : ""}`}>
      <div className="header__container container">
        <div className="header__logo">
          <Link href="/" className="" style={{ display: "block", alignItems: "center" }}>
            <Image
              className=""
              src="/logoNew.svg"
              alt="logoNew.svg"
              width={230}
              height={50}
            />
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
