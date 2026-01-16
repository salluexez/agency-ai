import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 rounded-full
                 bg-blue-600 pointer-events-none
                 -translate-x-1/2 -translate-y-1/2
                 transition-transform duration-75"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    />
  );
};

export default CustomCursor;
