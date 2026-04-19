'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'Email', url: 'mailto:kihm2278@gmail.com', icon: '✉️' },
    { name: 'Phone', url: 'tel:+19733801316', icon: '📱' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahim-hassan-purdue/', icon: '💼' },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="kihm2278@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out via email or phone. I&apos;m always interested in 
              discussing engineering projects and opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <p className="font-semibold">{link.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect on {link.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
