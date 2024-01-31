import * as React from 'react'
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"
import RadioPlayer from "../components/radio-player/radio-player.js"
import ImageSlider from './homepage_slideshow/ImageSlider'; 
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import "../styles/homepage.css"
import Reviews from '../components/reviews/reviews';

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
{/* FLOATING PLAYER BAR */}
      <RadioPlayer/>
      <div className="homepage-wrap">
{/* SLIDES */}
        <ImageSlider slides={slides} />
{/* REVIEWS
    <Reviews>
    </Reviews> */}
{/* PLAYLIST */}
        
        <section className="playlist-container">
          <div className="reviews">
            <h2 className="section-header">Playlists + Reviews</h2>
            <Link className="review">
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/09/fiona-apples-and-oranges.png?resize=380%2C380"
                alt=""/>
              <div className="review-text">
                <h3>
                  FA&#038;O: Fall Rotation Recommendations
                </h3>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Link>
            <Link className="review">
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/02/Screen-Shot-2022-02-21-at-2.55.23-PM.png?resize=380%2C380"
                alt=""
              />
              <div className="review-text">
                <h3>
                  Preview + Playlist: MICHELLE and Sidney Gish @ BDA
                </h3>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Link>
            <Link className="review">
              <StaticImage
                src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/01/4641-1.jpeg?resize=380%2C380"
                alt=""
              />
              <div className="review-text">
                <h3>
                Playlist: Honeymoon in Paris
                </h3>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Link>
          </div>
          <div className="playlists">
          <h2 className="section-header">Spotify Playlists</h2>
            <iframe className="spotify-playlist" title="spotify playlist" src="https://open.spotify.com/embed/playlist/4cgpqcGNpjb3rK39pBnkdI?utm_source=generator&theme=0" 
            width="100%" height="380" allowfullscreen="" allow="autoplay; 
            clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <iframe className="spotify-playlist" title ="spotify playlist" src="https://open.spotify.com/embed/playlist/3u0TgZsPMoL13M88FVlH0U?utm_source=generator&theme=0"
            width="100%" height="380" allowfullscreen="" allow="autoplay;
              clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <iframe className="spotify-playlist" title ="spotify playlist" src="https://open.spotify.com/embed/playlist/452Fl9XoT6gfNjv80IJoMF?utm_source=generator&theme=0"
            width="100%" height="380" allowfullscreen="" allow="autoplay;
              clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <iframe  className="spotify-playlist" title ="spotify playlist" src="https://open.spotify.com/embed/playlist/4cgpqcGNpjb3rK39pBnkdI?utm_source=generator&theme=0" 
            width="100%" height="380" allowfullscreen="" allow="autoplay; 
            clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
          </div>
        </section>
      </div>
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



