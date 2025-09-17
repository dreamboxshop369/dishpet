"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Naslovnica", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-dispet-blue text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+385 99 341 3597</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@dispet.fun</span>
            </div>
          </div>
          <div className="text-sm">Follow Us</div>
        </div>
      </div>

      {/* Main navigation - simplified like original */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/dispet-logo-symbol-bg.png" alt="Dišpet Logo" className="h-16 w-auto" />
            </Link>

            {/* Hamburger Menu Button - always visible like original */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-dispet-pink hover:bg-dispet-pink/90 text-white rounded-full w-12 h-12"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white border-none">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Close button */}
                  <div className="flex justify-end mb-4">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  {/* Navigation items */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* CTA Button */}
                  <Button 
                    className="bg-white text-dispet-navy hover:bg-white/90 rounded-full mt-8 py-3 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Prijavi se
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
