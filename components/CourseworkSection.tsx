'use client'

export default function CourseworkSection() {
  const courses = [
    'Thermodynamics',
    'Machine Design',
    'Mechanics of Materials',
    'Power Engineering',
    'Heat and Mass Transfer',
    'Engineering Economics',
    'Fluid Mechanics',
    'Battery Systems',
    'Measurement & Control Systems',
  ]

  return (
    <section id="coursework" className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Coursework</h2>
        
        <div className="max-w-3xl mx-auto animate-slideUp">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Relevant coursework in mechanical engineering, emphasizing thermal sciences, materials, and systems design.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-100 dark:border-gray-500"
              >
                <p className="font-semibold text-gray-900 dark:text-white text-center">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
