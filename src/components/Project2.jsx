import React from "react";
import { Check } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from 'react-icons/fa';

const Project2 = () => {
  const features = [
    "Generate high-quality AI images from text prompts using Stability AI.",
    "Explore AI-generated artwork shared by other users.",
    "Publish generated images with your name and prompt.",
    "Search artworks by prompt or creator name.",
    "Download generated images with a single click.",
    "Modern, responsive interface with smooth animations.",
    "Secure image storage on Cloudinary with metadata managed in MongoDB.",
  ];

  const technologies = [
    [
      "React, Vite & React Router DOM",
      "Built a fast, interactive, and single-page user interface.",
    ],
    [
      "Tailwind CSS",
      "Created a modern, responsive, and mobile-friendly design.",
    ],
    [
      "Axios",
      "Managed API communication between the frontend and backend.",
    ],
    [
      "Node.js & Express.js",
      "Developed secure and scalable RESTful APIs.",
    ],
    [
      "MongoDB & Mongoose",
      "Stored and managed image metadata and user information.",
    ],
    [
      "Cloudinary & Stability AI API",
      "Generated AI images and securely stored them in the cloud.",
    ],
    [
      "Concurrently & Nodemon",
      "Improved the development workflow with simultaneous server execution and automatic restarts.",
    ],
  ];

  return (
    <section
  id="project2"
  className="text-white py-12 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-x-hidden scroll-mt-28.5"
>
      <div className="max-w-[1700px] mx-auto">

        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold">
            Project 2
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary">
            AI Image Generator
          </h2>
        </div>

        {/* Phone + Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex justify-center w-full">
            <img
              src='/ipad.png'
              alt="AI Image Generator Mobile Mockup"
              className="w-full max-w-[650px] md:max-w-[850px] drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            />
          </div>

          {/* Right */}
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Project Description
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              AI Image Generator is a full-stack web application that allows
              users to generate AI-powered images from text prompts using
              Stability AI and share their creations with the community. Images
              are securely stored on Cloudinary while metadata is managed in
              MongoDB, providing a seamless and interactive creative experience.
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
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-300"></div>

        {/* Technologies + iPad */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">

          {/* Left */}
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
                    1. Finding a Free Image Generation Model
                  </h4>

                  <p className="text-gray-600 leading-6 text-[15px]">
                    Most popular image generation APIs, such as
                    <span className="font-semibold text-gray-900">
                      {" "}OpenAI{" "}
                    </span>
                    and
                    <span className="font-semibold text-gray-900">
                      {" "}Google Gemini
                    </span>
                    , required paid access. I researched and evaluated multiple
                    alternatives before selecting a suitable free model for the
                    application.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    2. Handling Limited Model Availability
                  </h4>

                  <p className="text-gray-600 leading-6 text-[15px]">
                    Some free image generation providers, including
                    <span className="font-semibold text-gray-900">
                      {" "}Hugging Face
                    </span>
                    {" "}and
                    <span className="font-semibold text-gray-900">
                      {" "}Pollinations.ai
                    </span>
                    , occasionally had unavailable models or restricted access.
                    To ensure uninterrupted functionality, I identified and
                    integrated alternative image generation models whenever
                    required.
                  </p>
                </div>

              </div>

              {/* Project Links */}
<div className="mt-12 flex flex-wrap gap-4">

  <a
    href="https://ai-image-generator-9c1y.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <ExternalLink size={18} />
    Live Demo
  </a>

  <a
    href="https://github.com/ShubhamSrivastava12/ai-image-generator"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
  >
    <FaGithub size={18} />
    GitHub Repository
  </a>

</div>

            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center w-full">
            <img
              src='/phone2.png'
              alt="AI Image Generator iPad Mockup"
              className="w-full max-w-2xl lg:max-w-5xl drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Project2;