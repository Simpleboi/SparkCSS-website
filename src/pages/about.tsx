import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Workflow,
  Puzzle,
  Lightbulb,
  Wand2,
  Settings2,
  Code,
  Layers,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    title: "Utility-First Approach",
    description:
      "Combine the power of utility classes with SCSS-like features for rapid development.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-indigo-400" />,
    title: "Advanced Directives",
    description:
      "Create complex styles using custom directives and powerful preprocessor features.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-indigo-400" />,
    title: "Reusable Components",
    description:
      "Build and maintain a library of reusable CSS components and patterns.",
  },
];

const additionalFeatures = [
  {
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    title: "Custom Syntax",
    description:
      "Write cleaner, more intuitive CSS with our enhanced syntax that combines the best of SCSS and modern CSS.",
  },
  {
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    title: "Design Tokens",
    description:
      "Built-in support for design tokens and theme customization for consistent styling across your project.",
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Performance Optimized",
    description:
      "Automatic optimization and minification ensure your styles are production-ready and performant.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
              >
                About SparkCSS
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                The Modern CSS Preprocessor
              </h1>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                SparkCSS is a CSS preprocessor that combines SCSS-like features
                with utility classes similar to Tailwind. Our mission is to
                provide developers with a versatile and powerful tool that makes
                writing CSS both efficient and enjoyable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Our Vision
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                SparkCSS aims to provide the best of both worlds: the simplicity
                and utility of Tailwind's utility classes combined with the
                advanced capabilities of SCSS, such as reusable components and
                custom directives. We believe in making CSS development both
                efficient and maintainable while still allowing for a great
                level of customization.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600/20 rounded-2xl p-8 border border-indigo-500/30">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Why Choose SparkCSS?
              </h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  SparkCSS is designed for modern web development workflows,
                  offering a perfect balance between utility-first CSS and
                  preprocessor features. Our tool helps teams maintain
                  consistent styling while providing the flexibility needed for
                  complex projects.
                </p>
                <p>
                  With features like intelligent code completion, real-time
                  preview, and comprehensive documentation, SparkCSS makes it
                  easier than ever to write and maintain your styles. Whether
                  you're working on a small project or a large-scale
                  application, SparkCSS scales with your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
