import React from "react"
import Link from "gatsby-link"
import cautiousDog from "../images/cautious-dog.svg"

const Thanks = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
        Tak for din besked! Vi vender tilbage snarest muligt for at aftale næste
        skridt.
      </p>
    </div>

    <div className="w-2/3 md:w-1/3">
      <img src={cautiousDog} />
    </div>
  </div>
)

export default Thanks
