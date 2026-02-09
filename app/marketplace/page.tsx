import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Users, ShoppingBag, DollarSign, Star } from 'lucide-react'

export default function MarketplacePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Artist Marketplace
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Discover unique furniture pieces from talented artisans around the world
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                placeholder="Search artists or products..."
                className="bg-white"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">0</div>
              <div className="text-gray-600">Artists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">0</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">0</div>
              <div className="text-gray-600">Sales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">4.9</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Artists</h2>
              <p className="text-gray-600">
                Talented creators offering unique furniture pieces
              </p>
            </div>
            <Button variant="outline">View All Artists</Button>
          </div>

          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-2">No Artists Yet</h3>
            <p className="text-gray-600 mb-6">
              Artists will appear here once they register and are approved
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline">Become an Artist</Button>
              <Button asChild>
                <a href="/admin">Approve Artists (Admin)</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Artists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Sell Your Creations</h2>
            <p className="text-center text-gray-600 mb-12">
              Join our marketplace and reach customers looking for unique, handcrafted furniture
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                <p className="text-gray-600">
                  Set up your artist profile and showcase your work
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">List Products</h3>
                <p className="text-gray-600">
                  Upload your furniture pieces with photos and descriptions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
                <p className="text-gray-600">
                  Sell your pieces and receive payouts directly to your account
                </p>
              </div>
            </div>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Star className="h-8 w-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Why Join Our Marketplace?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Reach a targeted audience of furniture enthusiasts</li>
                      <li>✓ Simple listing process with optional AI assistance</li>
                      <li>✓ Competitive commission rates (15%)</li>
                      <li>✓ Secure payment processing through Stripe</li>
                      <li>✓ Marketing support and featured artist opportunities</li>
                      <li>✓ Dedicated dashboard to manage your sales</li>
                    </ul>
                    <div className="mt-6">
                      <Button size="lg">Apply to Become an Artist</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Style</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mid-Century Modern', 'Rustic', 'Industrial', 'Vintage', 'Bohemian', 'Minimalist', 'Farmhouse', 'Contemporary'].map(
              (style) => (
                <Card key={style} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold">{style}</h3>
                    <p className="text-sm text-gray-500 mt-1">0 items</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
