import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Hanna Taylor`, `Gatsby`, `Simple Site Template`]} />
    <section className="hero">
      <div className="hero-body section">
            <h1 className="title h1-fluid">
              Hero Section
            </h1>
      </div>
    </section>
    <section className="section" id="section1">
        <h2 className="h2-fluid">Section 1</h2>
        <p>Content</p>
    </section>
    <section className="section" id="section2">
        <h2 className="h2-fluid">Section 2</h2>
        <h3 className="h3-fluid">Content</h3>
        <p>Text</p>
    </section>
    <section className="section" id="section3">
        <h2 className="h2-fluid">Section 3</h2>
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">Link</a>
          </li>
        </ul>
    </section>
  </Layout>
)

export default IndexPage