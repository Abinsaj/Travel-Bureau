import Image from "next/image";

export function TravelBureauSection() {
  return (
    <section className="py-32 bg-[#F6F2EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-kugile font-light mb-6 text-gray-900">
            Tourists Travel Bureau
            <br />
            Journeys' World
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tourists Travel Bureau is dedicated to providing spectacular wholesale services throughout the GCC and
            beyond. Our journey towards becoming a leading B2B wholesaler is rooted in foundations of reliability,
            professionalism, speed, and most importantly, trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group cursor-pointer overflow-hidden  shadow-lg">
            <div className="relative h-[450px]">
              <Image
                src="/images/travel3.png"
                alt="Tropical beach destination with limestone cliffs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-kugile font-light mb-2">Destinations</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  We can arrange remarkable travel experiences
                  on all seven continents. Where do you want to go?
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer overflow-hidden  shadow-lg">
            <div className="relative h-[450px]">
              <Image
                src="/images/travel2.png"
                alt="People enjoying a journey in a garden setting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-kugile font-light mb-2">Journeys</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Find your dream journey, whether you want to
                  travel privately or with a group, by train, boat or plane.
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer overflow-hidden  shadow-lg">
            <div className="relative h-[450px]">
              <Image
                src="/images/travel1.png"
                alt="Luxury resort with pool and modern architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-kugile font-light mb-2">Stays</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Our collection of inspiring places to stay includes
                  safari lodges, super-villas, and boutique riverboats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
