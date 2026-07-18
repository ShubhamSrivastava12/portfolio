import { useState, useEffect } from "react";
import { useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
  <nav className="relative flex items-center rounded-2xl bg-slate-200 border border-slate-300 px-8 py-4 shadow-[0_6px_20px_rgba(15,23,42,0.08)] text-primary">

    {/* Logo */}
    <img
  src='/namelogo.png'
  alt="Name Logo"
  style={{ transform: `scale(${scale})` }}
  className="w-16 h-16 object-contain transition-transform duration-75"
/>

    {/* Center Menu (Desktop) */}
    <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 xl:gap-28 text-sm font-medium">

  <li>
    <a
      href="#home"
      className="cursor-pointer hover:text-secondary transition"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="cursor-pointer hover:text-secondary transition"
    >
      About Me
    </a>
  </li>

  <li>
    <a
      href="#projects"
      className="cursor-pointer hover:text-secondary transition"
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="cursor-pointer hover:text-secondary transition"
    >
      Contact
    </a>
  </li>

  {/* Dropdown */}
  <li className="relative group">

    <div className="flex items-center gap-1 cursor-pointer hover:text-secondary transition">
      More
      <ChevronDown size={16} strokeWidth={2.5} />
    </div>

    <div className="absolute left-0 top-full w-full h-[24px]"></div>

    <div className="absolute left-1/2 top-10 hidden w-64 -translate-x-1/2 rounded-xl border border-primary/70 bg-primary text-slate-300 p-4 shadow-2xl group-hover:block">

      {/* Projects */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
        Projects
      </p>

      <a
        href="#project1"
        className="block rounded px-2 py-2 text-gray-400 hover:bg-primary/80 hover:text-secondary"
      >
        Project 1
      </a>

      <a
        href="#project2"
        className="mb-4 block rounded px-2 py-2 text-gray-400 hover:bg-primary/80 hover:text-secondary"
      >
        Project 2
      </a>

      <a
        href="#work-experience"
        className="mb-2 block rounded px-2 py-2 text-sm font-medium hover:bg-primary/80 hover:text-secondary"
      >
        Work Experience
      </a>

      <a
        href="#skills"
        className="block rounded px-2 py-2 text-sm font-medium hover:bg-primary/80 hover:text-secondary"
      >
        Skills
      </a>

    </div>

  </li>

</ul>

    {/* Mobile Menu Button */}
    <div className="ml-auto lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-secondary focus:outline-none">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </nav>

  {/* Mobile Menu Dropdown */}
  {isOpen && (
    <div className="lg:hidden mt-2 rounded-2xl bg-slate-200 border border-slate-300 shadow-xl overflow-hidden">
      <ul className="flex flex-col text-sm font-medium text-primary">
        <li>
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 hover:bg-slate-300 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 border-t border-slate-300 hover:bg-slate-300 transition"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 border-t border-slate-300 hover:bg-slate-300 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 border-t border-slate-300 hover:bg-slate-300 transition"
          >
            Contact
          </a>
        </li>
        <li className="px-6 py-4 border-t border-slate-300">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            More Links
          </p>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-300">
            <a
              href="#project1"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary"
            >
              Project 1
            </a>
            <a
              href="#project2"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary"
            >
              Project 2
            </a>
            <a
              href="#work-experience"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary"
            >
              Skills
            </a>
          </div>
        </li>
      </ul>
    </div>
  )}
</header>
  );
}