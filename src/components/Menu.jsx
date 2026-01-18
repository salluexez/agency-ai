import { FaArrowRightLong } from "react-icons/fa6";

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scrollToContact = () => {
    onClose();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col items-center justify-center gap-12 md:hidden">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-gray-700 dark:text-gray-300"
      >
        ✕
      </button>

      {/* Menu Links */}
      <ul className="flex flex-col gap-8 font-medium text-xl text-gray-600 dark:text-gray-300 text-center">
        <li className="hover:text-blue-500 transition cursor-pointer">Home</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Services</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Our Work</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Testimonials</li>
      </ul>

      {/* Connect Button */}
      <button
        onClick={scrollToContact}
        className="flex items-center justify-center bg-blue-700 hover:bg-blue-800
                   text-white px-8 py-3 rounded-full transition-all gap-2 group"
      >
        Connect
        <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Menu;
