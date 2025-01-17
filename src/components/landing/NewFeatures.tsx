import ".././../styles/LandingStyles/newFeatures.scss";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Workflow,
  Puzzle,
  Lightbulb,
  Wand2,
  Settings2,
} from "lucide-react";

const ArrayFeatures = `@array: paddingValues ['10px', '2rem', '4em'];

.my-class {
    padding: paddingValues[2] // '4em'
};
`;

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    title: "Support for Arrays",
    description:
      "You can define arrays directly in your SparkCSS using the @array directive. Values are dynamic and can be of any type",
    code: ArrayFeatures,
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

export const NewFeatures = () => {
  return (
    <section className="newFeat-container">
      <h1>What's new in SparkCSS V1.5</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 utils-container">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
          >
            <div className="flex items-start space-x-4 feat-container">
              <div className="p-2 bg-slate-700/50 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
                <pre>{feature.code}</pre>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
