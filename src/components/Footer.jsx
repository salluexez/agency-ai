import { useState } from 'react';
import assets from '../assets/assets';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src={assets.logo} alt="Logo" className="h-8" />
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </p>

            <nav className="flex flex-wrap gap-8 text-gray-700 dark:text-gray-300">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Home</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Services</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Our work</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Testimonial</a>
            </nav>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white
                           px-8 py-3 rounded-lg font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row
                        justify-between items-center gap-6">

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Copyright 2025 © agency.ai - All Right Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#">
              <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </a>
            <a href="#">
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
