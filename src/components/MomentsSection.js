"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const moments = [
    {
        image: "/images/moment1.png",
        title: "Private Estates",
        subtitle: "The finest houses in Italy Chianti wine region to take over for a dolce vita summer escape.",
    },
    {
        image: "/images/moment2.png",
        title: "Villas",
        subtitle: "Beautiful houses to rent in the dreamiest destinations in Europe and the Caribbean.",
    },
    {
        image: "/images/moment3.png",
        title: "Safari Lodges",
        subtitle: "The smartest camps and lodges in the most show stopping locations across Africa",
    },
    {
        image: "/images/moment4.png",
        title: "Beach Resorts",
        subtitle: "Exclusive beachfront properties in the world's most pristine coastal destinations.",
    },
    {
        image: "/images/triptype3.png",
        title: "Mountain Retreats",
        subtitle: "Secluded hideaways nestled in mountain landscapes around globe.",
    },
    {
        image: "/images/triptype2.png",
        title: "Snow Falls",
        subtitle: "Cozy retreats and hidden cabins surrounded by snowy peaks and tranquil winter beauty.",
    },
]

export function MomentsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(4)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, moments.length - slidesPerView) : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= moments.length - slidesPerView ? 0 : prevIndex + 1
        )
    }

    return (
        <section className="py-16 bg-[#F6F2EA] w-full pb-28">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
                    <div className="text-center flex-1">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                            Discover our remarkable
                            <br />
                            moments and places
                        </h2>
                    </div>

                    <div className="flex flex-row space-x-3 mt-6 pt-4 justify-center md:justify-start">
                        <button
                            onClick={goToPrevious}
                            className="border border-gray-400 hover:bg-gray-100 p-3 rounded-full bg-[#F6F2EA] transition-colors disabled:opacity-50"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="border border-gray-400 hover:bg-gray-100 p-3 rounded-full bg-[#F6F2EA] transition-colors disabled:opacity-50"
                            disabled={currentIndex >= moments.length - slidesPerView}
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
                    >
                        {moments.map((moment, index) => (
                            <div
                                key={index}
                                className={`group cursor-pointer flex-shrink-0 ${slidesPerView === 1 ? "w-full" : slidesPerView === 2 ? "w-1/2" : "w-1/4"
                                    }`}
                            >
                                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-md">
                                    <Image
                                        src={moment.image || "/placeholder.svg"}
                                        alt={moment.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <div className="h-32 flex flex-col justify-end">
                                            <h3 className="text-xl md:text-2xl font-light mb-2">{moment.title}</h3>
                                            <p className="text-sm opacity-90 leading-relaxed">
                                                {moment.subtitle.split(" ").slice(0, 12).join(" ")}
                                                {moment.subtitle.split(" ").length > 12 && "..."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
