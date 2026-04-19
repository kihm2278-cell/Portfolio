'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Coursework', id: 'coursework' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600">Ibrahim Hassan</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume"
            className="hover:text-blue-600 transition-colors duration-200 font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume"
            className="block w-full text-left py-2 hover:text-blue-600 font-semibold"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
