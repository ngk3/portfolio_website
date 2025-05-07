import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Hi, I&apos;m <span className="text-primary">Kevin Ng</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A passionate full-stack developer crafting beautiful digital
            experiences
          </p>
        </div>

        <Button size="lg" className="button-hover-effect" asChild>
          <Link href="#projects">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="button-hover-effect"
          asChild
        >
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
    </section>
  );
}
