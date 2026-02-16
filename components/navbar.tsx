"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Epitome Creatives — home" className="flex items-center">
            <span className="text-2xl font-bold hover:scale-105 transition-transform" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">EPITOME</span>
              <span className="ml-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">CREATIVES</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-purple-500 transition-colors">
              Home
            </Link>
            <Link href="/product-photography" className="text-gray-600 hover:text-purple-500 transition-colors">
              Product Photography
            </Link>
            <Link href="/web-design" className="text-gray-600 hover:text-purple-500 transition-colors">
              Web Design
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-500 transition-colors">
              Contact
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-purple-500 transition-colors">
                Home
              </Link>
              <Link href="/product-photography" className="text-gray-600 hover:text-purple-500 transition-colors">
                Product Photography
              </Link>
              <Link href="/web-design" className="text-gray-600 hover:text-purple-500 transition-colors">
                Web Design
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-500 transition-colors">
                Contact
              </Link>

            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
