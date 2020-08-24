import React from "react"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

const Layout = ({ title, children }) => {

  
  return (
    <div
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)}`,
      }}
    >
      <Header titlte={title} />
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