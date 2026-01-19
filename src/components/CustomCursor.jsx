import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        className="pointer-events-none fixed z-[9999] w-3 h-3 bg-[#4A3AFF] rounded-full transition-transform duration-75"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
        }}
      />

      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9998] w-10 h-10 rounded-full border-[2px] border-[#4A3AFF] opacity-85 transition-transform duration-150"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      />
    </>
  );
}
