import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Error'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import GoToTop from './Components/GoToTop'

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #5d5c61",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#323135",
      btn: "rgb(98 84 243)",
      border: "#b1a296",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
          </Routes>

          <GoToTop />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App