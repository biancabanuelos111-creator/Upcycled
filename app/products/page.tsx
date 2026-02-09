import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Ready to Buy</h1>
        <p className="text-gray-600">
          Unique, one-of-a-kind furniture pieces ready to ship to your home
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select className="px-4 py-2 border rounded-lg">
          <option>All Categories</option>
          <option>Chairs</option>
          <option>Tables</option>
          <option>Cabinets</option>
          <option>Dressers</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Sort By: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>All Styles</option>
          <option>Mid-Century Modern</option>
          <option>Rustic</option>
          <option>Industrial</option>
          <option>Vintage</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🪑</div>
          <h2 className="text-2xl font-semibold mb-2">No Products Available Yet</h2>
          <p className="text-gray-600 mb-6">
            Products will appear here once they are added through the admin dashboard.
          </p>
          <Button asChild>
            <Link href="/admin/products/new">Add Your First Product</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
