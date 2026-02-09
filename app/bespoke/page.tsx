import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function BespokePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bespoke Furniture Services
            </h1>
            <p className="text-xl text-gray-700">
              Bring your vision to life with custom-designed, handcrafted furniture made just for you.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Vision</h3>
              <p className="text-gray-600">
                Tell us about your dream piece, style preferences, and measurements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Consultation</h3>
              <p className="text-gray-600">
                We'll discuss materials, finishes, and create a custom design plan.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Our artisans handcraft your piece with attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Your unique piece is carefully delivered and set up in your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Previous Bespoke Projects</h2>
          <p className="text-center text-gray-600 mb-12">
            Inspiration from pieces we've created for our clients
          </p>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-gray-500">Portfolio coming soon</p>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Custom Piece</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24-48 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Title *</label>
                    <Input placeholder="e.g., Custom Dining Table" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      placeholder="Describe your vision, style preferences, intended use, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Estimated Budget</label>
                      <Input type="number" placeholder="$1000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <Input placeholder="e.g., 2-3 months" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Dimensions (if known)</label>
                    <Input placeholder="e.g., 72L x 36W x 30H inches" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Inspiration Images
                    </label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <p className="text-gray-500">Upload reference images (optional)</p>
                      <Button variant="outline" className="mt-2">Choose Files</Button>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Request
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    We'll review your request and reach out to discuss the next steps
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
