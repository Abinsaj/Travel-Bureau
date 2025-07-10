"use client"
import Image from "next/image"

const destinations = [
  { image: "/images/triptype1.png" },
  { image: "/images/triptype2.png" },
  { image: "/images/triptype3.png" },
  { image: "/images/triptype4.png" },
  { image: "/images/triptype5.png" },
  { image: "/images/bookwithus2.png" },
  { image: "/images/travel2.png" },
]

export function TripTypesSection() {
  return (
    <section className="py-1 bg-[#FBF8F4]">
      <div className="mx-auto px-4">
        <div className="text-center mb-12 mt-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">What kind of trip are you looking for?</h2>
        </div>

        <div className="mb-12">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {destinations.map((destination, index) => (
                <div key={index} className="group cursor-pointer flex-shrink-0">
                  <div className="relative w-80 h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`Destination ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <button className="border border-gray-400 hover:bg-gray-100 px-12 py-4 text-lg rounded-full transition-colors font-light">
            View All Journeys
          </button>
        </div>
      </div>
    </section>
  )
}
