import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Variable, Code2, Layout, Box } from "lucide-react";
import "../styles/FeatureStyles/feature.scss";
import { FeaturesHeader } from "@/components/featuresHeader";

interface CodeExample {
  title: string;
  description: string;
  code: string;
  icon: React.ReactNode;
}

const codeExamples: CodeExample[] = [
  {
    title: "Variables",
    description:
      "Variables in SparkCSS are declared using the $ symbol, similar to SCSS. They can store reusable values, like colors or spacing units.",
    code: `$primary-color: #3498db;

.my-class {
  color: $primary-color;
}`,
    icon: <Variable className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Snippets",
    description:
      "Snippets in SparkCSS work like SCSS mixins but are defined using @snippet and applied using @apply.",
    code: `@snippet button-style($bg-color) {
  background-color: $bg-color;
  padding: 10px;
  border-radius: 5px;
}

.button {
  @apply button-style(#ff6347);
}`,
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Responsive Design",
    description:
      "Create responsive styles using the @responsive directive for easy, consistent application of responsive rules.",
    code: `@responsive {
  .my-container {
    width: 100%;
    @breakpoint(sm) {
      width: 50%;
    }
  }
}`,
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Utility Classes",
    description:
      "SparkCSS provides flexible utility classes that can be generated using simple keywords to speed up development.",
    code: `<div class="p-4 bg-primary text-white">
  This is a utility class example
</div>`,
    icon: <Box className="w-6 h-6 text-indigo-400" />,
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 feat-container">
      <Navbar />
      <main className="pt-16">
        <div className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 feat-header">
            <FeaturesHeader/>

            <div className="grid grid-cols-1 gap-8">
              {codeExamples.map((example, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 p-6"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      {example.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-2">
                        {example.title}
                      </h2>
                      <p className="text-slate-300">{example.description}</p>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-green-400">{example.code}</pre>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-indigo-600/20 rounded-2xl p-8 border border-indigo-500/30">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why Choose These Features?
              </h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  SparkCSS's core features are designed to make CSS development
                  more efficient and maintainable. By combining the power of
                  variables, snippets, responsive design, and utility classes,
                  you can write cleaner, more organized code that scales with
                  your project.
                </p>
                <p>
                  Whether you're building a small website or a large
                  application, these features work together to provide a
                  consistent and powerful development experience. The syntax is
                  intuitive and familiar to developers who have worked with SCSS
                  or similar preprocessors.
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

export default FeaturesPage;
