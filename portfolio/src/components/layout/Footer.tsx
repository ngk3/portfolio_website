import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* PERSONAL DESCRIPTION */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kevin&apos;s Portfolio Website</h3>
            <p className="text-muted-foreground">
              A passionate full-stack developer crafting beautiful digital
              experiences.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* EXTERNAL LINKS */}

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ngk3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {/* Replace with "https://github.com/simple-icons/simple-icons" */}
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kevin-ng-44509a135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kevin.ng.ngk3@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-md text-muted-foreground">
          © ${currentYear} Kevin Ng. All rights reserved
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js, React, and Tailwind CSS. Hosted on AWS.
        </p>
      </div>
    </footer>
  );
}
