import React from 'react'

const Footer = () => (
  <div className="bg-indigo-darker">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Copyright &copy; IT-Fixer {new Date().getFullYear()} (CVR: 40141898)
      </p>
      <p className="text-white">
        Lavet af{' '}
        <a
          href="https://madsbrodt.com/"
          className="no-underline text-white font-bold"
        >
          Mads Brodt
        </a>
      </p>
    </div>
  </div>
)

export default Footer
