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
    <div className="content_container">
        <div className="lalligned sub_content_block"> {/* Moved this <div> outside the previous one */}
          <p>I like making things and playing games; I have a lot of niche interests many of which I will display with posts on this blog.</p>
        </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
