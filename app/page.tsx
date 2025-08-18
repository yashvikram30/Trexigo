"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Navigation,
  Shield,
  DollarSign,
  Zap,
  Star,
  Download,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bike,
  Car,
  Crown,
  Check,
  Smartphone,
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react"

const vehicleTypes = [
  {
    id: "bike",
    name: "SwiftBike",
    icon: Bike,
    price: 45,
    time: "5-8 min",
    description: "Quick & eco-friendly",
  },
  {
    id: "auto",
    name: "SwiftAuto",
    icon: Car,
    price: 85,
    time: "8-12 min",
    description: "Comfortable ride",
  },
  {
    id: "car",
    name: "SwiftCar",
    icon: Car,
    price: 150,
    time: "10-15 min",
    description: "Premium comfort",
  },
  {
    id: "premium",
    name: "SwiftLux",
    icon: Crown,
    price: 280,
    time: "12-18 min",
    description: "Luxury experience",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    rating: 5,
    comment: "SwiftGO has transformed my daily commute. Always reliable and professional drivers.",
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    rating: 5,
    comment: "Best ride-booking experience. Clean vehicles, fair pricing, always on time.",
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    rating: 5,
    comment: "Safe, reliable, and affordable. My go-to choice for business meetings.",
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
  },
]

export default function BookingFirstRidePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [destination, setDestination] = useState("")
  const [pickup, setPickup] = useState("Current Location")
  const [selectedVehicle, setSelectedVehicle] = useState("car")
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [isBooking, setIsBooking] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showSchedule, setShowSchedule] = useState(false)

  const vehicle = vehicleTypes.find((v) => v.id === selectedVehicle)
  const estimatedPrice = vehicle ? vehicle.price : 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleBooking = async () => {
    if (!destination.trim()) return

    setIsBooking(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsBooking(false)
    setShowBookingModal(true)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-mint-50/30">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-emerald-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-mint-200/20 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 w-full bg-white/60 backdrop-blur-xl border-b border-emerald-100/30 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                SwiftGO
              </h1>
            </div>

            {/* Minimal Right Side - Sign In Only */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                className="text-charcoal-600 hover:text-emerald-600 font-medium px-4 py-2 rounded-full transition-all duration-300"
              >
                Sign In
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-100/30">
            <div className="px-6 py-4">
              <Button variant="ghost" className="text-charcoal-600 hover:text-emerald-600 font-medium">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* UBER-INSPIRED HERO SECTION */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Left side - Booking Form (60%) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Large Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight">
                  Go anywhere with{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                    SwiftGO
                  </span>
                </h1>
              </div>

              {/* Booking Form */}
              <div className="space-y-6 max-w-lg">
                {/* Location Inputs */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-charcoal-900 rounded-full"></div>
                    </div>
                    <Input
                      placeholder="Pickup location"
                      className="h-14 text-base pl-10 pr-12 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-charcoal-900 focus:ring-0 transition-all duration-200"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Navigation className="h-4 w-4 text-charcoal-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-charcoal-900 rounded-sm"></div>
                    </div>
                    <Input
                      placeholder="Dropoff location"
                      className="h-14 text-base pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-charcoal-900 focus:ring-0 transition-all duration-200"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>

                {/* Date and Time Selectors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full h-14 justify-start text-left font-normal bg-gray-50 border-gray-300 hover:bg-white hover:border-charcoal-900 rounded-lg"
                    >
                      <Calendar className="mr-3 h-4 w-4 text-charcoal-900" />
                      <div>
                        <div className="text-xs text-charcoal-500 uppercase tracking-wide">Date</div>
                        <div className="text-sm font-medium text-charcoal-900">Today</div>
                      </div>
                    </Button>
                  </div>

                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full h-14 justify-start text-left font-normal bg-gray-50 border-gray-300 hover:bg-white hover:border-charcoal-900 rounded-lg"
                    >
                      <div className="mr-3 w-4 h-4 bg-charcoal-900 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-xs text-charcoal-500 uppercase tracking-wide">Time</div>
                        <div className="text-sm font-medium text-charcoal-900 flex items-center">
                          Now
                          <ChevronRight className="ml-1 h-3 w-3 rotate-90" />
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-2">
                  <Button
                    className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                    onClick={handleBooking}
                    disabled={isBooking || !destination.trim()}
                  >
                    {isBooking ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Booking...</span>
                      </div>
                    ) : (
                      "See prices"
                    )}
                  </Button>

                  <button className="text-charcoal-600 hover:text-charcoal-900 text-sm font-medium transition-colors duration-200">
                    Log in to see your recent activity
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Hero Illustration (40%) */}
            <div className="lg:col-span-2 relative md:mt-28">
              <div className="relative">
                <img
                  src="/taxi2.png"
                  alt="Person getting into a ride in urban setting"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Ride Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-3">Choose your ride</h2>
              <p className="text-charcoal-600">Select the option that works best for you</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Instant rides",
                  subtitle: "Available now",
                  description: "Request a ride and get picked up by a nearby driver",
                  features: ["Available 24/7", "Quick pickup", "Real-time tracking"],
                  cta: "Ride now",
                  popular: false,
                },
                {
                  title: "Schedule rides",
                  subtitle: "Plan ahead",
                  description: "Reserve a ride up to 30 days in advance for important trips",
                  features: ["Book in advance", "Guaranteed pickup", "No surge pricing"],
                  cta: "Schedule",
                  popular: true,
                },
                {
                  title: "Intercity travel",
                  subtitle: "Long distance",
                  description: "Comfortable rides to nearby cities and outstation destinations",
                  features: ["Professional drivers", "AC vehicles", "Flexible stops"],
                  cta: "Book intercity",
                  popular: false,
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className={`relative bg-white border rounded-xl p-6 hover:shadow-md transition-shadow duration-200 ${
                    option.popular ? "border-emerald-500 shadow-sm" : "border-gray-200"
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-1">{option.title}</h3>
                    <p className="text-sm text-emerald-600 font-medium mb-3">{option.subtitle}</p>
                    <p className="text-charcoal-600 text-sm leading-relaxed mb-4">{option.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-charcoal-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-colors duration-200 ${
                      option.popular
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "bg-gray-100 text-charcoal-900 hover:bg-gray-200"
                    }`}
                  >
                    {option.cta}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-charcoal-500">
                Need help choosing?{" "}
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">Contact support</button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Quick Rides & Driver Earnings Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Quick Rides Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
                  Get Quick Rides, <span className="text-emerald-600">Low Fares</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full"></div>
                <p className="text-xl text-charcoal-600 leading-relaxed">
                  In SwiftGO we ensure our customers get rides quickly at the most affordable prices.
                </p>
              </div>

              <Button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                Book a ride
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Right side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/image.png?height=200&width=200&text=Auto+Rickshaw"
                    alt="Auto rickshaw ride"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/booking.png?height=200&width=200&text=Bike+Ride"
                    alt="Bike ride"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/driver.png?height=200&width=200&text=Delivery"
                    alt="Delivery service"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/road.png?height=200&width=200&text=Car+Ride"
                    alt="Car ride"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Driver Earnings Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - First on mobile, Right side on desktop */}
            <div className="space-y-8 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
                  Flexible Hours & <span className="text-emerald-600">High Earnings</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full"></div>
                <p className="text-xl text-charcoal-600 leading-relaxed">
                  Join as a SwiftGO captain and earn on your own terms. Drive whenever you want.
                </p>
              </div>

              <Button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start Earning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Image Grid - Second on mobile, Left side on desktop */}
            <div className="grid grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/users.png?height=200&width=200&text=Driver+Earnings"
                    alt="Driver with earnings"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/taxi-user.png?height=200&width=200&text=Team+Drivers"
                    alt="Team of drivers"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/won.png?height=200&width=200&text=Auto+Driver"
                    alt="Auto rickshaw driver"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <img
                    src="/travel2.png?height=200&width=200&text=Car+Driver"
                    alt="Car driver with earnings"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-900 mb-4">
              Why Choose <span className="text-emerald-600">SwiftGO</span>
            </h2>
            <p className="text-lg text-charcoal-600">Premium rides, unmatched service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Verified drivers, real-time tracking, and 24/7 safety monitoring.",
              },
              {
                icon: DollarSign,
                title: "Fair Pricing",
                description: "Transparent pricing with no hidden fees. Premium service at competitive rates.",
              },
              {
                icon: Zap,
                title: "Quick Booking",
                description: "Book your ride in seconds with our streamlined interface.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden transform hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">{feature.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 to-mint-50/50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-900 mb-4">
              What Our <span className="text-emerald-600">Riders</span> Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTestimonial}
                    className="text-emerald-600 hover:bg-emerald-100 rounded-full p-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <div className="text-center flex-1 max-w-2xl">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mx-0.5" />
                      ))}
                    </div>

                    <blockquote className="text-xl text-charcoal-700 mb-6 italic leading-relaxed">
                      "{testimonials[currentTestimonial].comment}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-3">
                      <img
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 h-12 rounded-full border-2 border-emerald-100"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-charcoal-900">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-charcoal-500">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTestimonial}
                    className="text-emerald-600 hover:bg-emerald-100 rounded-full p-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-emerald-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-charcoal-800 text-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Get the <span className="text-emerald-400">SwiftGO App</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Download our app for the complete SwiftGO experience with exclusive features.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Navigation, text: "Real-time GPS tracking" },
                  { icon: Smartphone, text: "One-tap booking" },
                  { icon: Shield, text: "Enhanced safety features" },
                  { icon: Star, text: "Rewards program" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-200">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-white text-charcoal-900 hover:bg-gray-100 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button className="bg-white text-charcoal-900 hover:bg-gray-100 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4 text-emerald-400 flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Our Locations
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  We're available in major cities. Visit our offices or find service areas near you.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5047842298834!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f19e1b2d61%3A0x2b71a7e8b0dc2c37!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-2xl"
                  title="SwiftGO Service Areas"
                ></iframe>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Service available in Mumbai, Delhi, Bangalore, Chennai, Pune and expanding to more cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Success Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md bg-white rounded-3xl border-0 shadow-2xl">
          <DialogHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-xl font-bold text-charcoal-900">Ride Booked!</DialogTitle>
            <DialogDescription className="text-charcoal-600">
              Your ride has been successfully confirmed
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-emerald-50 p-4 rounded-2xl space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal-600">Booking ID</span>
                <span className="font-semibold">TX{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal-600">Vehicle</span>
                <span className="font-semibold">{vehicle?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal-600">ETA</span>
                <span className="font-semibold text-emerald-600">{vehicle?.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-600">Total</span>
                <span className="font-bold text-emerald-600 text-lg">₹{estimatedPrice}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setShowBookingModal(false)}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl py-3 font-semibold"
          >
            Track Your Ride
          </Button>
        </DialogContent>
      </Dialog>

      {/* Footer with Google Maps */}

    </div>
  )
}
