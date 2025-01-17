import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import AboutUs from "./landing/AboutUs";
import TestimonialCarousel from "./landing/TestimonialCarousel";
import Footer from "./landing/Footer";
import { NewFeatures } from "./landing/NewFeatures";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <NewFeatures />
        <AboutUs />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
