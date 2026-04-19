'use client'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/background_pic.png)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-200">
              <img 
                src="/profile_pic.JPG" 
                alt="Ibrahim Hassan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Ibrahim Hassan
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Mechanical Engineering 
               </p>
            <p className="text-lg mb-8 max-w-2xl drop-shadow-md md:max-w-none">
              I am currently seeking opportunities in the manufacturing, power generation, and energy storage industries, and I am also open to engineering design roles. I am particularly interested in positions where I can apply my experience in hands-on fabrication, analysis, and system-level problem solving to real-world engineering challenges.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Get in Touch
              </button>
              <a
                href="/resume"
                className="btn-secondary"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
