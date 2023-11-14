import * as React from 'react'
//import Navbar from "../components/navbar/Navbar"
import Layout from "../components/header/layout"
import Footer from "../components/footer.js"
import ImageSlider from './homepage_slideshow/ImageSlider'; // Import the ImageSlider component
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import{reviews,
playlists,
slideImage
} from "./homepage.module.css"

// Array of objects representing slides
const slides = [
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/09/image.png?resize=1020%2C500",
    link: "http://georgetownradio.com/preview-janelle-monae-the-anthem-9-24-9-25",
    title: "Preview: Janelle Monáe @ the Anthem 9/24 & 9/25",
    description: "Janelle Monáe brings the Age of Pleasure tour to DC for two consecutive nights at the Anthem...",
  },
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/09/l7-1-1200x675-1.jpg?resize=1020%2C500",
    link: "http://georgetownradio.com/preview-l7-tarah-who-the-black-cat-9-18",
    title: "Preview: L7 & Tarah Who? @ The Black Cat, 9/18",
    description: "Though often associated with the early 90s grunge and riot grrrl explosion, LA-based band, L7,...",
  },
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/02/cab-ellis.jpeg?resize=400%2C200",
    link: "http://georgetownradio.com/the-dc-hold-on-cab-ellis-with-gooseberry-and-alex-alavi-the-funky-breakfast-the-pocket",
    title: "The DC Hold On: Cab Ellis with Gooseberry and Alex Alavi & the Funky Breakfast @ The Pocket",
    description: "Ask the average American how they picture the lives of young adults in the District of Columbia,...",
  },
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/02/Screen-Shot-2023-02-04-at-7.22.27-PM.png?resize=852%2C458",
    link: "http://georgetownradio.com/jockstrap-makes-dc9-their-own",
    title: "Jockstrap Makes DC9 Their Own",
    description: "British duo Jockstrap kicked off their first ever North American tour at DC9 on November 17th. The...",
  },
];



const Homepage = () => {
  return(
    <div>
      <Layout pageTitle = "Georgetown Radio">
      </Layout>
{/* SLIDES */}
  <ImageSlider slides={slides} />
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



