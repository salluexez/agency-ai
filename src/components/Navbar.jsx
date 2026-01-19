import { useState } from 'react';
import assets from '../assets/assets';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLight, CiDark } from 'react-icons/ci';
import useThemeStore from '../store/ThemeStore';
import Menu from './menu';

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-iosDarkElevated/60 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4">

        {/* Mobile */}
        <img
          src={isDark ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          className="w-[25px] cursor-pointer block md:hidden"
          onClick={() => setOpenMenu(true)}
        />

        {/* Logo */}
        <img
          src={isDark ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40 cursor-pointer select-none"
          alt="logo"
        />

        {/* Links */}
        <div className="hidden md:block">
          <ul className="flex gap-8 font-medium text-gray-700 dark:text-gray-300 tracking-tight">
            {["Home","Services","Our Work","Testimonials"].map(item => (
              <li key={item} className="hover:text-iosBlueDark cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {isDark ? <CiLight /> : <CiDark />}
          </button>

          <button
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium bg-iosBlue hover:bg-iosBlueDark shadow-ios dark:shadow-iosDark transition"
          >
            Connect
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Divider only under content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 xl:px-40">
        <div className="border-b border-black/5 dark:border-white/10"></div>
      </div>

      {openMenu && <Menu isOpen={openMenu} onClose={() => setOpenMenu(false)} />}
    </nav>
  );
};

export default Navbar;
