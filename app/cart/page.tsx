import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ShoppingBag, X } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-8">
              {/* Empty Cart State */}
              <div className="text-center py-12">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="h-12 w-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">
                  Start adding some unique furniture pieces to your cart!
                </p>
                <Button asChild size="lg">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>

              {/* Cart Items would go here when there are products */}
              {/* Example structure:
              <div className="space-y-4">
                <div className="flex gap-4 border-b pb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Product Name</h3>
                    <p className="text-gray-600 text-sm">Style | Category</p>
                    <p className="font-semibold mt-2">$450.00</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input type="number" value="1" className="w-16" />
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              */}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">TBD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-semibold text-lg">$0.00</span>
                </div>
              </div>

              <Button className="w-full mb-4" disabled>
                Proceed to Checkout
              </Button>

              <div className="text-center">
                <Link href="/products" className="text-sm text-blue-600 hover:underline">
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Promo Code</h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                <h3 className="font-medium text-gray-900 mb-2">We Accept</h3>
                <div className="flex gap-2">
                  <div className="border rounded px-3 py-2">💳 Visa</div>
                  <div className="border rounded px-3 py-2">💳 MC</div>
                  <div className="border rounded px-3 py-2">💳 Amex</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Signals */}
          <Card className="mt-4">
            <CardContent className="p-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Free shipping over $500</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>30-day return policy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
