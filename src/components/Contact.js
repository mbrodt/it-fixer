import React from "react"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      call: false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleCheck = () => {
    this.setState({
      call: !this.state.call
    })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        navigateTo("/thanks/")
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <section className="text-center py-16 bg-white">
        <form
          className="w-5/6 sm:w-3/4 md:w-1/2 lg:w-2/5 shadow-lg mx-auto pb-8 "
          name="contact"
          method="POST"
          action="/about/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-3xl pt-16 mb-8">Kontakt os</h2>
          <input
            className="input-field mb-4 text-base sm:text-xl"
            id="name"
            name="name"
            type="text"
            placeholder="Navn"
            onChange={this.handleChange}
          />
          <input
            className="input-field mb-4 text-base sm:text-xl"
            id="details"
            name="details"
            type="text"
            placeholder="Email / Tlf"
            onChange={this.handleChange}
          />
          <textarea
            className="input-field mb-4 text-base sm:text-xl"
            id="message"
            name="message"
            type="textarea"
            placeholder="Besked"
            onChange={this.handleChange}
          />
          <div className="mb-6">
            <label className="">
              <input
                className="mr-2 leading-tight text-base sm:text-xl"
                id="call"
                name="call"
                type="checkbox"
                onChange={this.toggleCheck}
                checked={this.state.call}
              />
              <span className="text-grey-darkest font-bold text-basesm:text-xl">
                Jeg vil gerne ringes op
              </span>
            </label>
          </div>
          <button
            className="shadow bg-indigo hover:bg-indigo-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-2xl mb-4"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    )
  }
}

export default Contact
