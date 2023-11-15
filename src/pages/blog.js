import * as React from 'react'
import Layout from "../components/header/layout"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  const Header = () => {
    return(
        <container>
          <Layout pageTitle="The Rotation"/>
        </container>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Header