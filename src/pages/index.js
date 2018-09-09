import React from "react"
import Link from "gatsby-link"
import Intro from "../components/Intro"
import Services from "../components/Services"

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
        <Intro />
        <Services />
      </div>
    )
  }
}

// export default IndexPage
