"use client";

import React from "react";
import { Button } from "./ui/button";
import { Play, ArrowRight, Zap, Shield, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import headerPic from "./ui/header-pic.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#004AAD] to-[#0066CC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzIi8+CjwvZz4KPC9nPgo8L3N2Zz4K')]"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Zap className="w-4 h-4 text-[#FF7A00] mr-2" />
              <span className="text-sm font-medium">
                Ultra-Fast Fiber Installation
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Lightning-Fast
              <span className="block text-[#FF7A00]">Fiber Optic</span>
              Solutions
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              Transform your connectivity with our premium fiber optic
              installation services across the UK and Pakistan. Experience
              unparalleled speed and reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7A00] mb-1">
                  1000+
                </div>
                <div className="text-sm text-white/80">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7A00] mb-1">
                  99.9%
                </div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7A00] mb-1">
                  24/7
                </div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e56900] text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#004AAD] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#FF7A00]" />
                <span className="text-sm text-white/80">
                  Certified Technicians
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[#FF7A00]" />
                <span className="text-sm text-white/80">5-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src={headerPic.src}
                alt="Fiber optic cables and technology"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#004AAD]/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Quick Install
                  </div>
                  <div className="text-sm text-gray-600">
                    Same day service available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
