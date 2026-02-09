'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Artisan Furniture
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium">
              Ready to Buy
            </Link>
            <Link href="/bespoke" className="text-gray-700 hover:text-gray-900 font-medium">
              Bespoke
            </Link>
            <Link href="/diy-store" className="text-gray-700 hover:text-gray-900 font-medium">
              DIY Store
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-gray-900 font-medium">
              Marketplace
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium">
                Ready to Buy
              </Link>
              <Link href="/bespoke" className="text-gray-700 hover:text-gray-900 font-medium">
                Bespoke
              </Link>
              <Link href="/diy-store" className="text-gray-700 hover:text-gray-900 font-medium">
                DIY Store
              </Link>
              <Link href="/marketplace" className="text-gray-700 hover:text-gray-900 font-medium">
                Marketplace
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
