"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CountdownTimer from "@/components/ui/custom/CountdownTimer";
import { Play, Heart, Users, Trophy, Star } from "lucide-react";

export default function HomePage() {
  // Sample photos for gallery - using placeholder images
  const galleryPhotos = [
    "/api/placeholder/300/200",
    "/api/placeholder/300/200", 
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sigurno",
      description: "Sigurno okruženje za djecu",
      color: "text-dispet-pink",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Zabavno",
      description: "Zabavne aktivnosti za sve",
      color: "text-dispet-blue",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Edukativno",
      description: "Učenje kroz igru",
      color: "text-dispet-yellow",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Kvalitetno",
      description: "Profesionalni pristup",
      color: "text-dispet-green",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 min-h-[80vh] flex items-center">
        {/* Floating geometric shapes - matching original design */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diamond shape at top */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-500 rotate-45"></div>
          
          {/* Green curved shape - left side */}
          <div className="absolute top-48 left-20 w-24 h-16 bg-green-400 rounded-full transform rotate-45"></div>
          
          {/* Red/pink oval - right side */}
          <div className="absolute top-32 right-20 w-20 h-12 bg-red-400 rounded-full transform -rotate-12"></div>
          
          {/* Small circles */}
          <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full"></div>
          
          {/* Cyan curved shape - bottom right */}
          <div className="absolute bottom-40 right-16 w-16 h-8 bg-cyan-400 rounded-full transform rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              {/* "Iskusi" text at top - matching original */}
              <div className="mb-4">
                <span className="text-cyan-400 text-lg font-semibold">Iskusi</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
                Prvi Dišpet
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-orange-400 font-bold">
                03.09. 2024
              </p>
              <p className="text-lg mb-8 text-white/90">
                na terenima u<br />
                Vukovarskoj
              </p>
              
              {/* Countdown Timer */}
              <div className="mb-8">
                <CountdownTimer 
                  targetDate="2025-09-25T10:00:00"
                  title="Prvi Dišpet"
                />
              </div>

              <Button 
                size="lg" 
                className="bg-dispet-pink hover:bg-dispet-pink/90 text-white rounded-full px-8 py-4 text-lg font-semibold"
              >
                Prijavi se
              </Button>
            </div>

            {/* Right side - Roko Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* White circular background for Roko - matching original */}
                <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/roko_web.gif" 
                    alt="Roko mascot" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
                
                {/* Small decorative elements around Roko */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-12 left-8 w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave - cloud dividers (keeping for now as requested to leave for later) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-dispet-navy mb-4">
              Sportske aktivnosti za djecu
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nudimo sigurno i zabavno okruženje gdje djeca mogu učiti, igrati se i razvijati svoje sportske vještine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`${feature.color} mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-dispet-navy">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-dispet-navy mb-4">
              Galerija slika
            </h2>
            <p className="text-gray-600 text-lg">
              Pogledajte kako se zabavljamo na našim aktivnostima
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="aspect-square bg-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-dispet-blue/20 to-dispet-pink/20 flex items-center justify-center">
                  <span className="text-4xl">🏃‍♂️</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-dispet-navy mb-6">
                Tko smo mi?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Dišpet je organizacija posvećena pružanju kvalitetnih sportskih programa za djecu. 
                Naš cilj je stvaranje sigurnog i zabavnog okruženja gdje djeca mogu razvijati svoje 
                fizičke sposobnosti, učiti timski rad i steći nova prijateljstva.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Kroz raznolike sportske aktivnosti, poticamo zdrav način života i pozitivne vrijednosti 
                koje će djeci koristiti kroz cijeli život.
              </p>
              <Button className="bg-dispet-blue hover:bg-dispet-blue/90 text-white rounded-full px-8">
                Saznaj više
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-dispet-teal to-dispet-blue rounded-3xl flex items-center justify-center">
                <div className="text-8xl">⚽</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-dispet-yellow rounded-full flex items-center justify-center">
                <span className="text-2xl">🏀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-dispet-pink rounded-full flex items-center justify-center">
                <span className="text-2xl">🎾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-teal-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Pridruži se Dišpet zajednici!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ne propusti priliku da tvoje dijete bude dio naše sportske obitelji. 
            Prijavi se danas i osiguraj mjesto na našim programima.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-dispet-navy hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold"
          >
            Prijavi se sada
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
