import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause } from "lucide-react";
import "../../styles/LandingStyles/hero.scss";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  codeExample?: string;
  compiledOutput?: string;
}

const defaultCodeExample = `// SparkCSS Example
$primary: #6366f1;
$spacing: 2rem;

.button {
  background: $primary;
  padding: $spacing;
  
  &:hover {
    opacity: 0.9;
  }
  
  .icon {
    margin-left: 0.5rem;
  }
}`;

const defaultCompiledOutput = `.button {
  background: #6366f1;
  padding: 2rem;
}

.button:hover {
  opacity: 0.9;
}

.button .icon {
  margin-left: 0.5rem;
}`;

const HeroSection = ({
  title = "Write Better CSS with SparkCSS",
  subtitle = "A Simple Yet Powerful Preprocessor and Responsive Toolkit for Developers Who Demand Precision and Speed",
  codeExample = defaultCodeExample,
  compiledOutput = defaultCompiledOutput,
}: HeroSectionProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeExample.split("\n").length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnimating, codeExample]);

  return (
    <section className="min-h-[800px] w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 md:px-8 lg:px-16 landing-section">
      <div className="banner-container">
        <div className="banner-top">
          <h1 className="landing-title">{title}</h1>
          <p className="landing-subtitle">{subtitle}</p>
          <div className="hero-btn-container">
            <Button size="lg" className="get-started-btn">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-400 text-indigo-400 hover:bg-indigo-950"
            >
              View Docs
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-300">
                SparkCSS Input
              </h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsAnimating(!isAnimating)}
              >
                {isAnimating ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
            <pre className="font-mono text-sm bg-slate-900/50 p-4 rounded-lg overflow-x-auto spark-test">
              {codeExample.split("\n").map((line, index) => (
                <div
                  key={index}
                  className={`${
                    currentLine === index && isAnimating
                      ? "bg-indigo-500/20"
                      : ""
                  } px-2 -mx-2`}
                >
                  {line}
                </div>
              ))}
            </pre>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-300">
                Compiled CSS Output
              </h3>
            </div>
            <pre className="font-mono text-sm bg-slate-900/50 p-4 rounded-lg overflow-x-auto text-green-400">
              {compiledOutput}
            </pre>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
