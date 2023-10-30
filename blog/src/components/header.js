import * as React from "react"
import { Link } from "gatsby"
// import "../components/index.module.css";

const Header = ({ siteTitle }) => (

  <header

    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div>

      <a style={{ margin: `0.4rem` }} href="https://www.youtube.com/channel/UCO15_OopxuznMbMnSb-EwqA" target="_blank" className="a-icon" rel="noopener noreferrer" ><i className="fa fa-youtube"></i></a>
      <a style={{ margin: `0.4rem` }} href="https://www.twitch.tv/daltipolous" target="_blank" className="a-icon" rel="noopener noreferrer" ><i className="fa fa-twitch"></i></a>
      <a style={{ margin: `0.4rem` }} href="https://twitter.com/yalt7117" target="_blank" className="a-icon" rel="noopener noreferrer" ><i className="fa fa-twitter"></i></a>
      <a style={{ margin: `0.4rem` }} href="https://github.com/Yalton" target="_blank" className="a-icon" rel="noopener noreferrer" ><i className="fa fa-github"></i></a>
      <a style={{ margin: `0.4rem` }} href="https://www.linkedin.com/in/dalton-r-bailey/" target="_blank" className="a-icon" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i></a>
    </div>
    <script type="text/javascript" async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>

  </header>
)

export default Header
