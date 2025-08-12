'use client'

import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Bolt, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Zap,
  CheckCircle2,
  TrendingUp
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Features = () => {
  const features = [
    {
      icon: Bolt,
      title: "Ultra-Fast Speeds",
      description: "Up to 1GB speeds with consistent performance across all devices",
      stat: "1000 Mbps",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "99.9% Reliability", 
      description: "Enterprise-grade infrastructure with guaranteed uptime",
      stat: "99.9%",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      stat: "24/7",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians with 10+ years experience",
      stat: "50+",
      color: "from-purple-400 to-pink-500"
    }
  ]

  const benefits = [
    "Free professional installation by certified technicians",
    "No data caps or throttling - unlimited usage",
    "Advanced security with built-in firewall protection",
    "Future-proof technology that scales with your needs",
    "Local UK and Pakistan support teams",
    "Competitive pricing with transparent billing"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="border-[#004AAD] text-[#004AAD] px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Service
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Why Choose 
                <span className="block text-[#FF7A00]">Advance Telecom?</span>
              </h2>
              
              <p className="text-xl text-gray-600">
                With over a decade of experience, we've built a reputation for 
                delivering exceptional fiber optic solutions that exceed expectations.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#004AAD] mb-2">{feature.stat}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750711158632-5273ec9b9b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcm5ldCUyMGNvbm5lY3Rpdml0eXxlbnwxfHx8fDE3NTQ5MDg0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern office with high-speed internet connectivity"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#004AAD]/30 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <Card className="absolute -top-6 -right-6 bg-white shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">98% Satisfaction</div>
                  <div className="text-sm text-gray-600">Customer rating</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-red-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Same Day</div>
                  <div className="text-sm text-gray-600">Installation available</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features