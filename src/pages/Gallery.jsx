import Image from "next/image"

export default function Gallery() {
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { id: 1, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 1" },
    { id: 2, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 2" },
    { id: 3, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 3" },
    { id: 4, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 4" },
    { id: 5, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 5" },
    { id: 6, src: "/placeholder.svg?height=600&width=500", alt: "Barber gallery image 6" },
  ]

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96 flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-5xl font-bold text-white animate-fadeIn">Gallery</h2>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Hero background"
            width={1200}
            height={600}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all"
          title="Go to Top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </main>
  )
}

