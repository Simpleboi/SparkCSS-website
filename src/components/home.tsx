import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import AboutUs from "./landing/AboutUs";
import FeatureGrid from "./landing/FeatureGrid";
import Documentation from "./landing/Documentation";
import TeamSection from "./landing/TeamSection";
import TestimonialCarousel from "./landing/TestimonialCarousel";
import Footer from "./landing/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <FeatureGrid />
        <Documentation />
        <TeamSection />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
