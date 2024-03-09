import * as React from "react";
import Navbar from "../navbar/Navbar";
import * as styles from "./layout.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.header} to="/">
        <StaticImage
          className={styles.record}
          src="../../images/wgtbRecord.svg"
          alt="record animation"
        />
        <div className={styles.logoContainer}>
          <StaticImage src="../../images/wgtbLogoBlack.png" alt="wgtb header" />
        </div>
        <StaticImage
          className={styles.record}
          src="../../images/wgtbRecord.svg"
          alt="record animation"
        />
      </Link>
      <h1 className={styles.headerSubtext}>Welcome to Georgetown Radio</h1>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
};

export default Layout;
