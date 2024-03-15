import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";

const NavMenu = () => {
  const [sidebarVisibility, setSidebarVisbility] = useState(false);

  function showSidebar() {
    setSidebarVisbility(true);
  }

  function hideSidebar() {
    setSidebarVisbility(false);
  }

  return (
    <nav>
      {/* horizontal menu for large screens */}
      <ul>
        <li>
          <Link
            to="/"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            the rotation
          </Link>
        </li>
        <li>
          <Link
            to="/shows"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            shows
          </Link>
        </li>
        <li>
          <Link
            to="/schedule"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            schedule
          </Link>
        </li>
        <li>
          <Link
            to="/dj-services"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            dj services
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            contact us
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={styles.hideMobile}
            activeClassName={styles.active}
          >
            about
          </Link>
        </li>
        <li
          className={styles.hideDesktop}
          onClick={showSidebar}
          onKeyDown={(e) => e.key === "Enter" && showSidebar()}
          aria-label="Show sidebar"
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </li>
      </ul>
      {/* vertical menu for small screens */}
      <ul className={sidebarVisibility ? styles.sidebar : styles.hideSidebar}>
        <li
          onClick={hideSidebar}
          onKeyDown={(e) => e.key === "Enter" && hideSidebar()}
          aria-label="Hide sidebar"
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </li>
        <li>
          <Link to="/" activeClassName={styles.active}>
            home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName={styles.active}>
            the rotation
          </Link>
        </li>
        <li>
          <Link to="/shows" activeClassName={styles.active}>
            shows
          </Link>
        </li>
        <li>
          <Link to="/schedule" activeClassName={styles.active}>
            schedule
          </Link>
        </li>
        <li>
          <Link to="/dj-services" activeClassName={styles.active}>
            dj services
          </Link>
        </li>
        <li>
          <Link to="/contact-us" activeClassName={styles.active}>
            contact us
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={styles.active}>
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
