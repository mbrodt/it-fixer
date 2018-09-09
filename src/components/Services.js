import React from "react"

const Services = () => {
  return (
    <section className="text-center mt-16 bg-grey-lighter">
      <h2 className="text-3xl pt-16 mb-16">
        Services - Hvad vi kan hjælpe dig med
      </h2>
      <div className="flex justify-around w-1/2 mx-auto">
        <ul className="list-reset">
          <li className="service-item">Din computer er langsom</li>
          <li className="service-item">Du har fået virus</li>
          <li className="service-item">Dine filer skal backes up</li>
          <li className="service-item">(Gen)installering af Windows</li>
        </ul>
        <ul className="list-reset">
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
