import { FaArrowRightLong } from "react-icons/fa6";

const Menu = ({ isOpen, onClose, scrollToSection }) => {
  if (!isOpen) return null;

  const go = (id) => {
    onClose();
    setTimeout(() => scrollToSection(id), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:hidden">
      <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative w-full bg-white dark:bg-iosDarkElevated rounded-t-3xl p-10 flex flex-col items-center gap-10 animate-slideUp">
        <div className="w-12 h-1.5 rounded-full bg-black/10 dark:bg-white/20 mb-2"></div>

        <ul className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300 text-center font-medium">
          <li onClick={() => go("home")} className="cursor-pointer">Home</li>
          <li onClick={() => go("services")} className="cursor-pointer">Services</li>
          <li onClick={() => go("work")} className="cursor-pointer">Our Work</li>
          <li onClick={() => go("testimonials")} className="cursor-pointer">Testimonials</li>
        </ul>

        <button onClick={() => go("contact")} className="flex items-center gap-2 px-8 py-3 rounded-full bg-iosBlue text-white shadow-lg">
          Connect <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Menu;
