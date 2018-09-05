import React from "react"
import Link from "gatsby-link"
import Chilling from "../images/chilling.svg"

const IndexPage = () => (
  <div className="text-center ">
    <h2 className="text-3xl mt-16 mb-4">
      IT skal bare virke. Det hjælper vi dig med.
    </h2>
    <div className="container flex">
      <p className="text-left leading-loose w-3/5 mt-8">
        Alle bruger vi dagligt både computer, smartphones og tablets. Vi bruger
        dem til skole, arbejde, fornøjelse, træning, økonomi og socialt samvær.
        Derfor er det også vigtigt, at teknikken bare virker. Gennem mange års
        erfaring med IT har vi hos IT-Fixer opbygget en viden og forståelse for
        hvordan IT fungerer - og hvordan vi kan få det til det, når det ikke
        gør.
        {/* Så glem bøvlet, når dit Word dokument ikke vil åbnes,
        når din computer er blevet langsom eller du ikke kan hitte rundt i den
        nye iPhone. */}
      </p>
      <img src={Chilling} className="block mx-auto w-2/5 px-4" />
    </div>
  </div>
)

export default IndexPage
