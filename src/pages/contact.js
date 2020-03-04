import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  const data = useStaticQuery(graphql `
  query{
    site{
      siteMetadata{
        twitter
      }
    }
  }
  `)
  return (
    <div>
      <Layout>
        <h1>Contact Page</h1>
        <p>
          {" "}
          The best way to reach me is via{" "}
          <a href="https://twitter.com/fmcarreiro" target="_blank">
            {data.site.siteMetadata.twitter}.
          </a>{" "}
          on Twitter!
        </p>

        <p>
          <Link to="/">Back to Home.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
