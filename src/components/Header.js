"use client"
import { useState } from "react"
import { Sidebar } from "./Siderbar"

export function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header className="absolute top-6 left-0 right-0 z-40 bg-transparent">
                <div className=" z-50 bg-transparent text-white py-2 overflow-hidden border-b-1 border-b-neutral-400 ">
                    <div className="animate-scroll whitespace-nowrap space-x-24 pb-3">
                        <span className="text-sm">Find Connections</span>
                        <span className="text-sm"> Find New Beginnings </span>
                        <span className="text-sm"> Find Pause</span>
                        <span className="text-sm"> Find Balance </span>
                        <span className="text-sm"> Find Bliss </span>
                        <span className="text-sm"> Find Joy </span>
                        <span className="text-sm"> Find Clarity </span>
                        <span className="text-sm"> Find Meaning </span>
                        <span className="text-sm"> Discover </span>

                    </div>

                </div>
                <div className="container w-full mx-auto px-4 py-4 mt-5 ">
                    <div className="flex items-center justify-between ">
                        <div className="flex flex-col space-y-2"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <div className="w-4 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div>
                        </div>
                        {/* <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-white hover:bg-white/10  rounded transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button> */}

                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">TB</span>
                                </div>
                            </div>
                        </div>


                        <button className="text-white bg-neutral-400 h-10 w-32 rounded-3xl hover:text-white/80 transition-colors text-sm font-medium">
                            Book Your Story
                        </button>
                    </div>
                </div>
            </header>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
}
