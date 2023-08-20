import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Seo from '../components/seo';

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
        <div className="content_container">
            <div className="content_block">
                <p>If you have inquiries, business or otherwise reach out below</p>
                <h3>Contact Methods</h3>
                <ul>
                    <li><a href="mailto:drbailey117@protonmail.com">Email</a></li>
                    <li><a href="https://discord.gg/whMVueTJUj">Discord</a></li>
                </ul>
            </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ContactPage;
