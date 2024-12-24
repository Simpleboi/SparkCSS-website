import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Variable, Code2, Box, Layers, Palette, Wand2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  code?: string;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here",
  code = ".example { color: $primary; }",
}: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-none">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-3">
          <code className="text-sm font-mono">{code}</code>
        </div>
      </div>
    </Card>
  );
};

interface FeatureGridProps {
  features?: FeatureCardProps[];
}

const defaultFeatures: FeatureCardProps[] = [
  {
    icon: <Variable className="w-6 h-6 text-primary" />,
    title: "Variables & Constants",
    description: "Define reusable values with powerful variable system",
    code: "$primary: #3b82f6;\n$spacing: 1rem;",
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Nested Rules",
    description: "Write cleaner, more organized CSS with nesting",
    code: ".card {\n  &:hover {\n    transform: scale(1.02);\n  }\n}",
  },
  {
    icon: <Box className="w-6 h-6 text-primary" />,
    title: "Mixins",
    description: "Create reusable styles with powerful mixins",
    code: "@mixin flex-center {\n  display: flex;\n  align-items: center;\n}",
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Custom Functions",
    description: "Extend functionality with custom functions",
    code: "@function multiply($a, $b) {\n  @return $a * $b;\n}",
  },
  {
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: "Color Functions",
    description: "Manipulate colors with built-in functions",
    code: "color: lighten($primary, 20%);",
  },
  {
    icon: <Wand2 className="w-6 h-6 text-primary" />,
    title: "Smart Imports",
    description: "Efficiently manage your stylesheets",
    code: '@import "components/button";',
  },
];

const FeatureGrid = ({ features = defaultFeatures }: FeatureGridProps) => {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Modern CSS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SparkCSS comes packed with features that make writing CSS a breeze.
            Explore our powerful preprocessor capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <FeatureCard {...feature} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to see more details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
