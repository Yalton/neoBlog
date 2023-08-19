import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/postList";
import * as styles from "../components/index.module.css";

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

]
const IndexPage = () => {
  const [contentVisible, setContentVisible] = useState(false); // Create state variable

  useEffect(() => {
    // Set a timeout for the duration of the animation (1 second in this case)
    const timer = setTimeout(() => {
      setContentVisible(true); // Set content to visible after animation
    }, 1000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          className={styles.animatedImage}
          src="../images/default/default_image.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          placeholder="none" // Add this line
          style={{ marginBottom: `var(--space-3)` }}
        />

        {contentVisible && ( // Render content only if contentVisible is true

          <div>
            <p className={styles.intro}>
              <b>Links:</b>{" "}
              {samplePageLinks.map((link, i) => (
                <React.Fragment key={link.url}>
                  <Link to={link.url}>{link.text}</Link>
                  {i !== samplePageLinks.length - 1 && <> · </>}
                </React.Fragment>
              ))}
              <br />
            </p>
            <div className={styles.contentContainer}>
            <h1 >
              Welcome to my blog
            </h1>

            <p >This blog's purpose is primarily to share the interesting, fascinating, groundbreaking, research I do in my offtime with anyone interested</p>
            <p >
              This blog is always changing and, as such you can fully expect it to look different if you ever decide to visit it again in a few months. All of the links will remain intact, so if you find something you like feel free to bookmark it.
            </p>
            <p >New stuff coming all the time; stay tuned, or dont, I'm not your dad. </p>
            </div>
            <hr/>
            <PostList /> 
          </div>
        )}

      </div>
    </Layout>
  );
};


export const Head = () => <Seo title="Home" />

export default IndexPage