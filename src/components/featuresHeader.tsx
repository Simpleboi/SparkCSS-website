import { Badge } from "@/components/ui/badge";

export const FeaturesHeader = () => {
  return (
    <div className="text-header">
      <Badge
        variant="secondary"
        className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
      >
        Core Features
      </Badge>
      <h1 className="text-4xl font-bold mb-6">
        Powerful Features for Modern CSS
      </h1>
      <p>
        Explore the core features that make SparkCSS a powerful tool for modern
        web development.
      </p>
    </div>
  );
};
