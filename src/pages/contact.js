import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout >
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
      </Layout>
    </div>
  )
}

export default ContactPage
