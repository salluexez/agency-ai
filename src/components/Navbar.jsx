import { useState } from 'react';
import assets from '../assets/assets';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import useThemeStore from '../store/ThemeStore';

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 transition-colors duration-300 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white backdrop-blur-xl">
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4'>

          {/* Logo */}
          <img
            src={isDark ? assets.logo_dark : assets.logo}
            className='w-32 sm:w-40 cursor-pointer'
            alt='logo'
          />

          {/* Desktop Navigation Links */}
          <div className='hidden md:block'>
            <ul className="flex gap-8 font-medium cursor-pointer text-gray-600 dark:text-gray-300">
              <li className="hover:text-blue-500 transition">Home</li>
              <li className="hover:text-blue-500 transition">Services</li>
              <li className="hover:text-blue-500 transition">Our Work</li>
              <li className="hover:text-blue-500 transition">Testimonials</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleTheme}
              className="text-2xl border rounded-full w-10 h-10 flex items-center justify-center transition-all border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400/10"
            >
              {isDark ? <CiLight /> : <CiDark />}
            </button>

            <button className='hidden sm:flex items-center justify-center w-40 bg-indigo-600 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition-all gap-4 group'>
              Connect 
             <img src={assets.arrow_icon} alt="arrow icon" className='mt-1' />
            </button>

            {/* Mobile Menu Icon */}
            <img
              src={isDark ? assets.menu_icon_dark : assets.menu_icon}
              alt="Menu"
              className="w-[25px] cursor-pointer block md:hidden"
              onClick={() => setOpenMenu(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <img
              src={isDark ? assets.close_icon : assets.close_icon}
              alt="Close"
              className="w-6 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 px-8 text-gray-700 dark:text-gray-300 font-medium">
            <li 
              className="hover:text-blue-500 transition cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </li>
            <li 
              className="hover:text-blue-500 transition cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </li>
            <li 
              className="hover:text-blue-500 transition cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              Our Work
            </li>
            <li 
              className="hover:text-blue-500 transition cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              Testimonials
            </li>
          </ul>

          {/* Connect Button in Mobile Menu */}
          <div className="px-8 mt-8">
            <button 
              className='flex items-center justify-center w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition-all gap-2 group'
              onClick={() => setOpenMenu(false)}
            >
              Connect 
              <img src={assets.arrow_icon} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay/Backdrop */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;