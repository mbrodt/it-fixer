import React from "react"
import Chilling from "../images/chilling.svg"

const Intro = () => {
  return (
    <section className="text-center flex flex-col flex-1 sm:justify-center max-w-3xl mx-auto px-4 pt-8  w-full sm:items-center">
      <h2 className="text-3xl mt-4 mb-8  sm:px-8 lg:my-12 ">
        IT skal bare virke. Det hjælper vi dig med.
      </h2>
      <div className="container flex flex-col lg:flex-row ">
        <p className="text-left leading-loose w-full lg:w-3/5 text-lg sm:text-xl md:px-8 xl:px-0 xl:mt-16 ">
          Alle bruger vi dagligt både computer, smartphones og tablets. Vi
          bruger dem til skole, arbejde, fornøjelse, træning, økonomi og socialt
          samvær. Derfor er det også vigtigt, at teknikken bare virker. Gennem
          mange års erfaring med IT har vi hos IT-Fixer opbygget en viden og
          forståelse for hvordan IT fungerer - og hvordan vi kan få det til det,
          når det ikke gør.
          {/* Så glem bøvlet, når dit Word dokument ikke vil åbnes,
        når din computer er blevet langsom eller du ikke kan hitte rundt i den
        nye iPhone. */}
        </p>
        <div className="block mx-auto w-4/5 md:w-3/5 md:mt-16 mt-8 lg:w-2/5 lg:mt-4 px-4">
          <img src={Chilling} />
        </div>
      </div>
    </section>
  )
}

export default Intro
