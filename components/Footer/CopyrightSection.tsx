import React from 'react'

const CopyrightSection = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex justify-around items-center text-xs border-t border-white pt-4 mt-6">
      {/* Copyright */}
      <div className="text-center">
        <span>© {currentYear} Global Grads</span>
      </div>
      {/* Powered By */}
      <div className="text-center">
        <span>Powered by</span>
        <a
          href="https://www.octtoppus.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-white font-bold hover:text-yellow-400 transition-all"
        >
          Octtoppus
        </a>
      </div>
    </div>
  )
}

export default CopyrightSection
