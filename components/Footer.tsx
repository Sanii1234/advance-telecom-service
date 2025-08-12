'use client'

import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Clock,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Residential Fiber", href: "#services" },
      { name: "Business Solutions", href: "#services" },
      { name: "Network Infrastructure", href: "#services" },
      { name: "Maintenance & Repair", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "News & Updates", href: "#news" }
    ],
    support: [
      { name: "Customer Support", href: "#contact" },
      { name: "Technical Help", href: "#support" },
      { name: "Installation Guide", href: "#guide" },
      { name: "Troubleshooting", href: "#troubleshooting" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Data Protection", href: "#data-protection" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ]

  const certifications = [
    { icon: Shield, text: "ISO 27001 Certified" },
    { icon: Award, text: "Ofcom Approved" },
    { icon: Clock, text: "24/7 Monitoring" }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Advance Telecom Services
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Leading provider of fiber optic installation services across the UK and Pakistan. 
                Connecting communities with ultra-fast, reliable internet solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF7A00]" />
                <span className="text-gray-300">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF7A00]" />
                <span className="text-gray-300">info@advancetelecom.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF7A00] mt-0.5" />
                <span className="text-gray-300">123 Technology Park, London, EC1A 1BB</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#FF7A00] hover:bg-[#e56900] text-white font-semibold">
                Get Quote Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Live Chat
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Certifications */}
            <div className="flex flex-wrap items-center space-x-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <cert.icon className="w-4 h-4 text-[#FF7A00]" />
                  <span className="text-sm">{cert.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
                />
                <Button 
                  size="sm"
                  className="bg-[#FF7A00] hover:bg-[#e56900] rounded-l-none px-4"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Advance Telecom Services. All rights reserved. | 
              <span className="ml-1">Company Registration: 12345678</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 hover:bg-[#FF7A00] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer