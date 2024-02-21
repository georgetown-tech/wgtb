import React from "react"
import "./footer.css"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';



const Footer = () => {
    return (
    <div>
        <hr class="footer-divider"></hr>
        <div class= "socials">
            <Link to= "https://www.facebook.com/georgetownradio">
              <StaticImage src= "../../images/facebook.png" alt="Facebook" className="image"/>
            </Link>
            <Link to= "https://www.instagram.com/georgetownradio/">
              <StaticImage src= "../../images/insta-logo.png" alt="Instagram" className="image"/>
            </Link>
            <Link to= "https://soundcloud.com/wgtb-rotation">
              <StaticImage src= "../../images/soundcloud.png" alt="Soundcloud" className="image-soundcloud"/>
            </Link>
            <Link to= "https://twitter.com/wgtb">
              <StaticImage src= "../../images/twitter.png" alt="X" className="image"/>
            </Link>
        </div>
        <div class="footer-wrap">
            <div class="footer-column">
                <h3 class="footer-header">Blogroll</h3>
                <ul class="footer-list">
                    <li>
                        <a href="http://www.gorillavsbear.net/">Gorilla vs. Bear</a>
                    </li>
                    <li>
                        <a href="http://georgetownvoice.com/section/halftime/">Halftime</a>
                    </li>
                    <li>
                        <a href="http://www.npr.org/">NPR</a>
                    </li>
                    <li>
                        <a href="http://www.obscuresound.com/">Obscure Sound</a>
                    </li>
                    <li>
                        <a href="http://pitchfork.com">Pitchfork</a></li>
                    <li>
                        <a href="https://www.qoremusicco.com/">Qore Music Co.</a>
                    </li>
                    <li>
                        <a href="http://www.thevinyldistrict.com">The Vinyl District</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-header">DC Music Venues</h3>
                <ul class="footer-blogroll">
                    <li>
                        <a href="http://www.930.com/">9:30 Club</a>
                    </li>
                    <li>
                        <a href="http://www.blackcatdc.com/">Black Cat</a>
                    </li>
                    <li>
                        <a href="http://www.dar.org/conthall/">DAR Constitutional Hall</a>
                    </li>
                    <li>
                        <a href="http://www.dcnine.com/">DC9</a>
                    </li>
                    <li>
                        <a href="https://jamminjava.com/">Jammin&#039; Java</a>
                    </li>
                    <li>
                        <a href="http://www.thejiffylubelive.com/">Jiffy Lube</a>
                    </li>
                    <li>
                        <a href="http://www.kennedy-center.org/">Kennedy Center</a>
                    </li>
                    <li>
                        <a href="http://www.merriweathermusic.com/">Merriweather Post Pavillion</a>
                    </li>
                    <li>
                        <a href="http://www.ramsheadlive.com/">Rams Head Live</a>
                    </li>
                    <li>
                        <a href="http://www.rockandrollhoteldc.com/portal/">Rock &amp; Roll Hotel</a>
                    </li>
                    <li>
                        <a href="http://www.redandblackbar.com/">The Red and the Black</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                    <h3 class="footer-header">Our Location</h3>
                    <div>
                        <p>
                        432 Leavey Center <br/>Georgetown University <br/>Washington, DC 20057<br/>
                        studio phone: 202.687.WGTB
                        </p>
                        {/* <p> Copyright (c)2009</p> */}
                    </div>
                    <StaticImage class= "footer-logo" src="../../images/wgtbLogoBlack.png" alt= "footer logo"/>
            </div>
        </div>
        <hr class="spacing"></hr>
    </div>
    )
};
    


export default Footer;