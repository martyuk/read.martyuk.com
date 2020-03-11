import Typography from "typography"
import gray from "gray-percentage"
import MOBILE_MEDIA_QUERY from "typography-breakpoint-constants"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

Wordpress2016.baseFontSize = ["24px"]
Wordpress2016.baseLineHeight = 1.5
Wordpress2016.headerFontFamily = ["sans-serif"]
Wordpress2016.bodyFontFamily = ["serif"]
Wordpress2016.bodyColor = "hsla(0,0%,0%,1.0)"
Wordpress2016.overrideStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  h1: {
    fontFamily: ["sans-serif"].join(","),
  },
  blockquote: {
    fontStyle: "italic",
    paddingLeft: rhythm(13 / 16),
    marginLeft: rhythm(-1),
    borderLeft: `${rhythm(1 / 12)} solid ${gray(0)}`,
  },
  "blockquote > :last-child": {
    marginBottom: 0,
  },
  "blockquote cite": {
    ...adjustFontSizeTo(options.baseFontSize),
    color: options.bodyColor,
    fontWeight: options.bodyWeight,
  },
  "blockquote cite:before": {
    content: '"— "',
  },
  ul: {
    listStyle: "disc",
  },
  "ul,ol": {
    marginLeft: 0,
  },
  [MOBILE_MEDIA_QUERY]: {
    "ul,ol": {
      marginLeft: rhythm(1),
    },
    blockquote: {
      marginLeft: rhythm(-3 / 4),
      marginRight: 0,
      paddingLeft: rhythm(9 / 16),
    },
  },
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(2),
  },
  h4: {
    textTransform: "uppercase",
  },
  h6: {
    fontStyle: "italic",
  },
  a: {
    color: "blue",
    textDecoration: "underlined",
  },
  "mark,ins": {
    background: "#007acc",
    color: "white",
    padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
    textDecoration: "none",
  },
})


delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
