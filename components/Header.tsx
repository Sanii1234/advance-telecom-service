"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./ui/Advane-Telecom-Logo.png"; // keep this

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-[#004AAD] shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Image
                src={Logo}
                alt="Advance Telecom Logo"
                width={250} // adjust size
                height={100}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-['Inter',sans-serif] font-medium text-base hover:text-[#1E90FF] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA and WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-[#FF7A00] hover:bg-[#e56900] text-white font-medium px-6 py-2 rounded-lg shadow-md transition-colors duration-200">
              Get a Quote
            </Button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20ba5a] transition-colors duration-200"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-[#1E90FF] transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#004AAD] border-t border-[#1E90FF]/20">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white font-['Inter',sans-serif] font-medium text-base hover:text-[#1E90FF] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-3 px-3 py-2">
                <Button
                  className="bg-[#FF7A00] hover:bg-[#e56900] text-white font-medium px-6 py-2 rounded-lg shadow-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </Button>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#20ba5a] transition-colors duration-200"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
