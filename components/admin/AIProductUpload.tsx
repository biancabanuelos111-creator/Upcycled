'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Loader2, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface AIAnalysis {
  title: string
  description: string
  keyFeatures: string[]
  materials: string[]
  style: string
  condition: string
  suggestedPrice: number
  priceRange: { min: number; max: number }
  pricingReasoning: string
  dimensions: string
  colorPalette: string[]
  category: string
  tags: string[]
  seoTitle: string
  seoDescription: string
}

export default function AIProductUpload() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [analyzing, setAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [publishing, setPublishing] = useState(false)
  const [published, setPublished] = useState(false)

  // Editable fields
  const [editedTitle, setEditedTitle] = useState('')
  const [editedDescription, setEditedDescription] = useState('')
  const [editedPrice, setEditedPrice] = useState('')
  const [editedDimensions, setEditedDimensions] = useState('')
  const [editedCategory, setEditedCategory] = useState('')

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setError(null)
    setAnalysis(null)
    
    // Convert files to base64 or upload to temporary storage
    const imagePromises = acceptedFiles.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
      })
    })

    const images = await Promise.all(imagePromises)
    setUploadedImages(images)

    // Auto-analyze the first image
    if (images.length > 0) {
      analyzeImage(images[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    multiple: true,
  })

  const analyzeImage = async (imageUrl: string) => {
    setAnalyzing(true)
    setError(null)

    try {
      const response = await fetch('/api/admin/analyze-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze image')
      }

      const data = await response.json()
      setAnalysis(data)
      
      // Initialize editable fields
      setEditedTitle(data.title)
      setEditedDescription(data.description)
      setEditedPrice(data.suggestedPrice.toString())
      setEditedDimensions(data.dimensions)
      setEditedCategory(data.category)
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
      console.error(err)
    } finally {
      setAnalyzing(false)
    }
  }

  const handlePublish = async () => {
    setPublishing(true)
    setError(null)

    try {
      // In a real implementation, this would save to database
      // For now, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setPublished(true)
      setTimeout(() => {
        // Reset form
        setUploadedImages([])
        setAnalysis(null)
        setPublished(false)
        setEditedTitle('')
        setEditedDescription('')
        setEditedPrice('')
        setEditedDimensions('')
        setEditedCategory('')
      }, 2000)
    } catch (err) {
      setError('Failed to publish product. Please try again.')
      console.error(err)
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      {!analysis && (
        <Card>
          <CardContent className="pt-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              {analyzing ? (
                <div className="space-y-2">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-600" />
                  <p className="text-lg font-medium">Analyzing image with AI...</p>
                  <p className="text-sm text-gray-500">
                    This may take a few seconds
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-lg font-medium mb-2">
                    {isDragActive
                      ? 'Drop images here...'
                      : 'Drag & drop product images here'}
                  </p>
                  <p className="text-sm text-gray-500">
                    or click to browse (supports multiple images)
                  </p>
                </>
              )}
            </div>

            {uploadedImages.length > 0 && !analyzing && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {uploadedImages.map((img, index) => (
                  <div key={index} className="relative aspect-square">
                    <Image
                      src={img}
                      alt={`Upload ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-600">
              <X className="h-5 w-5" />
              <p>{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Analysis Results */}
      {analysis && !published && (
        <div className="space-y-6">
          {/* Success Message */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="h-5 w-5" />
                <p className="font-medium">AI analysis complete! Review and edit as needed.</p>
              </div>
            </CardContent>
          </Card>

          {/* Uploaded Images Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {uploadedImages.map((img, index) => (
                  <div key={index} className="relative aspect-square">
                    <Image
                      src={img}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Title
                </label>
                <Input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  rows={6}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <Input
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Dimensions
                  </label>
                  <Input
                    value={editedDimensions}
                    onChange={(e) => setEditedDimensions(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Key Features
                </label>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {analysis.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Style</label>
                  <p className="text-sm text-gray-700 capitalize">{analysis.style}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Condition</label>
                  <p className="text-sm text-gray-700 capitalize">{analysis.condition}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Materials</label>
                <div className="flex flex-wrap gap-2">
                  {analysis.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <Input
                    type="number"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    className="pl-7"
                    step="0.01"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Suggested range: ${analysis.priceRange.min} - ${analysis.priceRange.max}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">AI Pricing Reasoning</h4>
                <p className="text-sm text-gray-700">{analysis.pricingReasoning}</p>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">SEO Title</label>
                <p className="text-sm text-gray-700">{analysis.seoTitle}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Meta Description</label>
                <p className="text-sm text-gray-700">{analysis.seoDescription}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {analysis.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handlePublish}
              disabled={publishing}
              size="lg"
              className="flex-1"
            >
              {publishing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                'Publish Product'
              )}
            </Button>
            <Button
              onClick={() => {
                setAnalysis(null)
                setUploadedImages([])
              }}
              variant="outline"
              size="lg"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Published Success */}
      {published && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Product Published Successfully!
              </h3>
              <p className="text-green-700">
                Your product is now live on the website.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
