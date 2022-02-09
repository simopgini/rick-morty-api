import React from "react"
import FirstSection from "../components/first-section/FirstSection"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import SecondSection from "../components/second-section/SecondSection"

function Homepage() {
  return (
    <React.Fragment>
      <Header />

      <main className="layout-main">
        <FirstSection />
        <SecondSection />
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default Homepage
