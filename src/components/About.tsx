import { Code, Palette, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Building responsive and performant web applications using modern technologies.",
    },
    {
      icon: <Palette size={24} />,
      title: "DevOps",
      description:
        "Building efficient infrastructure, automation, and CI/CD pipelines for seamless development and deployment.",
    },
    {
      icon: <Globe size={24} />,
      title: "SEO Optimization",
      description:
        "Improving website visibility and search engine rankings for better reach.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Consulting",
      description:
        "Offering specialized guidance on digital strategy and the implementation of cutting-edge technologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-purple-800/50">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who I Am
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I’m a passionate developer with a solid background in crafting
            digital experiences that users love.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 mb-4">
              With over 2 years of experience in the tech industry, I've had the
              opportunity to work on a wide variety of projects, ranging from
              small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-300 mb-4">
              I started my journey as a back-end developer and gradually
              expanded my skills to become a full-stack developer. My passion
              for clean code and user-centric design has been the driving force
              behind my career.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community events.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-white mb-2">Education</h4>
                <p className="text-gray-400">
                  B.Tech in Computer Science Engineering
                  <br />
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-white mb-2">Location</h4>
                <p className="text-gray-400">
                  Gujarat, IN
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
