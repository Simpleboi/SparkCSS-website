import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications. Lead developer of SparkCSS core features.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Core Contributor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    bio: "Frontend specialist focused on developer experience and performance optimization. Creator of SparkCSS's utility system.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Emma Wilson",
    role: "Documentation Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    bio: "Technical writer and developer advocate. Passionate about making complex features accessible through clear documentation.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Alex Rodriguez",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    bio: "Design systems expert with a focus on creating intuitive developer tools and beautiful user interfaces.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
              >
                Our Team
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                Meet the SparkCSS Team
              </h1>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                We're a passionate team of developers and designers working
                together to create the best CSS preprocessor experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 p-6"
                >
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h2>
                      <p className="text-indigo-400 mb-3">{member.role}</p>
                      <p className="text-slate-300 mb-4">{member.bio}</p>
                      <div className="flex space-x-2">
                        {member.social.github && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-300 hover:text-white"
                            onClick={() =>
                              window.open(member.social.github, "_blank")
                            }
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {member.social.twitter && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-300 hover:text-white"
                            onClick={() =>
                              window.open(member.social.twitter, "_blank")
                            }
                          >
                            <Twitter className="h-4 w-4" />
                          </Button>
                        )}
                        {member.social.linkedin && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-300 hover:text-white"
                            onClick={() =>
                              window.open(member.social.linkedin, "_blank")
                            }
                          >
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
