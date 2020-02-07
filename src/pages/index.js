import React from "react"
import Header from "../components/header"
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>
        I'm Felipe, a full-stack developer living in beautiful Vitória/ES.
      </h2>
      <p>
        Need a developer? <a href="/contact">Contact me</a>
      </p>
      <Footer/>
    </div>
  )
}

export default IndexPage
