/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      key="font-awesome-css"
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />,
  ]);
  
  setHtmlAttributes({ lang: `en` })
}
