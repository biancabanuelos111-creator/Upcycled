import { NextRequest, NextResponse } from 'next/server'
import { analyzeProductImage } from '@/lib/openai'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json()

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      )
    }

    // Analyze the image using OpenAI
    const analysis = await analyzeProductImage(imageUrl)

    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Error in analyze-product API:', error)
    return NextResponse.json(
      { error: 'Failed to analyze product image' },
      { status: 500 }
    )
  }
}
