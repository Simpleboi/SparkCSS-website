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

@snippet: example() {
    padding: paddingValues[0]; // 10px
}
`;

const JavaScriptIntegration = `// Example: Dynamically update a CSS variable
SparkCSS.update('@variable primary-color', '#ff5733');

// Example: Apply a new theme
SparkCSS.applyTheme({
  'primary-color': '#3498db',
  'secondary-color': '#2ecc71',
});
`;

const PalletteTheme = `// Define a palette
@palette: theme {
  primary: #3498db;
  secondary: #2ecc71;
  accent: #e74c3c;
  background: #f5f5f5;
};
`;

const Snippet = `// Define a snippet with stronger validation
@snippet: button($color, $padding) {
  background-color: $color; 
  padding: $padding;        
  border: none;             
  transition: all 0.3s;     
};
`;

const Min = `
.button{background-color:#3498db;
padding:10px 20px;border:none;border-radius:5px;
transition:all .3s ease}.card
{background-color:#f5f5f5;
padding:20px;box-shadow:0 4px 6px rgba(0,0,0,.1)}

`;

const Scope = `// Define a scoped style block
@scope: button {
  .primary {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }`;

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
    title: "JavaScript Integration",
    description:
      "The JavaScript integration allows developers to interact with SparkCSS styles dynamically. You can update variables, switch themes, or even inject new snippets programmatically, enabling real-time styling changes.",
    code: JavaScriptIntegration,
  },
  {
    icon: <Puzzle className="w-6 h-6 text-indigo-400" />,
    title: "New @palette directive",
    description:
      "The @palette directive in SparkCSS v1.5 simplifies the process of creating and managing color themes. By defining a palette, you can generate consistent and reusable color schemes across your project, ensuring design uniformity and making theme switching effortless",
    code: PalletteTheme,
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    title: "Stronger Validation",
    description:
      "v1.5 introduces enhanced validation for properties inside @snippet, ensuring that only valid CSS properties and values are used. This feature helps catch errors early, maintain consistency, and enforce best practices in your custom snippets.",
    code: Snippet,
  },
  {
    icon: <Wand2 className="w-6 h-6 text-indigo-400" />,
    title: "Optimization",
    description:
      "SparkCSS v1.5 includes built-in support for minifying and optimizing your CSS during compilation, eliminating the need for external tools. This feature ensures your stylesheets are lightweight, efficient, and ready for production with minimal effort.",
    code: Min,
  },
  {
    icon: <Settings2 className="w-6 h-6 text-indigo-400" />,
    title: "New @scope directive",
    description:
      "The @scope directive in v1.5 helps avoid class name conflicts by scoping styles to a specific component or module. It automatically prefixes your styles with a unique namespace, ensuring modularity and better maintainability in large projects.",
    code: Scope,
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
      <p className="text-slate-300 text-lg mx-auto leading-relaxed update-para">
        The upcoming SparkCSS v1.5 is packed with exciting features to enhance
        your workflow! This version will introduce support for arrays, stronger
        validation for properties inside @snippet, and syntax highlighting
        through a custom VSCode extension. You'll also be able to generate color
        themes effortlessly using @palette and enjoy built-in support for
        minifying and optimizing your CSS, reducing file size without external
        tools. Additionally, v1.5 will bring JavaScript integration, allowing
        you to dynamically modify styles using SparkCSS syntax. While version
        1.4 remains the current stable release, these powerful updates are just
        around the corner, stay tuned!
      </p>
    </section>
  );
};
