import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Menu } from "lucide-react";
import "../../styles/LandingStyles/nav.scss";

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
    <nav className="z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 nav">
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
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors nav-links"
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
            <div className="hidden md:flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white"
                onClick={() => window.open("https://github.com/Simpleboi/sparkcss", "_blank")}
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

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-white"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] bg-slate-900 border-slate-800">
                  <div className="flex flex-col space-y-4 mt-8">
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
                    <div className="pt-4 border-t border-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-white w-full justify-start"
                        onClick={() =>
                          window.open("https://github.com", "_blank")
                        }
                      >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-2"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
