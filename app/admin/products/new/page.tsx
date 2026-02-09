import AIProductUpload from '@/components/admin/AIProductUpload'

export default function AdminProductUploadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI-Powered Product Upload</h1>
          <p className="text-gray-600">
            Upload product images and let AI generate compelling listings automatically
          </p>
        </div>
        <AIProductUpload />
      </div>
    </div>
  )
}
