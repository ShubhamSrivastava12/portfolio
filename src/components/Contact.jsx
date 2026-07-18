import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
} from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const accessKey = "5fc6729c-b163-4c3a-b5bd-825662ace458";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const data = new FormData();

    data.append("access_key", accessKey);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-t from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden scroll-mt-28.5"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-primary md:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary">
            Thanks for visiting my portfolio. If you have any questions,
            feedback, collaboration ideas, or simply want to connect, I'd love
            to hear from you. Feel free to send me a message anytime.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 relative z-10">
          {/* Left Side */}
          <div className="rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:shubhamsrivastava1612@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-transparent bg-gray-50/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900 break-all transition-colors group-hover:text-primary">
                    shubhamsrivastava1612@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919873447532"
                className="group flex items-center gap-5 rounded-2xl border border-transparent bg-gray-50/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    +91 9873447532
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-5 rounded-2xl border border-transparent bg-gray-50/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    Indirapuram, Ghaziabad
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/shubham-srivastava-702522309/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-transparent bg-gray-50/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <FaLinkedin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ShubhamSrivastava12"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-transparent bg-gray-50/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <FaGithub size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    View my repositories
                  </p>
                </div>
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1lUlie0Gt0AqhM-As_I5hzy1MRsPnVEbd/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-8 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
            >
              <Download size={20} className="transition-transform group-hover:-translate-y-1" />
              Download Resume
            </a>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center font-medium text-green-700">
                  ✅ Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center font-medium text-red-700">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;