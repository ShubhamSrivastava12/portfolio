import { useState, useEffect } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scale, setScale] = useState(1.2);

useEffect(() => {
  const handleScroll = () => {
    const newScale = Math.max(0.75, 1.2 - window.scrollY / 500);
    setScale(newScale);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
  <nav className="relative flex items-center rounded-2xl border border-white/20 bg-primary/70 backdrop-blur-xl px-8 py-4 text-white">

    {/* Logo */}
    <img
  src='/navbar.png'
  alt="Logo"
  style={{ transform: `scale(${scale})` }}
  className="w-16 h-16 object-contain transition-transform duration-75"
/>

    {/* Center Menu */}
    <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-28 text-sm font-medium">

      <li className="cursor-pointer hover:text-secondary transition">
        Home
      </li>

      <li className="cursor-pointer hover:text-secondary transition">
        About Me
      </li>

      <li className="cursor-pointer hover:text-secondary transition">
        Projects
      </li>

      <li className="cursor-pointer hover:text-secondary transition">
        Contact
      </li>

      {/* Dropdown */}
      <li className="relative group cursor-pointer">

        <div className="flex items-center gap-1 hover:text-secondary transition">
          More ▼
        </div>

        <div className="absolute left-1/2 top-10 hidden w-64 -translate-x-1/2 rounded-xl border border-primary/70 bg-primary p-4 shadow-2xl group-hover:block">

    {/* Projects */}
    <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
        Projects
    </p>

    <a className="block rounded px-2 py-2 text-gray-400 hover:bg-primary/80 hover:text-secondary">
        Project 1
    </a>

    <a className="mb-4 block rounded px-2 py-2 text-gray-400 hover:bg-primary/80 hover:text-secondary">
        Project 2
    </a>

    {/* Work Experience */}
    <p className="mb-4 rounded px-2 py-2 text-sm font-medium hover:bg-primary/80">
        Work Experience
    </p>

    {/* Skills */}
    <p className="rounded px-2 py-2 text-sm font-medium hover:bg-primary/80">
        Skills
    </p>

</div>

      </li>

    </ul>

  </nav>
</header>
  );
}