import Link from "next/link";

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 shadow-md">
        {/* Portfolio Home */}
        <div className="text-xl font-bold">{"Kevin Ng's Portfolio Website"}</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* TODO:  Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Link key="Home" href="/">
            {"Home"}
          </Link>
        </div>
      </div>
    </header>
  );
}
