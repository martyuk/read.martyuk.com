import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscription from "../components/subscription"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Блог Петра Мартюка" />
      <Bio />
      <Subscription />
      {posts.map(({ node }) => {
        if (node.frontmatter.type) {
          console.log(node.frontmatter.type)
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                marginBottom: rhythm(1),
              }}
            >
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{
                      textDecoration: `none`,
                      color: `inherit`
                    }} 
                    to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Link to={node.fields.slug}>
                  {"Продолжение →"}
                </Link>
              </section>
            </article>
          )
        }
      })}
    </Layout>
  )
}

export default BlogIndex

/*
      filter: {
        frontmatter: {
          type: { ne: "krugozor" }
        }
      }  
*/

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
          }
        }
      }
    }
  }
`
