import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kevin.ng.ngk3@gmail.com",
      href: "mailto:kevin.ng.ngk3@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                          href={info.href}
                          className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>) :
                        (<p className="text-lg text-white">
                          {info.value}
                        </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
