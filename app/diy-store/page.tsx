import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DIYStorePage() {
  const categories = [
    {
      name: 'Paint & Finishes',
      icon: '🎨',
      description: 'Chalk paint, stains, sealers, and specialty finishes',
      productCount: 0,
    },
    {
      name: 'Hardware',
      icon: '🔧',
      description: 'Knobs, handles, hinges, and decorative hardware',
      productCount: 0,
    },
    {
      name: 'Tools',
      icon: '🛠️',
      description: 'Sanders, brushes, rollers, and essential tools',
      productCount: 0,
    },
    {
      name: 'Materials',
      icon: '📦',
      description: 'Wood, fabric, foam, and restoration materials',
      productCount: 0,
    },
    {
      name: 'Tutorials & Guides',
      icon: '📚',
      description: 'Digital downloads, video courses, and step-by-step guides',
      productCount: 0,
    },
    {
      name: 'Kits',
      icon: '🎁',
      description: 'Complete project kits with all materials included',
      productCount: 0,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DIY Furniture Store
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Everything you need to upcycle and restore furniture yourself
            </p>
            <p className="text-gray-600">
              Quality supplies, tools, and tutorials to bring your DIY furniture projects to life
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.productCount} products
                    </span>
                    <Button variant="link" className="p-0">
                      Browse →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12">
            Our most popular DIY supplies and materials
          </p>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold mb-2">Store Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're curating the best supplies for your DIY furniture projects
            </p>
            <Button asChild variant="outline">
              <Link href="/admin/products/new">Add Products (Admin)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DIY Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">DIY Tips & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-4">📖</div>
                <h3 className="text-xl font-semibold mb-2">Beginner's Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of furniture upcycling with our comprehensive guide.
                </p>
                <Button variant="link" className="p-0">
                  Read Guide →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step video instructions for popular furniture projects.
                </p>
                <Button variant="link" className="p-0">
                  Watch Videos →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600 mb-4">
                  Join our community to share projects and get advice from experts.
                </p>
                <Button variant="link" className="p-0">
                  Join Community →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get DIY Tips & Exclusive Offers</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for project ideas, tutorials, and special discounts
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
