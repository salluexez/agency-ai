import React from 'react'
import assets from '../assets/assets'

export default function LatestWork() {
  return (
    <div>
         <section className="py-32 px-6 ">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
            Our latest work
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Browse our portfolio of innovative digital projects that showcase
            <p>creativity, performance, and results.</p>
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Card 1 */}
          <div>
            <div className="">
              <img
                src={assets.work_mobile_app}
                alt=""
                className="rounded-xl mx-auto"
              />
            </div>

            <h3 className="mt-6 text-xl text-left font-semibold text-gray-900 dark:text-white">
              Mobile app marketing
            </h3>
            <p className="mt-2 text-left text-gray-500 dark:text-gray-400">
              We turn bold ideas into powerful digital solutions that connect...
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="">
              <img
                src={assets.work_dashboard_management}
                alt=""
                className="rounded-xl mx-auto"
              />
            </div>

            <h3 className="mt-6 text-xl text-left font-semibold text-gray-900 dark:text-white">
              Dashboard management
            </h3>
            <p className="mt-2 text-left text-gray-500 dark:text-gray-400">
              We turn bold ideas into powerful digital solutions that connect...
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="">
              <img
                src={assets.work_fitness_app}
                alt=""
                className="rounded-xl mx-auto"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-left text-gray-900 dark:text-white">
              Fitness app promotion
            </h3>
            <p className="mt-2 text-left text-gray-500 dark:text-gray-400">
              We turn bold ideas into powerful digital solutions that connect...
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
