import React from 'react'
import { teamData } from '../assets/assets'

export default function Team() {
    return (
       <section className="mt-28">
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-20">
    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
      Meet the team
    </h2>
    <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
      A passionate team of digital experts dedicated to your
      <p> brand's success.</p>
    </p>
  </div>

  {/* Team Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {teamData.map((member, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl px-6 py-5
                   shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700"
      >
        {/* Avatar */}
        <img
          src={member.image}
          alt={member.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Info */}
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
</section>

    )
}
