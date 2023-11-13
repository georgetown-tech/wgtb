import * as React from 'react'
// import Navbar from '../../components/navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../components/header/layout"

  const Header = () => {
    return(
        <container>
          <Layout pageTitle="Schedule"></Layout>
        </container>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Header