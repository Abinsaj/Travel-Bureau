"use client";

import { X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const menuSections = ["Destinations", "Journeys", "Stays", "Stories"];

const destinations = [
    "Africa",
    "Antarctica & The Arctic",
    "Asia",
    "Australasia",
    "Central America",
    "Europe",
    "Indian Ocean",
    "Middle East & North Africa",
    "North America",
    "South America",
    "The Caribbean",
];

const journeys = [
    "Small Group Tours",
    "Private Travel",
    "Tailor Made",
    "Family Travel",
    "Honeymoon Travel",
    "Solo Travel",
    "Adventure Travel",
    "Cultural Immersion",
    "Wildlife Safaris",
    "Luxury Escapes",
];

const stays = [
    "Luxury Hotels",
    "Boutique Properties",
    "Safari Lodges",
    "Beach Resorts",
    "Mountain Retreats",
    "City Hotels",
    "Historic Properties",
    "Eco Lodges",
    "Private Villas",
    "Unique Stays",
];

const stories = [
    "Travel Inspiration",
    "Destination Guides",
    "Cultural Insights",
    "Adventure Stories",
    "Local Experiences",
    "Photography",
    "Travel Tips",
    "Seasonal Highlights",
    "Hidden Gems",
    "Traveler Reviews",
];

const subCategories = {
    Africa: ["South Africa", "Kenya", "Tanzania", "Morocco", "Egypt", "Botswana"],
    Asia: ["Japan", "Thailand", "India", "China", "Vietnam", "Indonesia"],
    Europe: ["France", "Spain", "Poland", "Italia", "Malta", "Norway"],
    "Small Group Tours": ["Cultural Tours", "Adventure Tours", "Wildlife Tours", "Food Tours"],
    "Private Travel": ["Luxury Private", "Family Private", "Romantic Private", "Adventure Private"],
};

const contentData = {
    Destinations: { list: destinations },
    Journeys: { list: journeys },
    Stays: { list: stays },
    Stories: { list: stories },
};

export function Sidebar({ isOpen, onClose }) {
    const [activeSection, setActiveSection] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null);
    const [subPanelTop, setSubPanelTop] = useState(0);
    const [mobileView, setMobileView] = useState("main");
    const subItemRefs = useRef({});

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSectionClick = (section) => {
        setActiveSection(section);
        setActiveSubItem(null);
        setMobileView("category");
    };

    const handleSubItemClick = (item) => {
        setActiveSubItem(item);
        if (subItemRefs.current[item]) {
            setSubPanelTop(subItemRefs.current[item].offsetTop);
        }
        setMobileView("sub");
    };

    const handleClose = () => {
        setActiveSection(null);
        setActiveSubItem(null);
        setMobileView("main");
        onClose();
    };


    const handleMobileBack = () => {
        if (mobileView === "sub") {
            setMobileView("category");
            setActiveSubItem(null);
        } else if (mobileView === "category") {
            setMobileView("main");
            setActiveSection(null);
        }
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={handleClose}
            />

            <div
                className={`fixed top-0 left-0 h-full w-full max-w-screen-xl z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="relative flex h-full">
                    <div className="w-full md:hidden flex flex-col h-full bg-[#f8f6ef]">
                        <div className="pl-3 pt-2">

                            <button onClick={handleClose} className="text-sm text-gray-600 flex items-center gap-2">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            {(mobileView === "category" || mobileView === "sub") && (
                                <button onClick={handleMobileBack} className="p-1">
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                            )}
                            <span className="text-sm text-gray-500">
                                {mobileView === "main"
                                    ? "Menu's"
                                    : mobileView === "category"
                                        ? activeSection
                                        : activeSubItem}
                            </span>
                            <div />
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {mobileView === "main" && (
                                <>
                                    <div className="space-y-6 mb-8">
                                        {menuSections.map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => handleSectionClick(section)}
                                                className="block text-left text-3xl font-light text-gray-700"
                                            >
                                                {section}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}

                            {mobileView === "category" && (
                                <>
                                    {contentData[activeSection].list.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => handleSubItemClick(item)}
                                            className="flex items-center justify-between w-full py-2 text-left text-gray-700"
                                        >
                                            <span>{item}</span>
                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </button>
                                    ))}
                                </>
                            )}

                            {mobileView === "sub" && (
                                <>
                                    {subCategories[activeSubItem]?.map((sub) => (
                                        <div
                                            key={sub}
                                            className="text-base text-gray-600 hover:text-gray-900 cursor-pointer py-2"
                                        >
                                            {sub}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        <div className="px-6 py-4 border-t border-gray-200 space-y-4">
                            <div>
                                <div className="text-sm text-gray-500 mb-2">Discover</div>
                                <div className="space-y-1">
                                    <div className="text-sm text-gray-900">The Exclusive Collection</div>
                                    <div className="text-sm text-gray-900">Idea</div>
                                    <div className="text-sm text-gray-900">Offers</div>
                                    <div className="text-sm text-gray-900">Journey Finder</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-600">5.0/1,230 reviews</span>
                            </div>

                        </div>
                    </div>

                    <div className="hidden md:flex h-full w-full relative">
                        <div className="w-2/5 bg-[#f8f6ef] h-full p-6 flex flex-col justify-between">
                            <div className="mt-20 ml-10">
                                <div className="flex items-center justify-between mb-4">
                                    <button onClick={handleClose}>
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                                <div className="mb-6 mt-5">
                                    <span className="text-sm text-gray-500">Menu's</span>
                                </div>
                                <div className="space-y-6 mb-8 mt-10 ">
                                    {menuSections.map((section) => (
                                        <button
                                            key={section}
                                            onClick={() => handleSectionClick(section)}
                                            className={`block text-left text-3xl font-light ${activeSection === section
                                                ? "text-gray-900"
                                                : "text-gray-500 hover:text-gray-700"
                                                }`}
                                        >
                                            {section}
                                        </button>
                                    ))}
                                </div>
                                <div className="mb-8">
                                    <div className="text-sm text-gray-500 mb-4">Discover</div>
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-900 cursor-pointer">The Exclusive Collection</div>
                                        <div className="text-sm text-gray-900 cursor-pointer">Idea</div>
                                        <div className="text-sm text-gray-900 cursor-pointer">Offers</div>
                                        <div className="text-sm text-gray-900 cursor-pointer">Journey Finder</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-600">5.0/1,230 reviews</span>
                            </div>
                        </div>

                        {activeSection && (
                            <div className="w-1/3 bg-white h-full  p-6 overflow-y-auto">
                                <div className="flex gap-4 mb-8">
                                    <Image
                                        src="/images/sidebar2.png"
                                        alt=""
                                        width={160}
                                        height={120}
                                        className="rounded-lg object-cover w-full h-24"
                                    />
                                    <Image
                                        src="/images/sidebar1.png"
                                        alt=""
                                        width={160}
                                        height={120}
                                        className="rounded-lg object-cover w-full h-24"
                                    />
                                </div>
                                <div className="space-y-4">
                                    {contentData[activeSection].list.map((item) => (
                                        <button
                                            key={item}
                                            ref={(el) => (subItemRefs.current[item] = el)}
                                            onClick={() => handleSubItemClick(item)}
                                            className={`flex items-center justify-between w-full py-2 text-left ${activeSubItem === item
                                                ? "text-gray-900"
                                                : "text-gray-600 hover:text-gray-900"
                                                }`}
                                        >
                                            <span>{item}</span>
                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSubItem && (
                            <div className="w-1/3 bg-white h-full  p-6 overflow-y-auto">
                                <h3 className="text-xl font-light mb-6">{activeSubItem}</h3>
                                {subCategories[activeSubItem] && (
                                    <div className="space-y-4">
                                        {subCategories[activeSubItem].map((sub) => (
                                            <div
                                                key={sub}
                                                className="text-base text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                {sub}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
