import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="section">
      <h1 className="title h1-fluid">About</h1>
      <p>This site uses:</p>
      <ul>
        <li>Gatsby</li>
        <li>Bulma</li>
        <li>Zeit Now for deployment</li>
      </ul>
      <p>Features:</p>
      <ul>
        <li>Fully responsive text</li>
      </ul>
    </section>
  </Layout>
)

export default About
