import React from 'react';
import assets from '../assets/assets';

export default function Help() {
  return (
    <section id="services" className="py-32 px-6 flex flex-col items-center">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
          How can we help?
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          From strategy to execution, we craft digital solutions that move your business forward.
        </p>
      </div>

      {/* Services Grid */}
      <div className="
        grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full
      ">

        {/* Card */}
        {[
          { icon: assets.ads_icon, title: "Advertising", text: "We turn bold ideas into powerful digital solutions that connect and engage audiences." },
          { icon: assets.marketing_icon, title: "Content marketing", text: "We create compelling content that drives visibility, trust, and performance." },
          { icon: assets.content_icon, title: "Content writing", text: "High-quality writing that communicates clearly and converts effectively." },
          { icon: assets.social_icon, title: "Social media", text: "We build brands across platforms with strategic storytelling and engagement." },
        ].map((item, i) => (
          <div
            key={i}
            className="
              group relative p-8 rounded-ios cursor-pointer flex gap-6 items-start
              backdrop-blur-xl bg-iosGlassLight dark:bg-iosGlassDark
              border border-white/40 dark:border-white/10
              shadow-ios dark:shadow-iosDark
              transition-all duration-300 hover:scale-[1.01] hover:border-iosBlue/50
            "
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-md flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-left text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
