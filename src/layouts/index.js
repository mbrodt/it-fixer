import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Footer from "../components/Footer"
import "./index.css"
import "./custom.css"

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="IT-Fixer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <html lang="da" />
    </Helmet>
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
