import * as React from 'react'
// import Navbar from '../../components/navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }
  const headingAccentStyles = {
    color: "#663399",
  }
  const paragraphStyles = {
    marginBottom: 48,
  }
  const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  }
  const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
  }
  const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  }
  
  const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  }
  
  const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
  }
  
  const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }
  
  const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
  }
  
  const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
  }

  // function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/blog' element={<TheRotation />} />
//         <Route path='/shows' element={<Shows />} />
//         <Route path='/schedule' element={<Schedule />} />
//         <Route path='/dj-services' element={<DjServices />} />
//         <Route path='/contact-us' element={<ContactUs />} />
//         <Route path='/about' element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

  const Header = () => {
    return(
        <h1 style = {headingStyles}>
            Georgetown Radio
        </h1>
    )
  }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Header


