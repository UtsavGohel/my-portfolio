import { ArrowDown, Download } from "lucide-react";
import utsavImg2 from "./utsav_gohel_img.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-800/50">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Utsav Gohel
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Let's turn your vision into
              reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1aFjosJsAv05FnIkw45u5gOq5i-UT_cXH"
                className="px-6 py-3 bg-gray-800/50 text-gray-300 font-medium rounded-lg hover:bg-gray-700/50 transition-colors backdrop-blur-sm flex items-center gap-2"
                download
              >
                Resume <Download size={18} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl mx-auto relative z-10">
                <img
                  src={utsavImg2}
                  alt="Utsav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-full shadow-lg z-20 border border-gray-700">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="font-bold">2+</span>
                </div>
                <span className="absolute -bottom-8 right-0 text-sm font-medium text-gray-300 whitespace-nowrap">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
