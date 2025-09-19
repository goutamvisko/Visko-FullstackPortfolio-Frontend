import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import p1 from "../assets/img/project1.png";
import p2 from "../assets/img/project2.png";
import p3 from "../assets/img/project3.png";
import p4 from "../assets/img/project4.png";

const projects = [
  {
    title: "Visko CRM & POS – Visko Group Pvt. Ltd",
    description:
      "Developed a CRM & POS platform with centralized admin and dashboards to streamline operations. Implemented multi-role JWT authentication, POS workflows, and advanced admin modules.",
    client: "Visko Group Pvt. Ltd, Indore",
    completionTime: "Ongoing (Dec 2024 – Present)",
    technologies: "React.js, PHP (CI4), MySQL, JWT, Redux, Material UI, Mantine UI, Bootstrap",
    liveDemo: "#",
    github: "#",
    image: p1,
  },
  {
    title: "Avisagameguild (Gaming Platform) – Virtual Height IT Service",
    description:
      "Built a real-time gaming platform with secure JWT-based access, optimized system performance by 30%, and implemented modular game components with high responsiveness.",
    client: "Virtual Height IT Service Pvt. Ltd, Indore",
    completionTime: "Jun 2023 – Jul 2024",
    technologies: "React.js, Express.js, MongoDB, Redux, JWT, Material UI, Mantine UI",
    liveDemo: "#",
    github: "#",
    image: p2,
  },
  {
    title: "PMS (Employee Management System) – Virtual Height IT Service",
    description:
      "Enhanced HR system with employee tracking, payroll, leave management, and reporting dashboards for 300+ users. Improved system performance by 70% with optimized APIs.",
    client: "Virtual Height IT Service Pvt. Ltd, Indore",
    completionTime: "Jun 2023 – Jul 2024",
    technologies: "React.js, SQL, Redux Toolkit, REST API, Material UI",
    liveDemo: "#",
    github: "#",
    image: p3,
  },
  {
    title: "XAMEEL (Food Ordering Platform) – Yuvasoft Technology",
    description:
      "Developed a food ordering platform for 2,500+ users with real-time analytics, intuitive dashboards, and seamless API integration for order management.",
    client: "Yuvasoft Technology Pvt. Ltd, Indore",
    completionTime: "Jun 2022 – Jun 2023",
    technologies: "React.js, Material UI, React-Chart, Redux, REST API",
    liveDemo: "#",
    github: "#",
    image: p4,
  },
  {
    title: "E-commerce Module – Aking Web Tech",
    description:
      "Built an online retail platform with product listings, responsive UI, order management, and secure checkout workflows integrated with REST APIs.",
    client: "Aking Web Tech Pvt. Ltd, Indore",
    completionTime: "Jan 2021 – May 2022",
    technologies: "React.js, Redux, Material UI, Bootstrap, REST API",
    liveDemo: "#",
    github: "#",
    image: p2,
  },
  {
    title: "Financial Dashboard & Web Portal – Elite Capital",
    description:
      "Developed a secure investment tracking portal with real-time dashboards, financial reporting, and responsive web UI for clients.",
    client: "Elite Capital, Indore",
    completionTime: "Jan 2019 – Dec 2020",
    technologies: "React.js, JavaScript, Bootstrap, SQL",
    liveDemo: "#",
    github: "#",
    image: p3,
  },
];

const Projects = () => {
  return (
    <section className="bg-[#1e1e1e] py-6 px-6 text-white font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Projects Slider with Gradient Border */}
        <div className="animate-gradient-border rounded-2xl p-[2px]">
          <div className="bg-[#1e1e1e] rounded-2xl p-6">
            {/* Section Header */}
            <div className="mb-10 text-center md:text-left">
              <p className="text-green-400 mb-2">• Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                My Recent Works
              </h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              className="mySwiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#2d2d2d] border border-gray-700 rounded-lg p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Side: Image */}
                      <div className="lg:w-1/2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-auto md:h-[400px] object-cover"
                        />
                      </div>

                      {/* Right Side: Details */}
                      <div className="lg:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">
                            {project.title.split("ecommerce system")[0]}
                            <span className="text-green-400">
                              {" "}
                              ecommerce system
                            </span>
                          </h3>
                          <p className="text-gray-400 mb-6">
                            {project.description}
                          </p>

                          <h4 className="text-pink-400 font-semibold mb-4">
                            Project Info
                          </h4>

                          <div className="border-t border-gray-700">
                            <div className="flex justify-between py-3 border-b border-gray-700">
                              <span className="font-semibold">Client</span>
                              <span className="text-gray-400">
                                {project.client}
                              </span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-700">
                              <span className="font-semibold">
                                Completion Time
                              </span>
                              <span className="text-gray-400">
                                {project.completionTime}
                              </span>
                            </div>
                            <div className="flex justify-between py-3">
                              <span className="font-semibold">
                                Technologies
                              </span>
                              <span className="text-gray-400">
                                {project.technologies}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* <div className="flex flex-wrap items-center justify-between mt-6 border-t border-gray-700 pt-6">
                          <div className="flex items-center gap-6">
                            <a
                              href={project.liveDemo}
                              className="flex items-center gap-2 hover:text-green-400 transition-colors"
                            >
                              <FiExternalLink /> Live Demo
                            </a>
                            <a
                              href={project.github}
                              className="flex items-center gap-2 hover:text-green-400 transition-colors"
                            >
                              <FaGithub /> View on Github
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          
            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center md:justify-end gap-4 mt-8  lg:bottom-8 lg:right-8 z-10">
              <button className="swiper-button-prev-custom bg-green-200 text-black p-3 rounded-full hover:bg-green-300 transition-colors">
                <FaArrowLeft />
              </button>
              <button className="swiper-button-next-custom bg-green-200 text-black p-3 rounded-full hover:bg-green-300 transition-colors">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
