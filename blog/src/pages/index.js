import React, { lazy, Suspense } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";


const PostList = lazy(() => import("../components/postList"));
const samplePageLinks = [
  {
    text: "projects",
    url: "projects",
    badge: false,
    description:
      "My Projects",
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
  {
    text: "a_game",
    url: "a_game",
    badge: false,
    description:
      "Text Based game in the style of the 1980's terminal games",
  },

  {
    text: "3dPrinterCam",
    url: "3dPrinterCam",
    badge: false,
    description:
      "Live Stream of camera from 3D printer",
  },

]

const IndexPage = () => {

  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          className={styles.animatedImage}
          src="../images/default/default_image.png"
          loading="eager"
          width={64}
          quality={75}
          formats={["auto", "webp", "avif"]}
          alt=""
          placeholder="none" // Add this line
          style={{ marginBottom: `var(--space-3)` }}
        />


        <div>
          <p className={styles.intro}>
            <b>Links:</b>{" "}
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> - </>}
              </React.Fragment>
            ))}
            <br />
          </p>
          <div className={styles.contentContainer}>
            <h1 >
              Welcome
            </h1>
            <p> I write about stuff I find interesting and render it here for your viewing pleasure</p>
            <p> Check out the links in the top right if you want to see what else I get up to</p>
          </div>
          <p> -------------------------------- </p>
          <Suspense fallback={<div>Loading posts...</div>}>
            <PostList />
          </Suspense>
        </div>

      </div>
    </Layout>
  );
};


export const Head = () => <Seo title="Home" />

export default IndexPage