import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from "../components/layout"
import { useEffect } from 'react';
import Seo from "../components/seo"

const MarkdownPost = ({ markdownContent, pageTitle, pageHeading }) => {
    <Layout>
        <Seo title={pageTitle || "a_game"} />
        return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
    </Layout>
};

export const Head = () => <Seo title="post" />

export default MarkdownPost;