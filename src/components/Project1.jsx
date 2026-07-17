import React from "react";
import { Check } from "lucide-react";

const Project1 = () => {
  const features = [
    "Secure user authentication with sign up and login.",
    "Add, manage, and track income and expense transactions.",
    "Create and organize custom income and expense categories.",
    "Generate, manage, and track client invoices with payment status.",
    "Interactive dashboard with financial insights and data visualizations.",
    "Responsive and user-friendly interface optimized for all devices.",
    "Secure RESTful backend with protected user-specific data.",
    "Built with a scalable MERN stack architecture for efficient performance.",
  ];

  const technologies = [
  ["React.js", "Built interactive user interfaces."],
  ["Tailwind CSS", "Responsive UI design."],
  ["React Router DOM & Axios", "Routing and API integration."],
  ["Recharts", "Interactive financial charts."],
  ["Node.js, Express.js & MongoDB", "RESTful APIs and database management."],
  ["JWT & Bcrypt", "Secure authentication."],
  ["Vite", "Fast development and optimized builds."],
];

  return (
    <section className="text-white py-24 px-6 overflow-x-hidden">
      <div className="max-w-[1700px] mx-auto">

        {/* Heading */}
        <div className="mb-16 ml-15">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Project 1
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Expense Tracker Application
          </h2>
        </div>

        {/* Description + Laptop */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="ml-15">
            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Project Description
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              Expense Tracker is a full-stack web application that helps users
              manage their income and expenses by recording, categorizing, and
              tracking transactions. It provides a clear overview of cash flow,
              making it easier to monitor spending, identify unnecessary
              expenses, and plan finances more effectively.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-5 text-gray-900">
              Key Features
            </h3>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <Check
  size={18}
  className="text-primary mt-1 flex-shrink-0"
/>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex justify-center -mt-20 mr-20">
            <img
              src='/laptop.png'
              alt="Expense Tracker Laptop Mockup"
              className="w-[1500px] max-w-5xl drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-gray-300"></div>

        {/* Mobile + Technologies */}
        <div className="grid lg:grid-cols-[80%_20%] gap-0 items-start">

          {/* Left */}
          <div className="flex justify-center order-2 lg:order-1 -ml-110">
            <img
              src='/phone1.png'
              alt="Expense Tracker Mobile Mockup"
              className="w-[800px] md:w-[1100px] drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            />
          </div>

          {/* Right */}
<div className="order-1 lg:order-2 flex flex-col justify-between h-full -ml-90 mr-10">

  {/* Tools & Technologies */}
  <div>
    <h3 className="text-3xl font-bold mb-6 text-gray-900">
      Tools & Technologies
    </h3>

    <div className="space-y-3 text-[15px]">
      {technologies.map(([title, desc], index) => (
        <div key={index} className="flex gap-3">
          <span className="text-blue-400 mt-1">•</span>

          <p className="text-gray-600 leading-6">
            <span className="font-semibold text-gray-900">
              {title}
            </span>{" "}
            – {desc}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-zinc-800 my-10"></div>

  {/* Challenges */}
  <div>
    <h3 className="text-3xl font-bold mb-6 text-gray-900">
      Challenges Faced
    </h3>

    <div className="space-y-6">

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          1. User-Specific Dashboard & Data Isolation
        </h4>

        <p className="text-gray-600 leading-6 text-[15px]">
          Initially, all users were seeing the same dashboard, and income,
          expense, and invoice records were shared across accounts. I resolved
          this by linking every record with the logged-in user's
          <span className="text-gray-900 font-semibold"> userId</span> and fetching
          only user-specific data, ensuring each user accesses only their own
          dashboard and transactions.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          2. Persisting Custom Income & Expense Categories
        </h4>

        <p className="text-gray-600 leading-6 text-[15px]">
          Custom categories created by users were not available on future
          visits. I stored the categories in
          <span className="text-gray-900 font-semibold"> Local Storage</span> when
          the user clicked
          <span className="text-gray-900 font-semibold"> Next</span>, and saved them
          to the database with the user's
          <span className="text-gray-900 font-semibold"> userId</span> only after
          clicking
          <span className="text-gray-900 font-semibold"> Final Submit</span> on the
          next page, making them permanently available for that user.
        </p>
      </div>

    </div>
  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default Project1;