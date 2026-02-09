import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Upload, Users, ShoppingCart, Settings, BarChart } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Manage your e-commerce platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Product Upload */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Upload className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle>AI Product Upload</CardTitle>
            </div>
            <CardDescription>
              Upload images and let AI create product listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/products/new">Upload Product</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Manage Products */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Package className="h-5 w-5 text-green-600" />
              </div>
              <CardTitle>Manage Products</CardTitle>
            </div>
            <CardDescription>
              View, edit, and manage all products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/products">View Products</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Orders */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle>Orders</CardTitle>
            </div>
            <CardDescription>
              Process and track customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/orders">Manage Orders</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Marketplace Artists */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <CardTitle>Marketplace Artists</CardTitle>
            </div>
            <CardDescription>
              Approve and manage vendor accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/artists">Manage Artists</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <BarChart className="h-5 w-5 text-indigo-600" />
              </div>
              <CardTitle>Analytics</CardTitle>
            </div>
            <CardDescription>
              View sales reports and statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/analytics">View Analytics</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Settings className="h-5 w-5 text-gray-600" />
              </div>
              <CardTitle>Settings</CardTitle>
            </div>
            <CardDescription>
              Configure platform settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/settings">Manage Settings</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600">Marketplace Artists</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">$0</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
