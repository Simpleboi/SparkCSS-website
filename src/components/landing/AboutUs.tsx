import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Workflow,
  Puzzle,
  Lightbulb,
  Wand2,
  Settings2,
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
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    title: "Smart Optimization",
    description:
      "Automatic CSS optimization and minification for production-ready code.",
  },
  {
    icon: <Wand2 className="w-6 h-6 text-indigo-400" />,
    title: "Custom Functions",
    description:
      "Create your own CSS functions for complex calculations and transformations.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-indigo-400" />,
    title: "Developer Tools",
    description:
      "Built-in debugging tools and source maps for easier development.",
  },
];

const AboutUs = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
          >
            About SparkCSS
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            The Modern CSS Preprocessor
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            SparkCSS is a revolutionary CSS preprocessor that brings together
            the best of both worlds: the power of SCSS-like features and the
            speed of utility-first CSS frameworks like Tailwind. Designed with
            modern developers in mind, SparkCSS reimagines the way we write and
            manage stylesheets by combining custom syntax capabilities with a
            rich library of utility classes, making it easier to build
            responsive, scalable, and maintainable websites.
            <br />
            <br />
            Our mission is simple: to empower developers by providing a seamless
            development experience that balances the flexibility and power of
            advanced preprocessor features with the speed and efficiency of
            utility-first CSS. Whether you're working on a small project or a
            large-scale application, SparkCSS offers the tools you need to
            create beautiful, responsive designs quickly and effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Our Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-indigo-400">
                Simplicity Meets Power
              </h4>
              <p className="text-slate-300">
                We believe in making CSS development both efficient and
                enjoyable. SparkCSS combines the simplicity of utility classes
                with the power of advanced preprocessor features, giving you the
                best of both worlds.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-indigo-400">
                Developer Experience First
              </h4>
              <p className="text-slate-300">
                Every feature in SparkCSS is designed with developer experience
                in mind. From intelligent autocomplete to comprehensive
                documentation, we ensure that using SparkCSS is a smooth and
                productive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
