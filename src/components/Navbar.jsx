import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
  <nav className="relative flex items-center rounded-2xl border border-white/20 bg-slate-900/70 backdrop-blur-xl px-8 py-4 text-white">

    {/* Logo */}
    <h1 className="text-2xl font-bold">
      Shubham
    </h1>

    {/* Center Menu */}
    <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-28 text-sm font-medium">

      <li className="cursor-pointer hover:text-cyan-400 transition">
        Home
      </li>

      <li className="cursor-pointer hover:text-cyan-400 transition">
        About Me
      </li>

      <li className="cursor-pointer hover:text-cyan-400 transition">
        Projects
      </li>

      <li className="cursor-pointer hover:text-cyan-400 transition">
        Contact
      </li>

      {/* Dropdown */}
      <li className="relative group cursor-pointer">

        <div className="flex items-center gap-1 hover:text-cyan-400 transition">
          More ▼
        </div>

        <div className="absolute left-1/2 top-10 hidden w-64 -translate-x-1/2 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-2xl group-hover:block">

    {/* Projects */}
    <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
        Projects
    </p>

    <a className="block rounded px-2 py-2 text-gray-400 hover:bg-blue-900 hover:text-cyan-300">
        Project 1
    </a>

    <a className="mb-4 block rounded px-2 py-2 text-gray-400 hover:bg-blue-900 hover:text-cyan-300">
        Project 2
    </a>

    {/* Work Experience */}
    <p className="mb-4 rounded px-2 py-2 text-sm font-medium hover:bg-slate-800">
        Work Experience
    </p>

    {/* Skills */}
    <p className="rounded px-2 py-2 text-sm font-medium hover:bg-slate-800">
        Skills
    </p>

</div>

      </li>

    </ul>

  </nav>
</header>
  );
}