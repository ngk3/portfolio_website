
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ngk3",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kevin-ng-44509a135",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kevin.ng.ngk3@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Kevin Ng
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6 w-full">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Kevin Ng. Made with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
