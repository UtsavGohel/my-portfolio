import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        {
          name: "Resume",
          href: "https://drive.google.com/uc?export=download&id=1aFjosJsAv05FnIkw45u5gOq5i-UT_cXH",
        },
        { name: "Testimonials", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/UtsavGohel" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/utsav-gohel/" },
        { name: "Twitter", href: "https://x.com/utsav_gohel_8" },
        { name: "Instagram", href: "https://www.instagram.com/the_utsv__/" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Utsav Gohel
            </h3>
            <p className="text-gray-400 mb-4">
              A passionate full-stack developer focused on creating beautiful
              and functional digital experiences.
            </p>
            <p className="text-gray-400">
              Based in Gujarat, IN
              <br />
              Available for freelance work
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Utsav Gohel. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-purple-500" />{" "}
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
