import React from "react";

const WorkExperience = () => {
  const responsibilities = [
    "Designed and developed complete full stack web applications using React.js, Node.js, Express.js, and MongoDB following scalable architecture.",
    "Built the entire backend architecture, including RESTful APIs, routes, controllers, middleware, authentication, database models, and admin dashboards.",
    "Developed secure and efficient server-side applications using Express.js with proper error handling, validation, and modular code structure.",
    "Integrated MongoDB Atlas as the cloud database for managing application data and implemented cloud-based storage solutions for images and media assets.",
    "Created responsive and reusable React components, improving maintainability, performance, and overall user experience across multiple devices.",
    "Integrated third-party APIs and implemented secure authentication, authorization, and role-based access control for different user types.",
    "Utilized modern React libraries and packages to build interactive, premium-quality user interfaces and enhance application functionality.",
    "Managed source code using Git and GitHub by following version control best practices, working with feature branches, and collaborating efficiently on delegated development tasks.",
    "Deployed frontend and backend applications independently using Vercel and Render, ensuring smooth production releases and reliable application availability.",
    "Optimized application performance by implementing clean coding practices, reusable modules, and efficient API communication between frontend and backend.",
    "Leveraged AI-assisted development tools such as ChatGPT, Claude, and Antigravity to accelerate problem-solving, explore implementation approaches, generate complex business logic ideas, and improve UI/UX design efficiency.",
    "Worked closely with project stakeholders to understand requirements, translate business needs into technical solutions, and deliver reliable, user-centric web applications.",
  ];

  return (
    <section
      id="work-experience"
      className="bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work Experience
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Professional experience building scalable full stack web
            applications, solving real-world business challenges, and delivering
            production-ready solutions using modern web technologies.
          </p>
        </div>

        {/* Experience Card */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8 md:p-12">
          {/* Company & Duration */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Full Stack Developer Intern
              </h3>

              <p className="text-xl font-semibold text-blue-600 mt-1">
                Tech Vimal Corporation Pvt. Ltd.
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              November 2025 – April 2026
            </span>
          </div>

          {/* Summary */}
          <p className="text-gray-700 leading-8 text-[17px] mb-10">
            At Tech Vimal Corporation Pvt. Ltd., I worked as a Full Stack
            Developer, building modern, scalable, and responsive web
            applications from concept to deployment. My role involved developing
            complete end-to-end solutions, including intuitive user interfaces,
            robust backend systems, secure APIs, and database architecture. I
            collaborated with team members to understand business requirements,
            solve real-world client problems through logical thinking, and
            deliver high-performance applications using modern web technologies
            and industry best practices.
          </p>

          {/* Responsibilities */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Responsibilities & Contributions
            </h4>

            <div className="grid md:grid-cols-2 gap-5">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 hover:shadow-md transition"
                >
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></div>

                  <p className="text-gray-700 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ServiceNow Experience */}
<div className="mt-10 rounded-3xl border border-gray-200 bg-white shadow-lg p-8 md:p-12">
  {/* Company & Duration */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
    <div>
      <h3 className="text-3xl font-bold text-gray-900">
        ServiceNow Developer Intern
      </h3>

      <p className="text-xl font-semibold text-blue-600 mt-1">
        Bangmetric Services, Noida
      </p>
    </div>

    <span className="w-fit rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
      February 2025 – April 2025
    </span>
  </div>

  {/* Summary */}
  <p className="text-gray-700 leading-8 text-[17px] mb-8">
    At Bangmetric Services, I received hands-on training on the
    ServiceNow platform, focusing on ITSM modules, platform
    customization, client-side and server-side scripting, and workflow
    automation while gaining exposure to enterprise-level service
    management practices.
  </p>

  {/* Responsibilities */}
  <div>
    <h4 className="text-2xl font-semibold text-gray-900 mb-6">
      Key Learning & Responsibilities
    </h4>

    <div className="grid gap-4">
      {[
        "Completed training aligned with the ServiceNow Certified System Administrator (CSA) curriculum.",
        "Worked with Incident, Problem, Change, and Service Catalog modules.",
        "Gained hands-on exposure to Client Scripts, Business Rules, Flow Designer, and Workflow.",
        "Learned platform customization, Service Catalog, and core ServiceNow development concepts.",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 hover:shadow-md transition"
        >
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></div>

          <p className="text-gray-700 leading-7">{item}</p>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default WorkExperience;