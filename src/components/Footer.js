import { Instagram, Facebook, Linkedin, MessageCircle, Globe } from "lucide-react"
import Image from "next/image"


export function Footer() {
    return (
        <footer className="bg-black text-white w-full">
            <div className="h-36 bg-[#F6F2EA]" />

            <div className=" mx-auto px-4 pt-10 py-5">
                <div className="grid md:grid-cols-2  mb-12 ">
                    <div className="pl-10">
                        <div className="flex items-center mb-8">
                            <div className="flex items-center mr-4">
                                <div className="w-20 h-20 relative overflow-hidden pt-5">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Tropical beach destination with limestone cliffs"
                                        width={200}
                                        height={200}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="text-2xl font-bold">TOURISTS TRAVEL</div>
                                <div className="text-lg font-bold">
                                    BUREAU <span className="text-sm font-normal">UK LTD</span>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col space-y-3 mb-8">
                            <div className="flex space-x-3">
                                <button className="border border-gray-600 hover:bg-white hover:text-black bg-transparent p-3 rounded-full transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </button>
                                <button className="border border-gray-600 hover:bg-white hover:text-black bg-transparent p-3 rounded-full transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </button>
                                <button className="border border-gray-600 hover:bg-white hover:text-black bg-transparent p-3 rounded-full transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex space-x-3">
                                <button className="border border-gray-600 hover:bg-white hover:text-black bg-transparent p-3 rounded-full transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </button>
                                <button className="border border-gray-600 hover:bg-white hover:text-black bg-transparent p-3 rounded-full transition-colors">
                                    <Globe className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                            Discover the world's most captivating places, from hidden gems to popular hotspots.
                            Explore our curated selection of destinations that inspire adventure and wanderlust.
                            Start planning your next journey today!
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5 pl-8 mt-5 ">
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Discover</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Stay</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tours</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Travel</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Villas</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Explore UK</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">languages</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">English</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Arabic</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">French</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mb-8 " />

                <div className="grid md:grid-cols-2 gap-6 mb-12 px-10">

                    <button className="w-full border border-white bg-white text-black py-4 px-6 text-lg font-medium transition-colors ">
                        Explore Destinations
                    </button>

                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            placeholder="Enter your e-mail Address"
                            className="bg-transparent border border-white text-white placeholder:text-gray-400 px-4 py-4 flex-1 focus:outline-none"
                        />
                        <button className="border border-white bg-white text-black  px-8 py-4 font-medium transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p className="mb-4 md:mb-0">©Copyright Tourists Travel Bureau UK LTD. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Imprint</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
