import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        "React/React Native",
        "Next",
        "Tailwind CSS",
        "SASS",
        "HTML/CSS",
        "Typescript",
        "Javascript",
      ],
    },
    {
      title: "Backend",
      color: "green",
      skills: [
        "Java Spring Boot",
        "Node.js",
        "Express",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      title: "Testing",
      color: "purple",
      skills: [
        "WebDriverIO",
        "Appium",
        "Puppeter",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      title: "Tools & Others",
      color: "red",
      skills: ["Git", "Docker", "AWS", , "GCP", "Lighthouse", "Terraform"],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-500/30 bg-blue-500/10 text-blue-300";
      case "green":
        return "border-green-500/30 bg-green-500/10 text-green-300";
      case "purple":
        return "border-purple-500/30 bg-purple-500/10 text-purple-300";
      case "red":
        return "border-red-500/30 bg-red-500/10 text-red-300";
      default:
        return "border-gray-500/30 bg-gray-500/10 text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring ideas
            to life
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`w-full justify-center py-2 text-sm ${getColorClasses(
                      category.color
                    )} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
