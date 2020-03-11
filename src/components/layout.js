import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ title, children }) => {
  let header

  header = (
    <div
      style={{
        marginBottom: rhythm(1 / 2),
      }}
    >
      <h3
        style={{
          marginTop: 0,
          display: `inline`
        }}
      >
        <Link
          style={{
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <span
        style={{
        listStyle: `none`,
        float: `right`,
        }}>
        <span
          style={{
            display: `inline-block`,
            marginRight: rhythm(1 / 2),
          }}
        >
          <Link to={`/subscribe/`}>Рассылка</Link>
        </span>
        <span
          style={{
            display: `inline-block`,
            marginRight: rhythm(1 / 2),
          }}
        >
          <Link to={`/about/`}>Об авторе</Link>
        </span>
      </span>
    </div>
  )
  return (
    <div
      style={{
        marginLeft: rhythm(1),
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Блог работает на
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
