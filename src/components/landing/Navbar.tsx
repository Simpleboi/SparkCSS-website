import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface NavbarProps {
  links?: Array<{ title: string; href: string }>;
}

const Navbar = ({
  links = [
    { title: "Features", href: "/features" },
    { title: "Documentation", href: "/documentation" },
    { title: "About", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Testimonials", href: "/testimonials" },
  ],
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              SparkCSS
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                {links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.title}
                      to={link.href}
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      key={link.title}
                      href={link.href}
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.title}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
