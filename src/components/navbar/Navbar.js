import React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainMenu}>
      <ul className={styles.navbar}>
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
    </div>
  );
};

export default Navbar;
