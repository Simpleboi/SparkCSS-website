import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  githubUrl: string;
}

interface TeamSectionProps {
  members?: TeamMember[];
}

export default function TeamSection({
  members = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      githubUrl: "https://github.com",
    },
    {
      name: "Michael Chen",
      role: "Core Contributor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      githubUrl: "https://github.com",
    },
    {
      name: "Emma Wilson",
      role: "Documentation Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      githubUrl: "https://github.com",
    },
    {
      name: "Alex Rodriguez",
      role: "UI/UX Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      githubUrl: "https://github.com",
    },
  ],
}: TeamSectionProps) {
  return (
    <section className="py-16 px-4 bg-background w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The talented developers and designers behind SparkCSS, working
            together to create the best CSS preprocessor experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(member.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
