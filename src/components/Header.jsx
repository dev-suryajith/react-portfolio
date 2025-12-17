import React from "react";

function Header() {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-white/10 md:py-10 px-6 md:px-20 py-5 flex items-center justify-between text-white">
      {/* Logo / Name */}
      <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight text-[#c4737c]">
        Suryajith
      </a>

      {/* Nav Links */}
      <div className="flex gap-8 text-sm md:text-base">
        {["About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#c4737c] after:transition-all after:duration-300 hover:after:w-full">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Header;
