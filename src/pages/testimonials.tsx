import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  author: string;
  role: string;
  company: string;
  companyLogo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    author: "David Miller",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=TC",
    content:
      "SparkCSS has revolutionized our development workflow. The combination of utility classes and SCSS features is exactly what we needed. Build times are faster, and our team is more productive than ever.",
    rating: 5,
  },
  {
    author: "Lisa Chen",
    role: "UI/UX Designer",
    company: "DesignHub",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=DH",
    content:
      "As a designer who codes, SparkCSS gives me the flexibility I need to implement designs exactly as envisioned. The utility classes make quick adjustments a breeze, while the SCSS features allow for complex design systems.",
    rating: 4,
  },
  {
    author: "James Wilson",
    role: "Tech Lead",
    company: "StartupX",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=SX",
    content:
      "We migrated our entire platform to SparkCSS and haven't looked back. The documentation is excellent, the community is helpful, and the features are exactly what modern web development needs.",
    rating: 5,
  },
  {
    author: "Sarah Thompson",
    role: "Frontend Architect",
    company: "WebScale",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=WS",
    content:
      "The power of SparkCSS lies in its flexibility. We can use utility classes for rapid prototyping and then refactor into maintainable components using its SCSS features. It's the best of both worlds.",
    rating: 5,
  },
  {
    author: "Michael Brown",
    role: "Lead Developer",
    company: "DevForce",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=DF",
    content:
      "SparkCSS has become an essential tool in our development stack. Its performance optimizations and developer experience features have significantly improved our workflow.",
    rating: 5,
  },
  {
    author: "Emily Davis",
    role: "Product Designer",
    company: "InnovateLab",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=IL",
    content:
      "The integration of design tokens and utility classes in SparkCSS makes maintaining consistent design systems a breeze. It's transformed how we approach CSS architecture.",
    rating: 5,
  },
];

const TestimonialsPage = () => {
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
                Testimonials
              </Badge>
              <h1 className="text-4xl font-bold mb-6">What Developers Say</h1>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Discover why developers and teams choose SparkCSS for their
                projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="w-12 h-12 rounded-full bg-slate-700"
                    />
                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
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

export default TestimonialsPage;
