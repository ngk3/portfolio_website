import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    "5+ Years Experience",
    "Web Developer",
    "Full Stack Engineer",
    "Mobile Developer",
    "UI/UX Enthusiast",
    "Documentation Supporter"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Crafting Digital Experiences
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, 
              efficient code. My journey in development started over 5 years ago, and I've been 
              continuously learning and adapting to new technologies ever since.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building modern applications using React, React Native, Next.js, and Node.js. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="p-3 text-center border-blue-500/30 text-blue-300 bg-blue-500/10"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Frontend Development</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[100%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Backend Development</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-[100%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-[100%]"></div>
                </div>

                 <div className="flex items-center justify-between">
                  <span className="text-gray-300">Dev Ops/Infrastructure</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
