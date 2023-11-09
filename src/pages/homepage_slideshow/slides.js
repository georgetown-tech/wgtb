import React from "react";
import {Link} from "gatsby";
import "./slides.css"; 

const Slides = () => {
  return(
    <ul>
    <li>
        <Link className ={slideImage} to="http://georgetownradio.com/preview-janelle-monae-the-anthem-9-24-9-25">
        <StaticImage src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/09/image.png?resize=1020%2C500"
            alt="Janelle Monae"/>
            
        </Link>
        <h2>
        <a
            href="http://georgetownradio.com/preview-janelle-monae-the-anthem-9-24-9-25"
            >Preview: Janelle Monáe @ the Anthem 9/24 &#038; 9/25</a>
        </h2>
        <div>
        Janelle Monáe brings the Age of Pleasure tour to DC for two
        consecutive nights at the Anthem,...
        </div>
    </li>
    <li>
        <Link to="http://georgetownradio.com/preview-l7-tarah-who-the-black-cat-9-18">
        <StaticImage src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/09/l7-1-1200x675-1.jpg?resize=1020%2C500"
            alt="L7"
        />
        </Link>
        <h2 class="h3">
            Preview: L7 &#038; Tarah Who? @ The Black Cat, 9/18
        </h2>
        <div>
        Though often associated with the early 90s grunge and riot grrrl
        explosion, LA-based band, L7,...
        </div>
    </li>
    <li>
        <Link to="http://georgetownradio.com/the-dc-hold-on-cab-ellis-with-gooseberry-and-alex-alavi-the-funky-breakfast-the-pocket">
        <StaticImage src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/02/cab-ellis.jpeg?resize=400%2C200"
            alt="Cab Ellis"
        />
        </Link>
        <h2 class="h3">
        The DC Hold On: Cab Ellis with Gooseberry and Alex Alavi &#038; the Funky Breakfast @ The Pocket
        </h2>
        <div>
        Ask the average American how they picture the lives of young
        adults in the District of Columbia,...
        </div>
    </li>
    <li>
        <Link to="http://georgetownradio.com/jockstrap-makes-dc9-their-own">
        <StaticImage src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/02/Screen-Shot-2023-02-04-at-7.22.27-PM.png?resize=852%2C458"
            alt="Jockstrap"
        />
        </Link>
        <h2 class="h3">
        Jockstrap Makes DC9 Their Own
        </h2>
        <div>
        British duo Jockstrap kicked off their first ever North American
        tour at DC9 on November 17th. The...
        </div>
    </li>
    </ul>
  );
};

export default Slides;