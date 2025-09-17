"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Poruka je uspješno poslana!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" style={{backgroundImage: "url(/contact-header-final.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-dispet-yellow/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-dispet-pink/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-dispet-green/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <h1 className="font-display text-4xl md:text-6xl mb-6">Kontakt</h1>
              <p className="text-xl text-white/90">
                Imate pitanja? Želite se prijaviti? Kontaktirajte nas!
              </p>
            </div>

            {/* Right side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-dispet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-dispet-navy mb-2">Telefon</h3>
                <p className="text-gray-600">+385 99 341 3597</p>
                <p className="text-gray-600">+385 99 341 3598</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-dispet-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-dispet-navy mb-2">Email</h3>
                <p className="text-gray-600">info@dispet.fun</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-dispet-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-dispet-navy mb-2">Adresa</h3>
                <p className="text-gray-600">Zagreb, HR</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl text-dispet-navy mb-2">Kontakt formular</h2>
              <p className="text-gray-600 mb-8">Pošaljite nam poruku i odgovorit ćemo vam što prije!</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-dispet-navy font-semibold">Ime *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-dispet-pink focus:ring-dispet-pink"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-dispet-navy font-semibold">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-dispet-pink focus:ring-dispet-pink"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-dispet-navy font-semibold">Predmet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-dispet-pink focus:ring-dispet-pink"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-dispet-navy font-semibold">Poruka *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-dispet-pink focus:ring-dispet-pink"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="bg-dispet-pink hover:bg-dispet-pink/90 text-white rounded-full px-8 py-3 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Mascot/Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-dispet-blue/10 to-dispet-pink/10 rounded-3xl flex items-center justify-center">
                  <img src="/roko_web.gif" alt="Roko mascot" className="w-64 h-64 object-contain" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-dispet-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-dispet-green rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-dispet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h2 className="font-display text-3xl text-dispet-navy mb-4">
                Pretplatite se na naš Newsletter
              </h2>
              <p className="text-gray-600">
                Budite u toku s najnovijim vijestima i događajima!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Vaša Email Adresa"
                className="flex-1 border-gray-300 focus:border-dispet-blue focus:ring-dispet-blue"
              />
              <Button className="bg-dispet-blue hover:bg-dispet-blue/90 text-white rounded-full px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
