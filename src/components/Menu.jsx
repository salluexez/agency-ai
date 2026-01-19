import { FaArrowRightLong } from "react-icons/fa6";

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scrollToContact = () => {
    onClose();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:hidden">

      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* sheet panel */}
      <div
        className="
          relative w-full bg-white dark:bg-[#161618]
          rounded-t-3xl shadow-2xl
          p-10 flex flex-col items-center gap-10
          animate-slideUp
        "
      >

        {/* grab handle */}
        <div className="w-12 h-1.5 rounded-full bg-black/10 dark:bg-white/20 mb-4"></div>

        <ul className="flex flex-col gap-6 font-medium text-gray-700 dark:text-gray-300 text-lg text-center">
          <li onClick={onClose} className="hover:text-[#007AFF] cursor-pointer">Home</li>
          <li onClick={onClose} className="hover:text-[#007AFF] cursor-pointer">Services</li>
          <li onClick={onClose} className="hover:text-[#007AFF] cursor-pointer">Our Work</li>
          <li onClick={onClose} className="hover:text-[#007AFF] cursor-pointer">Testimonials</li>
        </ul>

        <button
          onClick={scrollToContact}
          className="
            flex items-center justify-center gap-2
            px-8 py-3 rounded-full
            bg-[#0A84FF] hover:bg-[#007AFF] text-white
            shadow-lg transition-all
          "
        >
          Connect
          <FaArrowRightLong />
        </button>

        {/* close button */}
        <button
          onClick={onClose}
          className="text-2xl absolute top-4 right-6 text-gray-500 dark:text-gray-300"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Menu;
