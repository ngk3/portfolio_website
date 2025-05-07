import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-t py-8 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg">
              A passionate full-stack developer with expertise in building
              modern web applications. With a strong foundation in both
              front-end and back-end technologies, I create seamless digital
              experiences that solve real-world problems.
            </p>
            <p className="text-lg">
              I&apos;ve worked on a variety of projects ranging from test
              automations to health-tech web and mobile applications. I'm
              constantly learning and adapting to new technologies to stay at
              the forefront of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
