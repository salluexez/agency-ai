import React from 'react'
import assets from '../assets/assets'

export default function Help() {
  return (
    <div>
        <div className="text-center max-w-2xl mx-auto ">
        <h1 className="text-3xl sm:text-4xl font-semibold mt-40 text-gray-900 dark:text-white">
          How can we help?
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          From strategy to execution, we craft digital solutions that move
          <p>span your business forward.</p>
        </p>
      </div>
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">

          {/* Card 1 - Advertising */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 flex cursor-pointer gap-6 items-start shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent dark:from-blue-900/20 dark:via-purple-900/20 opacity-40" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <img src={assets.ads_icon} alt="Content Marketing" className="w-28 h-28 group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-left text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Advertising
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-300 leading-relaxed">
                We turn bold ideas into powerful digital solutions that connect, engage and...
              </p>
            </div>
          </div>

          {/* Card 2 - Content Marketing (Highlighted) */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 flex cursor-pointer gap-6 items-start shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent dark:from-blue-900/20 dark:via-purple-900/20 opacity-40" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <img src={assets.marketing_icon} alt="Content Marketing" className="w-28 h-28 group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-left text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Content marketing
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-300 leading-relaxed">
                We turn bold ideas into powerful digital solutions that connect, engage and...
              </p>
            </div>
          </div>

          {/* Card 3 - Content Writing */}
           <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 flex cursor-pointer gap-6 items-start shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent dark:from-blue-900/20 dark:via-purple-900/20 opacity-40" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <img src={assets.content_icon} alt="Content Marketing" className="w-28 h-28 group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-left text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Content Writing
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-300 leading-relaxed">
                We turn bold ideas into powerful digital solutions that connect...
              </p>
            </div>
          </div>

          {/* Card 4 - Social Media */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 flex cursor-pointer gap-6 items-start shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent dark:from-blue-900/20 dark:via-purple-900/20 opacity-40" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <img src={assets.social_icon} alt="Content Marketing" className="w-28 h-28 group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-left text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Social Media
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-300 leading-relaxed">
                We turn bold ideas into powerful digital solutions that connect, engage...
              </p>
            </div>
          </div>


        </div>
      </div>
      
    </div>
  )
}
