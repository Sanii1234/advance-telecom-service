'use client'

import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { 
  Network, 
  Home, 
  Building, 
  Wrench, 
  Headphones, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Fiber",
      description: "High-speed fiber internet for your home with speeds up to 1GB.",
      features: ["Free installation", "24/7 support", "No data caps"],
      price: "From £29.99/month"
    },
    {
      icon: Building,
      title: "Business Solutions",
      description: "Enterprise-grade fiber connectivity for businesses of all sizes.",
      features: ["Dedicated bandwidth", "SLA guarantee", "Priority support"],
      price: "Custom pricing"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Complete network design and installation services.",
      features: ["Custom design", "Scalable solutions", "Professional installation"],
      price: "Quote on request"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Ongoing maintenance and rapid repair services.",
      features: ["Preventive maintenance", "Emergency repairs", "Equipment upgrades"],
      price: "Service contracts available"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#004AAD]/10 rounded-full px-6 py-2 mb-6">
            <Network className="w-4 h-4 text-[#004AAD] mr-2" />
            <span className="text-sm font-medium text-[#004AAD]">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Fiber Optic
            <span className="block text-[#FF7A00]">Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential installations to enterprise network infrastructure, 
            we provide comprehensive fiber optic services across the UK and Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#004AAD] to-[#0066CC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-lg font-semibold text-[#FF7A00] mb-4">{service.price}</div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#004AAD] to-[#0066CC] p-8 lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563884705074-7c8b15f16295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NTQ5MDgzODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Network installation technician"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 text-center text-white">
            <Shield className="w-16 h-16 text-[#FF7A00] mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Upgrade Your Connection?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and personalized quote for your fiber optic installation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e56900] text-white font-semibold px-8 py-4 rounded-lg shadow-xl"
              >
                <Headphones className="mr-2 w-5 h-5" />
                Call Now: 0800 123 4567
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#004AAD] font-semibold px-8 py-4 rounded-lg"
              >
                Request Quote Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services