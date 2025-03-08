import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "frontend",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Real Estate Listing Portal",
      description:
        "A platform for property listings with search, filter, and map integration for real estate agents and buyers.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      tags: ["Next.js", "PostgreSQL", "Google Maps API"],
      category: "fullstack",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    // {
    //   id: 4,
    //   title: 'Portfolio Website Template',
    //   description: 'A customizable portfolio template for developers and designers to showcase their work and skills.',
    //   image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   tags: ['HTML', 'CSS', 'JavaScript'],
    //   category: 'frontend',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },
    // {
    //   id: 5,
    //   title: 'Weather Forecast App',
    //   description: 'A weather application that provides current conditions and forecasts based on location with beautiful visualizations.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   tags: ['React', 'OpenWeather API', 'Chart.js'],
    //   category: 'frontend',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },
    // {
    //   id: 6,
    //   title: 'Blog API',
    //   description: 'A RESTful API for blog applications with authentication, post management, and comment functionality.',
    //   image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    //   category: 'backend',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-purple-800/50">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-gray-800/50 backdrop-blur-sm p-1 border border-gray-700">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium capitalize rounded-md transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="h-48 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-900/70 text-purple-400 text-xs font-medium rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-900/70 text-purple-400 text-xs font-medium rounded-full backdrop-blur-sm">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/UtsavGohel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/20"
          >
            View More on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
