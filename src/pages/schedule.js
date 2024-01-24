import * as React from 'react'
// import Navbar from '../../components/navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../components/header/layout"
import GoogleSheetEmbed from '../components/schedule_sheet'
import Footer from "../components/footer/footer.js"
import "../styles/schedule.css"

const Header = () => {
  return(
      <container>
        <Layout pageTitle="Schedule"></Layout>
        <div class = "header-wrap">
          <h2>Check out our latest schedule to stay in the loop with our fantastic on-air hosts and talented artists!</h2>
        </div>
        <GoogleSheetEmbed />
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