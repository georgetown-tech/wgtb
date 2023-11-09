import * as React from 'react'
//import Navbar from "../components/navbar/Navbar"
import Layout from "../components/layout"
import Footer from "/Users/gaiagoulandris/Documents/GitHub/wgtb/src/components/footer.js"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import{slides,
reviews,
playlists,
slideImage
} from "./homepage.module.css"

const Homepage = () => {
  return(
    <div>
      <Layout pageTitle = "Georgetown Radio">
      </Layout>
{/* SLIDES */}
      <section className={slides}>
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
      </section>
{/* REVIEWS */}
      <section className={reviews}>
        <h2>Single Review</h2>
        <article>
          <div>
            <Link>
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2021/03/hitlikeagirl-emilyberger.jpg?resize=350%2C200"
                alt=""
                />
            </Link>
          </div>
          <h3>
            Hit Like A Girl’s Newest Single “Monsters” is an Anthem for the Forgotten
          </h3>
          <p>
            Hit Like A Girl’s newest single, “Monsters”, came out on March
            16, 2021. "Monsters" is the second single shared from their
            third album, Heart Racer, which will be released on April 2nd
            through...
          </p>
        </article>
        <h2>Album Reviews</h2>
          <article>
            <div>
              <Link>
                <StaticImage>
                  src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/01/og_image.jpg?resize=350%2C200"
                  alt=""
                </StaticImage>
              </Link>
            </div>
          </article>
      </section>
{/* PLAYLIST */}
      <section className={playlists}>
        <h2>Playlists</h2>
        <ul>
          <li>
            <Link>
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/09/fiona-apples-and-oranges.png?resize=380%2C380"
                alt=""/>
            <h3>
                FA&#038;O: Fall Rotation Recommendations
            </h3>
            </Link>
          </li>
          <li>
              <Link>
                <StaticImage
                  src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/02/Screen-Shot-2022-02-21-at-2.55.23-PM.png?resize=380%2C380"
                  alt=""
                />
            <h3>
                Preview + Playlist: MICHELLE and Sidney Gish @ BDA
            </h3>
            </Link>
          </li>
          <li>
              <Link>
                <StaticImage
                  src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/01/4641-1.jpeg?resize=380%2C380"
                  alt=""
                />
            <h3>
              Playlist: Honeymoon in Paris
            </h3>
            </Link>
          </li>
        </ul>
      </section>
    {/* FOOTER */}
      <footer>
        <Footer>
        </Footer>
      </footer>
    </div>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your components
export default Homepage



