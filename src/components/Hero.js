import React from "react"
import HeroPattern from "../images/trianglify.svg"
import Logo from "../images/logo.svg"
// import

const Hero = () => {
  return (
    <div
      className="bg-grey-darkest bg-center max-w-screen-lg"
      style={{
        backgroundImage: "url(" + HeroPattern + ")",
        backgroundBlendMode: "multiply"
      }}
    >
      <div className="container w-4/5 lg:max-w-lg mx-auto py-24 sm:py-32">
        <img className="mb-2" src={Logo} alt="" />
        <h1 className="text-white font-semibold text-5xl sm:text-6xl mb-6 leading-none opacity-90">
          Driller teknikken?
        </h1>
        <p className="text-grey-light text-xl sm:text-2xl">
          Hos IT-Fixer <strong className="text-indigo">finder & løser</strong>{" "}
          vi alle problemer der måtte være med din
          <strong className="text-indigo"> computer, tablet</strong> eller{" "}
          <strong className="text-indigo">smartphone.</strong>
        </p>
        <div className="mt-6 flex items-center flex-col sm:flex-row">
        <a href="#contact" className="w-full sm:w-48 mb-4 sm:mb-0   mr-0 sm:mr-4">
          <button className="btn bg-indigo hover:bg-indigo-dark w-full ">
            Aftal nærmere
          </button>
          </a>
          <a href="#services" className="w-full sm:w-48 ">
            <button className="btn border border-indigo w-full hover:bg-indigo ">
              Hvad kan i tilbyde?
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

/* trianglify */

// position: absolute;
// width: 1920px;
// height: 581px;
// left: 0px;
// top: 0px;

// background: url(trianglify.png);
// background-blend-mode: darken;
