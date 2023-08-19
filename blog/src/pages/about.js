import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';


const AboutPage = ({ pageTitle, pageHeading }) => (
  <Layout>
    <Seo title={pageTitle || "About"} />
    <div id="heading-div" className="centered">
      <div className="title_header">
        <div className="page_title">
          <h2> {pageHeading || "About"}
          </h2>
        </div>
      </div>
    </div>
    <section className="sec_ctr">
      <div className="content_container">
        <div className="content_block">
          <div className="lfloat sub_content_block">
            <StaticImage src="../images/main_50.JPG" alt="Description" />
          </div>
          <div className="lalligned sub_content_block"> {/* Moved this <div> outside the previous one */}
            <h2 className="work-feature-block-header">About Me</h2>
            <h2 class="work-feature-block-header">About Me</h2>
            <p>I have always been passionate about learning, with an insatiable curiosity to acquire knowledge and apply it to create new connections or bridge gaps across seemingly unrelated subjects. Each day, I strive to learn something new, particularly if it holds potential for application in future projects. Committed to personal growth and development, I enjoy challenging myself and revel in surpassing my past achievements.</p>
            <p>My interests are diverse and ever-evolving, but one constant fascination has been my love for computers and their limitless capabilities. To me, computers represent humanity's most significant invention, providing us with unprecedented accuracy in calculations, predictions, and information processing. I feel incredibly fortunate to have been born in an era where any question can be answered with a simple keystroke, opening up a world of endless possibilities and discovery.</p>
          </div>
        </div>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
