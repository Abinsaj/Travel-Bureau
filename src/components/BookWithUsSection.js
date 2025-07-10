import Image from "next/image"

export function BookWithUs() {
  return (
    <section className="py-24 bg-[#F6F2EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Why Book with us?
            </h2>
          </div>

          <div className="bg-[#FBF8F4] p-4">
            <h3 className="text-xl md:text-2xl font-light mb-4 text-gray-900">
              Hotel Partnerships
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              We collaborate with a handpicked selection of the world’s finest hotels and resorts, each chosen for its exceptional standards, distinctive character, and commitment to excellence. From chic urban hideaways to serene beachfront sanctuaries and heritage-rich estates, our portfolio reflects a diverse array of experiences tailored to suit every traveler’s taste. Our longstanding relationships with these esteemed properties allow us to offer our clients exclusive benefits—such as priority upgrades, late check-outs, complimentary amenities, and thoughtfully personalized touches.
            </p>
          </div>

          <div className="bg-[#FBF8F4] p-4">
            <h3 className="text-xl md:text-2xl font-light mb-4 text-gray-900">
              365 Private Travel
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              365 Private Travel is a bespoke travel company specializing in curating exceptional, tailor-made journeys for discerning travelers. With a global network of elite partners and insider access to the world’s finest destinations, we offer seamless, personalized experiences whether it’s a secluded island retreat, a private cultural tour, or an unforgettable city escape. Our dedicated travel advisors craft every itinerary with care, ensuring that every detail reflects your tastes, desires, and lifestyle. Discover the world in absolute comfort, privacy, and style—with 365 Private Travel, every journey is uniquely yours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start ">
          <div className="md:col-span-2 flex flex-col bg-[#FBF8F4]">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src="/images/bookwithus2.png"
                alt="Small group dining experience on yacht"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 p-4">
              <h3 className="text-xl md:text-2xl font-light mb-3 text-gray-900">
                Small Group Journeys
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Intimate, curated travel experiences designed for those who seek connection, discovery, and comfort. Explore the world in the company of like-minded.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col bg-[#FBF8F4]">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src="/images/bookwithus1.png"
                alt="Safari experience with zebras in natural habitat"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 p-4">
              <h3 className="text-xl md:text-2xl font-light mb-2 text-gray-900">
                Safari Experiences
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Journey into the wild with bespoke safari adventures designed for the curious and the bold. From luxury tented camps to private game drives, discover untamed landscapes, majestic wildlife, and immersive moments that connect you to nature—crafted with comfort, elegance, and authenticity in every detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
