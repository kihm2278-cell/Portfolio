'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Ibrahim Hassan</h4>
            <p className="text-gray-400">
              Mechanical Engineering student at Purdue University, specializing in 
              thermal analysis, materials testing, and advanced manufacturing.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:kihm2278@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="tel:+19733801316" className="hover:text-white transition-colors">Phone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ibrahim Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
