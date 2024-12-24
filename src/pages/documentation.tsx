import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
$variable-name: value;

## Mixins
@mixin name($param) {
  // mixin content
}

## Functions
@function name($param) {
  @return $result;
}

## Directives
@include name(param);
@extend .class;`,
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

            <Tabs defaultValue="quickStart" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/50">
                <TabsTrigger value="quickStart">Quick Start</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="apiReference">API Reference</TabsTrigger>
              </TabsList>

              <TabsContent value="quickStart">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <pre className="bg-slate-900/50 p-4 rounded-lg text-green-400 overflow-x-auto">
                        {sections.quickStart}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="installation">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <pre className="bg-slate-900/50 p-4 rounded-lg text-green-400 overflow-x-auto">
                        {sections.installation}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apiReference">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <pre className="bg-slate-900/50 p-4 rounded-lg text-green-400 overflow-x-auto">
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
