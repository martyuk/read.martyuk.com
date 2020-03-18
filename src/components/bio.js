/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <p
      style={{
        display: `flex`,
      }}
    >
      <div>
        {author.summary}
      </div>
    </p>
  )
}

export default Bio
