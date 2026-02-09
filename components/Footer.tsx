import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Artisan Furniture</h3>
            <p className="text-sm">
              Transforming forgotten pieces into treasured furniture. Each item is unique,
              handcrafted, and built to last.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white">Ready to Buy</Link></li>
              <li><Link href="/bespoke" className="hover:text-white">Bespoke Services</Link></li>
              <li><Link href="/diy-store" className="hover:text-white">DIY Store</Link></li>
              <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Artisan Furniture Creations. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
