import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-[#09090B] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div
  className="absolute inset-0 bg-cover bg-center scale-100 opacity-90"
  style={{
    backgroundImage: "url('/hero.png')",
    backgroundSize: "100%",
    backgroundPosition: "center 63%",
    backgroundRepeat: "no-repeat",
  }}
></div>

<div className="absolute inset-0 bg-black/25"></div>

  {/* Hero */}
  <div
  className="
    relative
    w-[90vw]
    h-[60vh]
    max-w-8xl
    min-w-[750px]
    overflow-hidden
    rounded-[32px]
    shadow-2xl
  "
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/25"></div>

  {/* Content */}
  <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center px-10 text-center">

  {/* Name */}
  <h3 className="mb-3.5 text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-white">
    Shubham Srivastava
  </h3>

  {/* Role */}
  <p className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 text-base md:text-lg font-semibold text-cyan-300 backdrop-blur-md">
    MERN Stack Developer
  </p>

  {/* Heading */}
  <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">
    Solving Complex Development Challenges through Persistent Problem-Solving.
  </h1>

  {/* Description */}
  <p className="mt-3 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
    Crafting scalable, responsive, and high-performance web applications using
    <span className="font-medium text-white">
      {" "}MongoDB, Express.js, React.js, and Node.js
    </span>
    , with a strong focus on clean architecture, intuitive UI, and seamless user
    experiences.
  </p>

  {/* Buttons */}
  <div className="mt-5 flex flex-wrap items-center justify-center gap-4">

    <a
      href="https://www.linkedin.com/in/shubham-srivastava-702522309/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-[#0A66C2] px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#004182]"
    >
      LinkedIn
    </a>

    <a
      href="https://drive.google.com/file/d/1lUlie0Gt0AqhM-As_I5hzy1MRsPnVEbd/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/20"
    >
      View Resume
    </a>

  </div>

</div>
</div>
</section>
  );
};

export default Hero;