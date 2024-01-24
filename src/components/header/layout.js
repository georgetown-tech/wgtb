import * as React from 'react';
import Navbar from "../navbar/Navbar";
import "./layout.css";
import {Link} from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <div className="header">
        <Link to= "/">
          <StaticImage src="../../images/headerLogo2.png" className="header-image" alt="header image"/>
        </Link>
      </div>
        {/* {children} */}
      <nav>
        <Navbar/>
      </nav>
    </div>
  )
}

export default Layout;