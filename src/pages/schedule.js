import * as React from 'react'
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"
import "../styles/schedule.css"
import RadioPlayer from '../components/radio-player/radio-player.js';

const Schedule = () => {
  return(
      <container>
        <Layout pageTitle="Schedule"></Layout>
        <RadioPlayer/>
        <div className="sheet-container">
          <div class = "header-wrap">
            <h2 className="schedule-header">Check out our latest schedule to stay in the loop with our fantastic on-air hosts and talented artists!</h2>
          </div>
          <iframe title="Google Sheet Embed" className="sheet"
          src="https://docs.google.com/spreadsheets/d/1UU-dhZu0D0RkqyRYkIzQMVXrjiE8UfNwBCJc5xevrGM/edit?rm=minimal"
          allowFullScreen
          ></iframe>
        </div>
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
export default Schedule