import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../navbar/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const [Shadow, setShadow] = useState(false);
  const router = useRouter();
  const changeShadow = () => {
    if (window.scrollY > 20 && window !== undefined) {
      setShadow(true);
    } else setShadow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeShadow);
    return () => window.removeEventListener("scroll", changeShadow);
  });

  return (
    <div className={styles.frontnav}>
      <nav
        className={
          Shadow
            ? "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake"
            : "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light "
        }
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand">
            {" "}
            <Image
              src="/images/RAS-logo-white.png"
              alt="Ras Insat"
              width={120}
              height={70}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li
                className={
                  router.pathname == "/" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/nrw" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/nrw">
                  <a className="nav-link">NRW</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/about" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/about">
                  <a className="nav-link">About us</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/awards" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/awards">
                  <a className="nav-link">Awards</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/activites"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/activities">
                  <a className="nav-link">Activities</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/community"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/community">
                  <a className="nav-link">COMMUNITY</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/newsletter"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link href="/newsletter">
                  <a className="nav-link">Newsletter</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/shop" ? "nav-item active" : "nav-item"
                }
              >
                <a href="/shop" className="nav-link">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
