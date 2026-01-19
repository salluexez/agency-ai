import React from 'react'
import assets from '../assets/assets'

export default function LatestWork() {
  return (
    <section id="work" className="py-32 px-6 flex flex-col items-center">
      
      {/* Heading Glass Panel */}
      <div className="
        max-w-7xl w-full p-12 mb-16
        rounded-ios backdrop-blur-xl
        bg-iosGlassLight dark:bg-iosGlassDark
        border border-white/40 dark:border-white/10
        shadow-ios dark:shadow-iosDark
        text-center transition-all
      ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
          Our latest work
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Browse our portfolio of innovative digital projects that showcase
          creativity, performance, and results.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Card 1 */}
        <div className="rounded-ios p-5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <img src={assets.work_mobile_app} className="rounded-xl w-full mb-4" alt="" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mobile app marketing</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">We turn bold ideas into powerful digital solutions that connect...</p>
        </div>

        {/* Card 2 */}
        <div className="rounded-ios p-5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <img src={assets.work_dashboard_management} className="rounded-xl w-full mb-4" alt="" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard management</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">We turn bold ideas into powerful digital solutions that connect...</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-ios p-5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <img src={assets.work_fitness_app} className="rounded-xl w-full mb-4" alt="" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fitness app promotion</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">We turn bold ideas into powerful digital solutions that connect...</p>
        </div>

      </div>
    </section>
  )
}
