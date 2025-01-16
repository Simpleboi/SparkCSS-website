import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import "../styles/TeamStyles/team.scss";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Nathaniel Paz",
    role: "Creator / Lead Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Founder of SparkCSS. A passionate full-stack web developer with expertise in creating intuitive user interfaces and scalable backend solutions. Dedicated to innovation and empowering developers with tools that enhance productivity and creativity",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const TeamHeader = () => {
  return (
    <div className="header-container">
      <Badge
        variant="secondary"
        className="mb-4 bg-slate-800 text-indigo-400 hover:bg-slate-700"
      >
        Our Team
      </Badge>
      <h1 className="header-banner">Meet the SparkCSS Team</h1>
      <p className="text-slate-300 text-lg max-w-3xl mx-auto">
        We're a passionate team of developers and designers working together to
        create the best CSS preprocessor experience.
      </p>
    </div>
  );
};

export const TeamStaff = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <Card
          key={index}
          className="bg-slate-800/50 border-slate-700 p-6 team-card"
        >
          <div className="team-inner-container">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full"
            />
            <div className="name-container">
              <h2 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h2>
              <p className="text-indigo-400 mb-3">{member.role}</p>
              <p className="text-slate-300 mb-4">{member.bio}</p>
              <div className="icon-container">
                <a href="https://github.com/Simpleboi" target="_blank">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/n8.jsx/" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@N8DotJsx/videos"
                  target="_blank"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nathaniel-eureste-12641220a/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
                <a href="https://discord.gg/DCszF2VrSm" target="_blank">
                  <i className="bx bxl-discord-alt"></i>
                </a>
                <a href="https://n8jsx.com/" target="_blank">
                  <i className="bx bx-code-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <TeamHeader />
            <TeamStaff />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
