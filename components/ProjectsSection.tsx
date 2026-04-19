'use client'

import { useState } from 'react'

interface Report {
  name: string
  url: string
}

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  linkLabel?: string
  reports?: Report[]
  images?: string[]
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Hydropower Collegiate Competition',
      description: 'As part of the DOE\'s Hydropower Collegiate Competition, contributed to the siting and design of a hydropower retrofit for a non-powered dam. Through a weighted multi-criteria analysis of 11 candidate sites, the team selected Green River Lock and Dam 1 in Henderson County, Kentucky, chosen for its consistent flow rate (avg. 31,242 cfs), 5.59 MW generation potential, and critical need for debris management.\n\nThe core design deliverable was a modular, motorized louvered trash rack system — an improvement over conventional static designs. The system features adjustable aluminum louvers actuated by a worm-drive motor, enabling autonomous debris interception, fish guidance, and sediment management. Structural integrity was validated through FEA (ANSYS) and CFD (SolidWorks), and a MATLAB Simulink control system with PD feedback and finite state machine logic was developed for automated operation. An acoustic fish guidance system was also proposed to protect native species.',
      technologies: ['site feasibility analysis', 'CAD/mechanical design', 'FEA & CFD simulation', 'control systems (MATLAB Simulink)', 'technical writing', 'interdisciplinary teamwork'],
      link: '/reports/HCCFinalReport.pdf',
      linkLabel: 'View Report',
      images: [
        '/reports/hcc_photos/hcc1.jpeg',
        '/reports/hcc_photos/hcc2.jpeg',
        '/reports/hcc_photos/hcc3.jpeg',
        '/reports/hcc_photos/hcc4.jpeg',
        '/reports/hcc_photos/hcc5.jpeg',
        '/reports/hcc_photos/hcc6.jpeg',
        '/reports/hcc_photos/hcc7.jpeg',
        '/reports/hcc_photos/hcc8.jpeg',
        '/reports/hcc_photos/hcc9.jpeg',
        '/reports/hcc_photos/hcc10.jpeg',
      ]
    },
    {
      id: 2,
      title: 'Battery Cooling Via Liquid Convection',
      description: 'Designed and built a lab-scale experimental system to evaluate liquid coolant performance for EV battery thermal management. A heated aluminum plate simulated a battery module, cooled by a temperature-controlled external flow using a Cole-Parmer refrigerated circulating bath. Tested pure water and brine solutions (5.7%, 10.7%, and 19.4% salt concentration) across two initial temperatures (50°C and 80°C), with and without an added aluminum plate to quantify thermal and contact resistance.\n\nAnalyzed transient thermocouple data collected via LabVIEW to extract three key parameters: convective heat transfer coefficient (h), total thermal resistance (R_th), and cooling time. Key findings included that pure water outperformed all brine solutions, achieving h values up to 85.24 W/m²K — roughly 69% higher than the most concentrated brine tested. Adding an intermediate aluminum plate reduced cooling effectiveness by over 50%, underscoring the importance of minimizing interfacial resistance in thermal system design.',
      technologies: ['experimental design', 'heat transfer analysis', 'data acquisition (LabVIEW)', 'MATLAB', 'technical writing','engineering teamwork'],
      link: 'reports/merged_ME315_Final_Project_Report_Team_30.pdf',
      linkLabel: 'View Report',
      images: [
        '/reports/hm_photos/hm1.jpeg',
        '/reports/hm_photos/hm2.jpeg',
        '/reports/hm_photos/hm3.jpeg',
        '/reports/hm_photos/hm4.jpeg',
        '/reports/hm_photos/hm5.jpeg',
        '/reports/hm_photos/hm6.jpeg',
        '/reports/hm_photos/hm7.jpeg',
        '/reports/hm_photos/hm8.jpeg',
        '/reports/hm_photos/hm9.jpeg',
      ],
    },
    {
      id: 3,
      title: 'E-Bike Battery Pack',
      description: 'This project details the technical design and configuration of a custom lithium-ion battery pack for a 350W e-bike conversion. Using Samsung 50E 21700 cells, the pack was engineered in a 7S3P configuration to achieve a nominal voltage of 25.2V (standardized as 24V) and a total capacity of 15Ah. To ensure safety and performance, the system includes a Battery Management System (BMS) rated at 23A, which incorporates a 15% safety margin above the motor\'s maximum 20A current draw to protect against overcurrent and overheating.\n\nThe final 360Wh battery pack is optimized for a pedal-assist mode of propulsion, which was selected for its energy efficiency and cost-effectiveness. Based on average e-bike energy consumption, this configuration is estimated to provide a riding range of 18 to 36 miles on a single charge.\n\nThe report emphasizes the importance of accounting for system inefficiencies, such as heat loss and friction, to ensure the battery pack remains a reliable and sustainable primary energy source for the vehicle.',
      technologies: ['battery system design', 'electrical engineering fundamentals', 'component selection and sizing', 'safety margin analysis', 'energy efficiency optimization', 'technical report writing'],
      link: 'reports/ebike_conversion__1.pdf',
      linkLabel: 'View Report',
      images: [
        '/reports/ebike_photos/ebike_photo1.jpeg',
        '/reports/ebike_photos/ebike_photo2.jpeg',
        '/reports/ebike_photos/ebike_photo3.jpeg',
        '/reports/ebike_photos/ebike_photo4.jpeg',
        '/reports/ebike_photos/ebike_photo5.jpeg',
        '/reports/ebike_photos/ebike_photo6.jpeg',
        '/reports/ebike_photos/ebike_photo7.jpeg',
        '/reports/ebike_photos/ebike_photo8.jpeg',
        '/reports/ebike_photos/ebike_photo9.jpeg',
      ],
    },
    {
      id: 4,
      title: 'Mechanics of Materials Study',
      description: 'This project involved a comprehensive series of laboratory experiments focused on the mechanical behavior of materials, emphasizing the relationship between microstructural properties and macroscopic performance. Through hands-on testing and data analysis, the course explored fundamental mechanics concepts including stress-strain relationships , failure theories , and the impact of heat treatments on material strength and ductility.Key activities included conducting tensile tests to determine Young’s modulus and yield strength , performing Rockwell hardness and Charpy impact tests to evaluate toughness , and utilizing strain gauges for experimental stress analysis on beam bending and pressure vessels. Advanced topics such as fatigue life estimation and the study of stress concentrations  were also addressed. This work demonstrated proficiency in technical data acquisition, the application of ASTM standards, and professional engineering communication through detailed reporting of experimental results and theoretical comparisons.',
      technologies: ['Materials Science', 'Testing Standards', 'Data Analysis', 'Documentation'],
      reports: [
        { name: 'Tensile Testing', url: '/reports/ME32301LabMemo1__7_.pdf' },
        { name: 'Lab Memo 2', url: '/reports/ME32301LabMemo2.pdf' },
        { name: 'Torsion & Bending Tests', url: '/reports/ME32301LabMemo3_4__2_.pdf' },
        { name: 'Spring Testing', url: '/reports/ME32301LabMemo5.pdf' },
        { name: 'Stress Concentration', url: '/reports/ME32301LabMemo6__1_.pdf' },
        { name: 'Beam Deflection', url: '/reports/ME32301LabMemo7.pdf' },
        { name: '3D Printing Analysis', url: '/reports/32301_LAB8.pdf' },
        { name: 'Fatigue & Final Analysis', url: '/reports/ME32301LabMemo9__1_.pdf' },
        { name: 'Summary Report', url: '/reports/ME32301LabMemo10__1_.pdf' },
      ],
      images: [
        '/reports/mom_photos/mom1.jpeg',
        '/reports/mom_photos/mom2.jpeg',
        '/reports/mom_photos/mom3.jpeg',
        '/reports/mom_photos/mom4.jpeg',
      ],
    },

  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedReports, setSelectedReports] = useState<{ [key: number]: number }>({4: 0})

  const openImage = (image: string, projectId: number, index: number) => {
    setSelectedImage(image)
    setSelectedProjectId(projectId)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedProjectId(null)
    setCurrentImageIndex(0)
  }

  const goToNextImage = () => {
    if (selectedProjectId !== null) {
      const project = projects.find(p => p.id === selectedProjectId)
      if (project && project.images) {
        const nextIndex = (currentImageIndex + 1) % project.images.length
        setCurrentImageIndex(nextIndex)
        setSelectedImage(project.images[nextIndex])
      }
    }
  }

  const goToPreviousImage = () => {
    if (selectedProjectId !== null) {
      const project = projects.find(p => p.id === selectedProjectId)
      if (project && project.images) {
        const prevIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
        setCurrentImageIndex(prevIndex)
        setSelectedImage(project.images[prevIndex])
      }
    }
  }

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="text-gray-700 dark:text-gray-300 mb-4 space-y-4">
                {project.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-2">
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${project.title} - Photo ${imgIndex + 1}`}
                        className="w-full h-24 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                        onClick={() => openImage(image, project.id, imgIndex)}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                {project.reports && project.reports.length > 0 ? (
                  <>
                    <select
                      value={selectedReports[project.id] || 0}
                      onChange={(e) => setSelectedReports({...selectedReports, [project.id]: parseInt(e.target.value)})}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                    >
                      {project.reports.map((report, idx) => (
                        <option key={idx} value={idx}>
                          {report.name}
                        </option>
                      ))}
                    </select>
                    <a
                      href={project.reports[selectedReports[project.id] || 0].url}
                      className="btn-primary text-sm"
                    >
                      View Selected Report
                    </a>
                  </>
                ) : (
                  <a
                    href={project.link}
                    className="btn-primary text-sm"
                  >
                    {project.linkLabel || 'View Project'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image Modal */}
    {selectedImage && (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={closeModal}
      >
        <div className="relative max-w-4xl max-h-screen flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-screen max-w-full object-contain rounded-lg"
            />
          </div>

          {/* Navigation Buttons */}
          {selectedProjectId !== null && projects.find(p => p.id === selectedProjectId)?.images && projects.find(p => p.id === selectedProjectId)!.images!.length > 1 && (
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {projects.find(p => p.id === selectedProjectId)?.images?.length || 0}
              </div>
            </>
          )}
        </div>
      </div>
    )}
    </>
  )
}
