import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Armchair, Paintbrush, ShoppingBag, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Unique Upcycled Furniture
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              One-of-a-kind pieces crafted with care. Transform your space with sustainable,
              artisan furniture that tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/products">Browse Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/bespoke">Custom Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Main Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ready to Buy */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Armchair className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to Buy</h3>
                <p className="text-gray-600 mb-4">
                  Unique, one-of-a-kind furniture pieces ready to ship to your home.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/products">Shop Now →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bespoke */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Paintbrush className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bespoke</h3>
                <p className="text-gray-600 mb-4">
                  Custom furniture made to your specifications and style preferences.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/bespoke">Request Quote →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* DIY Store */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">DIY Store</h3>
                <p className="text-gray-600 mb-4">
                  Supplies, materials, and tutorials for your own upcycling projects.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/diy-store">Shop Supplies →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Marketplace */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Discover unique pieces from talented artisans around the world.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/marketplace">Explore Artists →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Pieces</h2>
            <p className="text-gray-600">
              Handpicked selections from our latest collection
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No products available yet</p>
            <Button asChild variant="outline">
              <Link href="/admin">Add Products (Admin)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">
                Every piece is upcycled, reducing waste and giving new life to forgotten furniture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique</h3>
              <p className="text-gray-600">
                One-of-a-kind pieces that you won't find anywhere else. Your furniture is truly yours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Handcrafted</h3>
              <p className="text-gray-600">
                Expertly restored and refinished by skilled artisans with attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our collection or request a custom piece today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/bespoke">Request Custom Piece</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
