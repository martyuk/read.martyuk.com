import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const NotFoundPage = () => {

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1 style={{ marginTop: rhythm(1) }}>Такой страницы не существует</h1>
      <p>Но почему? <span role="img" aria-label=":thoughts:">🤔</span></p>
    </Layout>
  )
}

export default NotFoundPage