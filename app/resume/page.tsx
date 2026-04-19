'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Ibrahim Hassan</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              West Lafayette, IN 47906
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              +1(973) 380-1316 | kihm2278@gmail.com
            </p>
          </div>

          <div className="mb-8 text-center">
            <a
              href="/reports/resume.pdf"
              download
              className="inline-block btn-primary"
            >
              Download PDF Resume
            </a>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">EDUCATION</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Purdue University, West Lafayette</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                Bachelor's degree in Mechanical Engineering
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Anticipated Graduation: MAY 2026 | GPA: 3.23
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">WORK EXPERIENCE</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Manufacturing Lead — Hydropower Collegiate Competition</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">(Ongoing)</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Machined and fabricated part components for mechanized dam trash rack system using CAD drawings while optimizing for manufacturability, efficiency, and design performance.</li>
                  <li>• Developed a comprehensive Bill of Materials (BOM) via sourcing and cost evaluation of components.</li>
                  <li>• Conducted detailed analysis of non-powered dams using the NID database; performed calculations to verify that potential power generation met the 1–10 MW target range.</li>
                  <li>• Engaged with dam operators to gain industry insights, discussing site-specific challenges, operational constraints, and potential engineering solutions.</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Undergraduate Researcher — Birck Nanotechnology Center</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Implemented paper electronics techniques to the design, creation, and testing of paper-based pressure and temperature sensors.</li>
                  <li>• Developed documentation comparing performance criteria of quadruped payloads and paper-based alternatives.</li>
                  <li>• Explored various ways of accessorizing paper-based sensors on quadrupeds for applications in plant maintenance, precision agriculture, and rescue missions.</li>
                  <li>• Instructed high school students in a two-week paper electronics and semiconductor workshop.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">ENGINEERING PROJECTS</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Materials Testing and Analysis — Mechanics of Materials Study</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Performed tensile, torsion, bending, and spring tests with Instron UTM to determine material properties.</li>
                  <li>• Applied Finite Element Analysis (FEA) and experimental methods to study stress concentrations, beam deflections, and 3D printed structures under load.</li>
                  <li>• Developed MATLAB programs for regression, optimization, and automated plotting of experimental and simulation data.</li>
                  <li>• Validated results with theoretical models and statistical confidence intervals, accounting for error sources.</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Surface Cooling via Liquid Convection — Heat & Mass Transfer Final Project</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Designed and built a lab-scale thermal management system simulating an EV battery module using a heated aluminum plate, controlled liquid-coolant flow, and thermocouples for data acquisition in LabVIEW.</li>
                  <li>• Calculated key thermal performance metrics such as convective heat transfer coefficient (h), total thermal resistance (Rth), and cooling time.</li>
                  <li>• Determined that pure water provided the highest heat-transfer effectiveness with an h of 85.24 W/m²K.</li>
                  <li>• Communicated findings through a comprehensive technical report with data analysis, MATLAB visualizations, and engineering recommendations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">SKILLS</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    CAD & Design:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Autodesk Fusion 360, Siemens NX, Finite Element Analysis (FEA)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Programming:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    MATLAB
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Presentation:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Word, Excel, PowerPoint, Overleaf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
