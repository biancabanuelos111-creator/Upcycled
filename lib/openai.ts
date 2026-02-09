import OpenAI from 'openai'

// Make OpenAI initialization lazy to avoid build-time errors
let openaiInstance: OpenAI | null = null

function getOpenAI() {
  if (!openaiInstance) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured')
    }
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  }
  return openaiInstance
}

export interface AIProductAnalysis {
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

export async function analyzeProductImage(
  imageUrl: string
): Promise<AIProductAnalysis> {
  try {
    const openai = getOpenAI()
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are an expert in upcycled and vintage furniture. Analyze this furniture image and provide detailed information for an e-commerce listing. 

Please provide a JSON response with the following structure:
{
  "title": "SEO-friendly product title (50-60 chars)",
  "description": "Detailed 2-3 paragraph description highlighting uniqueness, craftsmanship, and appeal",
  "keyFeatures": ["5-7 key selling points"],
  "materials": ["identified materials"],
  "style": "furniture style (e.g., mid-century modern, rustic, industrial, vintage)",
  "condition": "condition assessment (excellent, very good, good, fair)",
  "suggestedPrice": 450.00,
  "priceRange": {"min": 400, "max": 500},
  "pricingReasoning": "Explanation of pricing based on materials, style, condition, and market value",
  "dimensions": "estimated dimensions if visible (e.g., '36W x 18D x 30H inches') or 'Not determinable from image'",
  "colorPalette": ["primary", "secondary", "accent colors"],
  "category": "furniture category (chair, table, cabinet, dresser, etc.)",
  "tags": ["relevant keywords for SEO"],
  "seoTitle": "SEO-optimized title with keywords",
  "seoDescription": "160-character meta description"
}

Be descriptive, enthusiastic, and focus on what makes this piece special. Price should reflect quality upcycled furniture market rates.`,
            },
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 1500,
      response_format: { type: 'json_object' },
    })

    const content = response.choices[0].message.content
    if (!content) {
      throw new Error('No content returned from AI')
    }

    const analysis = JSON.parse(content) as AIProductAnalysis
    return analysis
  } catch (error) {
    console.error('Error analyzing product image:', error)
    throw new Error('Failed to analyze product image')
  }
}

export async function generateProductImages(
  prompt: string,
  numImages: number = 3
): Promise<string[]> {
  try {
    const openai = getOpenAI()
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `Professional product photography of ${prompt}. Clean white background, well-lit, high quality e-commerce style photo.`,
      n: 1,
      size: '1024x1024',
    })

    return response.data?.map((img) => img.url || '') || []
  } catch (error) {
    console.error('Error generating product images:', error)
    return []
  }
}
