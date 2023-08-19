import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
        <div class="centertext">
            <h3 class="title">
                404 Error
            </h3>
            <p class="subtitle">
                Sorry, the desired page was not found
            </p>
        </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
