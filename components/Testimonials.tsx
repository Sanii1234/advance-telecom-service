"use client";

import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote, MapPin, Building2, Home, Factory } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run animation only once
    threshold: 0.2, // Start when 20% of the section is visible
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechCorp London",
      location: "London, UK",
      rating: 5,
      text: "Advance Telecom transformed our office connectivity. The installation was seamless and the speeds are incredible. Our productivity has increased significantly.",
      avatar: "SJ",
      type: "business",
    },
    {
      name: "Ahmed Hassan",
      role: "Homeowner",
      company: "Residential Customer",
      location: "Manchester, UK",
      rating: 5,
      text: "Best internet service I've ever had! Gaming and streaming are flawless. The technicians were professional and completed everything in one day.",
      avatar: "AH",
      type: "residential",
    },
    {
      name: "Dr. Emily Wilson",
      role: "Practice Manager",
      company: "Wilson Medical Centre",
      location: "Birmingham, UK",
      rating: 5,
      text: "Reliable connection is crucial for our medical practice. Advance Telecom delivers consistent performance and excellent support when we need it.",
      avatar: "EW",
      type: "medical",
    },
    {
      name: "Raj Patel",
      role: "Business Owner",
      company: "Patel Manufacturing",
      location: "Leeds, UK",
      rating: 5,
      text: "Their business solution scaled perfectly with our growth. From 10 employees to 100+, the network has never failed us. Outstanding service!",
      avatar: "RP",
      type: "manufacturing",
    },
  ];

  const stats = [
    { number: 1000, suffix: "+", label: "Happy Customers", icon: Home },
    { number: 50, suffix: "+", label: "Cities Covered", icon: MapPin },
    { number: 99.9, suffix: "%", label: "Uptime Guarantee", icon: Building2 },
    { number: 24, suffix: "/7", label: "Technical Support", icon: Factory },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "business":
        return "bg-blue-100 text-blue-700";
      case "residential":
        return "bg-green-100 text-green-700";
      case "medical":
        return "bg-purple-100 text-purple-700";
      case "manufacturing":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-[#004AAD] text-[#004AAD] px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </Badge>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted by Thousands
            <span className="block text-[#FF7A00]">Across the UK</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers say about
            our fiber optic installation services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#004AAD] to-[#0066CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#004AAD] mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden"
            >
              <div className="p-8">
                <Quote className="w-10 h-10 text-[#FF7A00]/20 mb-4" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Badge
                    className={`${getTypeColor(testimonial.type)} text-xs`}
                  >
                    {testimonial.type.charAt(0).toUpperCase() +
                      testimonial.type.slice(1)}
                  </Badge>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-[#004AAD] to-[#0066CC] text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-[#FF7A00]">
                      {testimonial.company}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD]/5 to-[#FF7A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
