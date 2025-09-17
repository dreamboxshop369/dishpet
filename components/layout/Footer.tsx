"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Cloud-like wave decoration */}
      <div className="absolute top-0 left-0 w-full h-32">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            className="fill-dispet-purple"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="gradient-purple-blue text-white pt-32 pb-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8">
              <img src="/typo-logo-white.png" alt="Dišpet" className="h-18 w-auto mb-4" />
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-white/80 text-sm">
              Copyright © 2024 Dišpet
            </div>
          </div>
        </div>

        {/* Roko mascot at bottom left */}
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
          <img 
            src="/roko_web_wave_orig_2.gif" 
            alt="Roko mascot" 
            className="w-48 h-48 object-contain" 
          />
        </div>
      </div>
    </footer>
  );
}
