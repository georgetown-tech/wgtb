import * as React from 'react';
import Navbar from "../navbar/Navbar";
import "./layout.css";
import {Link} from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Layout = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to= "/">
          <StaticImage src="../../images/wgtbLogoBlack.png" className="header-image" alt="wgtb header"/>
        </Link>
      </div>
      <h1 className="header-subtext">Welcome to Georgetown Radio</h1>
      <nav>
        <Navbar/>
      </nav>
    </div>
  )
}

export default Layout;