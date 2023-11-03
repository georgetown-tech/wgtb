import * as React from 'react'
import Navbar from "./navbar/Navbar"
import {Link} from 'gatsby'
import{container,
heading,
headerImage,
socialContainer
} from "./layout.module.css"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <main>
        <Link to= "/homepage">
          <StaticImage src="../images/headerLogo.png" className={headerImage} alt="logo header"/>
        </Link>
        <div className={socialContainer}>
          <Link to= "https://www.facebook.com/georgetownradio">
            <StaticImage src= "../images/facebook.png" alt="Facebook"/>
          </Link>
          <Link to= "https://www.instagram.com/georgetownradio/">
            <StaticImage src= "../images/instagram.png" alt="Instagram"/>
          </Link>
          <Link to= "https://soundcloud.com/wgtb-rotation">
            <StaticImage src= "../images/soundcloud.png" alt="Soundcloud"/>
          </Link>
          <Link to= "https://twitter.com/wgtb">
            <StaticImage src= "../images/twitter.png" alt="X"/>
          </Link>
        </div>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <nav>
        <Navbar/>
      </nav>
    </div>
  )
}

export default Layout