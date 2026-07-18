import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] md:min-h-[80vh] pb-10 bg-primary flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div
  className="absolute inset-0 bg-cover bg-center scale-100 opacity-90"
  style={{
    backgroundImage: "url('/hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>

<div className="absolute inset-0 bg-white/80"></div>

  {/* Hero */}
  <div
  className="
    relative
    w-[95vw] md:w-[90vw]
    min-h-[60vh] h-auto
    max-w-7xl
    overflow-hidden
    rounded-[32px]
    mt-24
  "
>

  {/* Content */}
  <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4 md:px-10 py-12 text-center">

  {/* Name */}
  <h3 className="mb-3.5 text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-primary">
    Shubham Srivastava
  </h3>

  {/* Role */}
  <p className="rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-base md:text-lg font-semibold text-primary backdrop-blur-md">
    MERN Stack Developer
  </p>

  {/* Heading */}
  <h1 className="max-w-4xl text-2xl font-bold leading-tight text-secondary sm:text-3xl md:text-4xl">
    Solving Complex Development Challenges through Persistent Problem-Solving
  </h1>

  {/* Description */}
  <p className="mt-3 max-w-3xl text-base leading-7 text-secondary md:text-lg">
    Crafting scalable, responsive, and high-performance web applications using 
    MongoDB, Express.js, React.js, and Node.js, with a strong focus on clean 
    architecture, intuitive UI, and seamless user experiences
  </p>

  {/* Buttons */}
  <div className="mt-5 flex flex-wrap items-center justify-center gap-4">

    <a
      href="https://www.linkedin.com/in/shubham-srivastava-702522309/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-primary-dark"
    >
      LinkedIn
    </a>

    <a
      href="https://drive.google.com/file/d/1lUlie0Gt0AqhM-As_I5hzy1MRsPnVEbd/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-secondary/90 bg-secondary/80 px-8 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-secondary-dark"
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