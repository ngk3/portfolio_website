import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 125);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Hi, I'm Kevin!
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 min-h-[2em]">
            <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative applications with modern
            technologies. I balance user experience and security into
            experiences that makes a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ngk3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-ng-44509a135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:kevin.ng.ngk3@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-800 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
