import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface DocumentationProps {
  sections?: {
    quickStart: string;
    installation: string;
    apiReference: string;
  };
}

const Documentation = ({
  sections = {
    quickStart: `# Quick Start Guide
1. Install SparkCSS
2. Import into your project
3. Start using SparkCSS features`,
    installation: `npm install sparkcss
yarn add sparkcss
pnpm add sparkcss`,
    apiReference: `## API Reference

### Variables
$variable-name: value;

### Mixins
@mixin name($param) {
  // mixin content
}

### Functions
@function name($param) {
  @return $result;
}

### Directives
@include name(param);
@extend .class;
`
,
  },
}: DocumentationProps) => {
  return (
    <div className="w-full min-h-[800px] bg-white p-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Documentation</h2>

        <Tabs defaultValue="quickStart" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="quickStart">Quick Start</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="apiReference">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="quickStart">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <pre className="bg-gray-100 p-4 rounded-lg">
                    {sections.quickStart}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <pre className="bg-gray-100 p-4 rounded-lg font-mono">
                    {sections.installation}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apiReference">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <pre className="bg-gray-100 p-4 rounded-lg">
                    {sections.apiReference}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
