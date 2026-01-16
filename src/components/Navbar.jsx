import { useState } from 'react';
import assets from '../assets/assets';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import useThemeStore from '../store/ThemeStore';
import Menu from './menu';


const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <nav className="w-full sticky top-0 z-50 transition-colors duration-300 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white backdrop-blur-xl">

      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4'>

        {/* Logo Toggle */}
        <img
          src={isDark ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          className="w-[25px] cursor-pointer block md:hidden"
          onClick={()=>setOpenMenu(true)}
        />

        <img
          src={isDark ? assets.logo_dark : assets.logo}
          className='w-32 sm:w-40 cursor-pointer'
          alt='logo'
        />

        {/* Navigation Links */}
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

          <button className='hidden sm:flex items-center  justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full transition-all gap-2 group'>
            Connect
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;