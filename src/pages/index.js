import React from "react"
import Link from "gatsby-link"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Hero from "../components/Hero"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

// const IndexPage = () => {
//   return (
//     <React.Fragment>
//       <Intro />
//       <Services />
//     </React.Fragment>
//   )
// }

export default class IndexPage extends React.Component {
  render() {
    return (
      // TODO use ReactFragment - doesnt work (probably old react version)
      <div className="">
        <Hero />
        <Intro />
        <Services />
        <Contact />
      </div>
    )
  }
}

// export default IndexPage
