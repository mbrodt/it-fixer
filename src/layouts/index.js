import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import "./index.css"

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="IT-Fixer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    {/* <Header /> */}
    <Hero />
    <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
