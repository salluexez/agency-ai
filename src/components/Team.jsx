import React from 'react'
import { teamData } from '../assets/assets'

export default function Team() {
  return (
    <section id="testimonials" className="py-28 px-6 flex justify-center">
      
      <div className="
        max-w-7xl w-full
        p-12 rounded-ios
        backdrop-blur-xl
        bg-iosGlassLight dark:bg-iosGlassDark
        border border-white/40 dark:border-white/10
        shadow-ios dark:shadow-iosDark
        transition-all
      ">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
            Meet the team
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            A passionate team of digital experts dedicated to your brand's success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4 p-5 rounded-lg
                bg-white/60 dark:bg-white/10
                border border-white/40 dark:border-white/10
                backdrop-blur-md
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                hover:shadow-[0_4px_18px_rgba(0,0,0,0.12)]
                transition-all duration-200
                active:scale-[.97]
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
