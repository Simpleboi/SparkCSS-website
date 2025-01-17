import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "../styles/DocStyles/doc.scss";

const sections = {
  quickStart: `# Quick Start Guide

// Install SparkCSS
npm install sparkcss

// Import in your project
import 'sparkcss/styles.css';

// Start using SparkCSS features
$primary: #3b82f6;

.button {
  background: $primary;
  padding: 1rem;
  
  &:hover {
    opacity: 0.9;
  }
}`,
  installation: `# Installation Options

SparkCSS: https://www.npmjs.com/package/sparkcss

# Using npm
npm install sparkcss

# Using yarn
yarn add sparkcss

# Using pnpm
pnpm add sparkcss

# Manual Installation
Download from our releases page
and include in your project`,
  apiReference: `# API Reference

## Variables

variables are declared using the $ symbol, making it easy to store reusable values for colors, 
sizes, and other design tokens. Variables improve consistency and simplify updates 
by allowing you to define values in one place and reference them throughout your styles.

$primary-color: #3498db;
$secondary-color: #2ecc71;
$padding: 16px;

.button {
  background-color: $primary-color;
  padding: $padding;
  border: 2px solid $secondary-color;
}


------------------------------------------
Snippets in SparkCSS are reusable blocks of styles that simplify 
and streamline your workflow. Using the @snippet directive, 
you can define styles with parameters for dynamic customization. 
Snippets can be applied anywhere in your stylesheet using the @apply directive, 
enabling modular, consistent, and maintainable CSS.

## Snippet
@snippet: button($bgColor, $padding) {
  background-color: $bgColor;
  padding: $padding;
  border: none;
  border-radius: 5px;
}

.button-primary {
  @apply button(#3498db, 10px);
}
------------------------------------------

## Functions
@function name($param) {
  @return $result;
  }

------------------------------------------
## Directives
Directives in SparkCSS are powerful tools that enhance the functionality 
and flexibility of your CSS. They allow you to define reusable patterns, 
manage variables, scope styles, and even handle dynamic logic. Some of these include:

@snippet is used to create usable styles
@snippet: card($bgColor) {
  background-color: $bgColor;
  padding: 1rem;
  border-radius: 8px;
}
------------------------------------------

.card {
  @apply card(#f5f5f5);
}

@palette is used to create and manage color themes for consistent design.
@palette: theme {
  primary: #3498db;
  secondary: #2ecc71;
}

------------------------------------------

@scope is used to Isolate styles to prevent class name conflicts by scoping 
them under a namespace.
@scope: button {
  .primary {
    background-color: #3498db;
  }
}
------------------------------------------

@array is used to group together a collection of values.
@array: paddingValues [10px, 20px, 30px];

------------------------------------------

Directives simplify complex styling, reduce repetition, and make your CSS more dynamic and maintainable. They are the backbone of SparkCSS's ability to create scalable and developer-friendly styles.

`,
};

const Documentation = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
              >
                Documentation
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                SparkCSS Documentation
              </h1>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Everything you need to know about using SparkCSS in your
                projects.
              </p>
            </div>

            <Tabs defaultValue="quickStart" className="w-full doc-container">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/50">
                <TabsTrigger value="quickStart">Quick Start</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="apiReference">API Reference</TabsTrigger>
              </TabsList>

              <TabsContent value="quickStart">
                <Card className="bg-slate-800/50 border-slate-700 tabs-container">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none tabs-inner">
                      <pre className=" overflow-x-auto">
                        {sections.quickStart}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="installation">
                <Card className="bg-slate-800/50 border-slate-700 tabs-container">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <pre className="overflow-x-auto">
                        {sections.installation}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apiReference">
                <Card className="bg-slate-800/50 border-slate-700 tabs-container">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <pre className="overflow-x-auto">
                        {sections.apiReference}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
