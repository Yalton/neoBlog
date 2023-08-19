import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  {
    text: "a_game",
    url: "a_game",
    badge: false,
    description:
      "Text Based game in the style of the 1980's terminal games",
  },
  {
    text: "contact",
    url: "contact",
    badge: false,
    description:
      "Contact Page",
  },
  {
    text: "about",
    url: "about",
    badge: false,
    description:
      "About Page",
  },
  { text: "TypeScript", url: "using-typescript" },

]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/default/default_image.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div>
        <h1>
          Welcome to my blog
        </h1>

        <p>THis blog's purpose is primarily to share the interesting, fascinating, groundbreaking, research I do in my offtime with anyone interested</p>
        <p>
          This blog is always changing and, as such you can fully expect it to look different if you ever decide to visit it again in a few months. All of the links will remain intact, so if you find something you like feel free to bookmark it.
        </p>
        <p>New stuff coming all the time; stay tuned, or dont, I'm not your dad. </p>
      </div>

      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage


// { text: "TypeScript", url: "using-typescript" },
// { text: "Server Side Rendering", url: "using-ssr" },
// { text: "Deferred Static Generation", url: "using-dsg" },

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

{/* <ul className={styles.list}>
  {links.map(link => (
    <li key={link.url} className={styles.listItem}>
      <a
        className={styles.listItemLink}
        href={`${link.url}${utmParameters}`}
      >
        {link.text} ↗
      </a>
      <p className={styles.listItemDescription}>{link.description}</p>
    </li>
  ))}
</ul> */}