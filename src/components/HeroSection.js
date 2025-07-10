import Image from "next/image";
import { Header } from "./Header";
import { Building, Home, Utensils, Plane, Ship, Sun } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/herosection.png"
                    alt="Desert landscape with traditional architecture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <Header />

            <div className="relative z-10 flex flex-col flex-1 justify-between">
                <div className="pt-48 md:pt-80 w-full flex justify-center md:justify-start px-6 md:pl-24">
                    <div className="text-white max-w-4xl text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight font-kugile">
                            Step Into a<br />
                            World of Discovery
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-8 max-w-3xl leading-relaxed opacity-90 mx-auto md:mx-0">
                            Since our inception in 2013, we have kept one vision at the heart of our proposition,
                            to make the booking process smooth and seamless for our esteemed partners,
                            to sell to their clients at an impressive gain. As a forward thinking destination
                            management company, we pride ourselves on simplifying the lives of our partners.
                            Your needs come first, always. This is why we work effortlessly, so you can focus on
                            what matters, being the best in your region.
                        </p>
                    </div>
                </div>

                {/* === ICONS === */}
                <div className="w-full z-10 pb-12 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-y-8 gap-x-12 md:space-x-28 text-center text-white border-b border-neutral-400 pb-10">
                        <div>
                            <Building className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Years Experience</div>
                        </div>
                        <div>
                            <Home className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Destinations</div>
                        </div>
                        <div>
                            <Utensils className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Happy Travelers</div>
                        </div>
                        <div>
                            <Plane className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Happy Travelers</div>
                        </div>
                        <div>
                            <Ship className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Happy Travelers</div>
                        </div>
                        <div>
                            <Sun className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-sm opacity-80">Happy Travelers</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
