import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    const { title } = data.site.siteMetadata
    return(
        <div
            style={{
            marginBottom: rhythm(1 / 2),
        }}>
            <div
                style={{
                paddingBottom: rhythm(1 / 2),
                }}>
                <span
                style={{
                    display: `inline-block`,
                    marginRight: rhythm(1 / 4),
                }}
                >
                    <span
                        style={{
                        marginRight: rhythm(1 / 4),
                        }}
                    >
                        <Link to={`/`}>Главная</Link>
                    </span>
                ·
                </span>
                <span
                style={{
                    display: `inline-block`,
                    marginRight: rhythm(1 / 4),
                }}
                >
                    <span
                        style={{
                        marginRight: rhythm(1 / 4),
                        }}
                    >
                        <Link to={`/now/`}>Прямо сейчас</Link>
                    </span>
                ·
                </span>
                <span
                style={{
                    display: `inline-block`,
                    marginRight: rhythm(1 / 4),
                }}
                >
                    <span
                        style={{
                        marginRight: rhythm(1 / 4),

                    }}>
                    <Link to={`/about/`}>Об авторе</Link>
                    </span>
                ·
                </span>
                <span
                style={{
                    display: `inline-block`,
                    marginRight: rhythm(1 / 4),
                }}
                >
                <Link to={`https://martyuk.substack.com/`} target={`_blank`}>Кругозор ↝</Link>
                </span>
            </div>
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
        </div>
    )
}

export default Header