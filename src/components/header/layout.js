import * as React from 'react';
import Navbar from "../navbar/Navbar";
import "./layout.css";
import {Link} from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ pageTitle, children }) => {
  return (
    <div class="container">
        <Link to= "/">
          <StaticImage src="../../images/headerLogo.png" class="headerImage" alt="header image"/>
        </Link>
        <div class="subheader">
          <h1 class="page-title">{pageTitle}</h1>
          <div class= "socials">
            <Link to= "https://www.facebook.com/georgetownradio">
              <StaticImage src= "../../images/facebook.png" alt="Facebook" class="image"/>
            </Link>
            <Link to= "https://www.instagram.com/georgetownradio/">
              <StaticImage src= "../../images/insta-logo.png" alt="Instagram" class="image"/>
            </Link>
            <Link to= "https://soundcloud.com/wgtb-rotation">
              <StaticImage src= "../../images/soundcloud.png" alt="Soundcloud" class="image-soundcloud"/>
            </Link>
            <Link to= "https://twitter.com/wgtb">
              <StaticImage src= "../../images/twitter.png" alt="X" class="image"/>
            </Link>
          </div>
        </div>
        {children}
      <nav>
        <Navbar/>
      </nav>
       
    </div>
  )
}

export default Layout;