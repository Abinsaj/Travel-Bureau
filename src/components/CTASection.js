import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative h-[800px] overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctaimg.png"
          alt="Luxury travel destination"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex w-full items-center justify-center h-full text-white px-4 text-center">
        <h2 className="text-3xl md:text-4xl  font-light leading-tight max-w-5xl">
          We're not just in the travel business,
          <br />
          we're in the business of making dreams a reality.
        </h2>
      </div>
    </section>
  )
}
