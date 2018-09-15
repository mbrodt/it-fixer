import React from "react"

const Services = () => {
  return (
    <section id="services" className="text-center mt-16 pb-16 bg-grey-lighter text-center flex flex-col flex-1 sm:justify-center  mx-auto px-4  w-full sm:items-center">
      <h2 className="text-3xl pt-16 mb-16 px-8">
        Services - Hvad vi kan hjælpe dig med
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full mx-auto">
        <ul className="px-4 w-full sm:w-4/5 md:w-3/5 lg:w-auto list-reset">
          <li className="service-item">Din computer er langsom</li>
          <li className="service-item">Du har fået virus</li>
          <li className="service-item">Dine filer skal backes up</li>
          <li className="service-item">(Gen)installering af Windows</li>
        </ul>
        <ul className="px-4 w-full sm:w-4/5 md:w-3/5 lg:w-auto list-reset">
          <li className="service-item">
            Installation af programmer (Word, Excel osv.)
          </li>
          <li className="service-item">
            Opdatering af smartphone, tablet, computer
          </li>
          <li className="service-item">Overflytning af billeder</li>
          <li className="service-item">
            ... Og meget mere! Kontakt os for detaljer
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services
