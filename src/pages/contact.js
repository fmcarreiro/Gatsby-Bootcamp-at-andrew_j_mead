import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p> The best way to reach me is via @fmcarreiro on Twitter!</p>
      <p>
        <a href="https://twitter.com/fmcarreiro" target="_blank">
          @fmcarreiro.
        </a>
      </p>
      <p>
        <Link to="/">Back to Home.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
