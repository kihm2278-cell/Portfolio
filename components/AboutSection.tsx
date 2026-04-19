'use client'

export default function AboutSection() {
  const skills = [
    'Fusion 360 CAD',
    'Finite Element Analysis (FEA)',
    'MATLAB Programming',
    'Thermal Analysis',
    'Materials Testing',
    'Machining & Fabrication',
    'LabVIEW',
    'Manufacturing Design',
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I am a Mechanical Engineering student at Purdue University with a strong interest in energy systems, thermal sciences, and practical engineering design. My experience spans hands-on manufacturing, experimental testing, and analytical modeling, with a focus on solving real-world engineering problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Currently leading manufacturing efforts for the Hydropower Collegiate Competition, 
              I have worked on the design and fabrication of a mechanized trash rack system, developed bills of materials, and analyzed non-powered dams to evaluate their potential for energy generation. This experience strengthened my ability to connect engineering theory with real-world constraints and system-level thinking.
              In addition, my research at the Birck Nanotechnology Center has involved developing and testing paper-based sensors for pressure and temperature applications. I have explored low-cost, scalable solutions and evaluated their performance against traditional systems, while also mentoring students in hands-on engineering workshops.
              My technical background includes CAD design, finite element analysis, and MATLAB programming for data analysis and modeling. I am particularly interested in applying these skills to energy, sustainability, and advanced manufacturing challenges.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Let&apos;s Work Together
            </a>
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ✓ {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
