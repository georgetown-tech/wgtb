import * as React from 'react'
import Layout from "../components/header/layout"
import Footer from "../components/footer.js"
import "./blog.css"

  const Header = () => {
    return(
        <container>
          <Layout pageTitle="The Rotation"/>
          <div class = "playlist-wrap">
            <iframe class = "spotify-playlist" src="https://open.spotify.com/embed/playlist/4cgpqcGNpjb3rK39pBnkdI?utm_source=generator&theme=0" 
            width="100%" height="380" allowfullscreen="" frameborder="0" allow="autoplay; 
            clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <iframe src="https://open.spotify.com/embed/playlist/3u0TgZsPMoL13M88FVlH0U?utm_source=generator&theme=0"
             width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay;
              clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
            <iframe src="https://open.spotify.com/embed/playlist/452Fl9XoT6gfNjv80IJoMF?utm_source=generator&theme=0"
             width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay;
              clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>


          </div>
        {/* FOOTER */}
          <footer>
            <Footer>
            </Footer>
          </footer>
        </container>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Header