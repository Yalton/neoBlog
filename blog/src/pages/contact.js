import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const ContactPage = ({ pageTitle, pageHeading }) => (
    <Layout>
        <Seo title={pageTitle || "Contact"} />
        <div id="heading-div" className="centered">
            <div className="title_header">
                <div className="page_title">
                    <h2> {pageHeading || "Contact"}
                    </h2>
                </div>
            </div>
        </div>
        <section className="sec_ctr">
            <div className="content_container">
                <div className="content_block">
                    <div className="rfloat sub_content_block">
                        <StaticImage src="../images/maybe.JPG" alt="Description" />
                        <div class="lalligned sub_content_block">
                            <h2 class="work-feature-block-header">Wanna get ahold of me?</h2>
                            <p>Do you have inquiries about my tutorials or perhaps a potential job opportunity? Feel free to get in touch
                                using any of the contact options provided below. Additionally, you may leave a comment on any of my blog posts
                                with your email address included, and I will promptly reach out to initiate a conversation.</p>
                            <h3>Contact Methods</h3>
                            <ul>

                                <li><a href="mailto:drbailey117@protonmail.com">Email</a></li>
                                <li><a href="https://discord.gg/whMVueTJUj">Discord</a></li>
                            </ul>
                        </div>

                        <br />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default ContactPage;
