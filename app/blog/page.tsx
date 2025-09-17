"use client";

import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Dišpet – Dan sporta i zabave za djecu",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "29. prosinca 2022",
      author: "Admin",
      image: "/api/placeholder/400/250",
      slug: "dispet-dan-sporta-i-zabave-za-djecu"
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" style={{backgroundImage: "url(/blog-header-final.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
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
              <h1 className="font-display text-4xl md:text-6xl mb-6">Blog</h1>
              <p className="text-xl text-white/90">
                Pratite naše najnovije vijesti, savjete i priče iz svijeta dječjeg sporta
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

      {/* Breadcrumb */}

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="mb-8 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-video md:aspect-square bg-gradient-to-br from-dispet-blue/20 to-dispet-pink/20 flex items-center justify-center">
                    <span className="text-6xl">🏃‍♂️</span>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="font-bold text-2xl text-dispet-navy mb-4 hover:text-dispet-pink transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-dispet-pink hover:text-dispet-pink/80 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
