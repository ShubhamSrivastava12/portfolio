import React from "react";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Rocket,
  Lightbulb,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={22} />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: <Database size={22} />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={22} />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Cloudinary",
        "Antigravity",
        "Vite",
      ],
    },
    {
      title: "Deployment",
      icon: <Rocket size={22} />,
      skills: ["Vercel", "Render"],
    },
    {
      title: "Concepts",
      icon: <Lightbulb size={22} />,
      skills: [
        "JWT Authentication",
        "Responsive Design",
        "MVC Architecture",
        "API Integration",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden scroll-mt-28.5"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Skills
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-secondary leading-7">
            Technologies and tools I use to build fast, scalable, responsive,
            and modern full-stack web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Subtle top gradient line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/90 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;