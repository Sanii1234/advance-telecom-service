'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  Headphones
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "0800 123 4567",
      secondary: "Free from landlines & mobiles",
      action: "tel:08001234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@advancetelecom.co.uk",
      secondary: "We respond within 2 hours",
      action: "mailto:info@advancetelecom.co.uk"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+44 7xxx xxx xxx",
      secondary: "Instant support available",
      action: "https://wa.me/447xxxxxxxxx"
    }
  ]

  const locations = [
    {
      country: "United Kingdom",
      address: "123 Technology Park, London, EC1A 1BB",
      phone: "+44 20 1234 5678",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
    },
    {
      country: "Pakistan",
      address: "Tech Tower, Block A, Lahore, 54000",
      phone: "+92 42 1234 5678",
      hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#004AAD] text-[#004AAD] px-4 py-2 mb-6">
            <Headphones className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Get
            <span className="block text-[#FF7A00]">Connected?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact our expert team today for a free consultation and personalized quote. 
            We're here to help you find the perfect fiber optic solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Get Your Free Quote</CardTitle>
              <p className="text-gray-600">Fill out the form and we'll get back to you within 2 hours</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Fiber</option>
                    <option value="business">Business Solutions</option>
                    <option value="infrastructure">Network Infrastructure</option>
                    <option value="maintenance">Maintenance & Repair</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF7A00] hover:bg-[#e56900] text-white font-semibold py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
                
                {submitStatus === 'success' && (
                  <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Thank you! We'll contact you within 2 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Instant Help</h3>
              
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#004AAD] to-[#0066CC] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                        <a 
                          href={contact.action}
                          className="text-[#FF7A00] hover:text-[#e56900] font-medium transition-colors"
                        >
                          {contact.primary}
                        </a>
                        <p className="text-sm text-gray-600">{contact.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="border-0 bg-gradient-to-br from-[#004AAD] to-[#0066CC] text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-8 h-8 text-[#FF7A00]" />
                  <h4 className="text-xl font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-sm text-white/90">
                    <strong>24/7 Emergency Support</strong> available for existing customers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>
              
              {locations.map((location, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#FF7A00] rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{location.country}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-start">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            {location.address}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                            {location.phone}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                            {location.hours}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact