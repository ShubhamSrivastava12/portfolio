import {
  Mail,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-400 text-white border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <img
  src="/namelogo.png"
  alt="Name Logo"
  className="h-24 w-auto"
/>

            <p className="mt-4 text-slate-900 leading-7 max-w-sm">
              Passionate MERN Stack Developer creating modern,
              responsive and scalable web applications with
              clean UI and efficient backend solutions.
            </p>
          </div>

          {/* Center */}
          <div className="md:ml-auto mr-34">
            <h3 className="text-xl text-black font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-900">

              <li>
                <a href="#home" className="hover:text-primary transition duration-300">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-primary transition duration-300">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-primary transition duration-300">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-primary transition duration-300">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-primary transition duration-300">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl text-black font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/ShubhamSrivastava12"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-slate-800 hover:bg-primary transition"
              >
                <FaGithub
                  size={22}
                  className="group-hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-srivastava-702522309/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-slate-800 hover:bg-primary transition"
              >
                <FaLinkedin
                  size={22}
                  className="group-hover:scale-110 transition"
                />
              </a>

              <a
                href="mailto:shubhamsrivastava1612@gmail.com"
                className="group p-3 rounded-xl bg-slate-800 hover:bg-primary transition"
              >
                <Mail
                  size={22}
                  className="group-hover:scale-110 transition"
                />
              </a>

            </div>

            <p className="text-slate-900 mt-6">
              Let's build something amazing together.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-14 pt-8 text-center">
  <p className="text-slate-900 text-sm font-medium">
    © {year} Shubham Srivastava. All Rights Reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;