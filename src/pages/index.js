import * as React from 'react'
//import Navbar from "../components/navbar/Navbar"
import Layout from "../components/header/layout"
import Footer from "../components/footer.js"
import Slides from "./homepage_slideshow/slides"
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
      <section classname={slides}>
      <Slides>
      </Slides>
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



