import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 px-6 md:px-12 lg:px-20 scroll-mt-28.5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* Left Side (Logo Placeholder) */}
          <div className="flex items-center justify-center mb-8 lg:mb-0">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-64 md:w-80 lg:w-[420px] xl:w-[500px] object-contain"
  />
</div>

          {/* Right Side */}
          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary mb-5">
              About Shubham Srivastava
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
              MERN Stack Developer
            </h2>

            <h3 className="mt-6 text-base md:text-lg font-medium leading-8 text-zinc-700">
              MERN Stack Developer | API Integration | Problem Solving & Logic
              Building | Responsive Web Development | UI/UX Focused | Full
              Stack Web Applications
            </h3>

            <p className="mt-8 text-base md:text-lg leading-8 text-zinc-600">
              I’m a MERN Stack Developer passionate about building scalable,
              responsive, and user-friendly web applications. I enjoy solving
              complex problems through clean code, API integration, and modern
              development tools to create seamless digital experiences. My goal
              is simple — to build fast, reliable, and impactful applications
              that users genuinely enjoy using.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;