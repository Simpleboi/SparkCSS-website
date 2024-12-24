import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  socialLinks?: Array<{ icon: React.ReactNode; href: string }>;
  links?: Array<{
    title: string;
    items: Array<{ label: string; href: string }>;
  }>;
}

const Footer = ({
  socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
  ],
  links = [
    {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "Documentation", href: "#documentation" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#blog" },
        { label: "Community", href: "#community" },
        { label: "Support", href: "#support" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 block"
            >
              SparkCSS
            </a>
            <p className="text-slate-300 mb-4 max-w-sm">
              Write better CSS with the modern preprocessor that makes
              development a breeze.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white"
                  onClick={() => window.open(link.href, "_blank")}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>

          {links.map((group, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SparkCSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
