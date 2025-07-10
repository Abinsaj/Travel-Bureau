import Image from "next/image";

export function ExclusivitySection() {
    return (
        <section className="py-10 bg-[#F6F2EA]"> 
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-kugile font-light mb-6 text-gray-900">
                        Exclusivity with Simplicity
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group cursor-pointer overflow-hidden  shadow-lg">
                        <div className="relative h-[450px]">
                            <Image
                                src="/images/exclusive2.png"
                                alt="Tropical beach destination with limestone cliffs"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-0 text-white w-full h-20 text-start  backdrop-blur-md bg-white/10">
                                <p className="text-sm opacity-90 leading-relaxed pl-10 pt-6">
                                Personalized Luxury Getaways
                                </p> 
                            </div>
                        </div>
                    </div>

                    <div className="group cursor-pointer overflow-hidden  shadow-lg">
                        <div className="relative h-[450px]">
                            <Image
                                src="/images/exclusive1.png"
                                alt="People enjoying a journey in a garden setting"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-0 text-white w-full h-20 text-start  backdrop-blur-md bg-white/10">
                                <p className="text-sm opacity-90 leading-relaxed pl-10 pt-6">
                                The Luxury Stay Collection
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
