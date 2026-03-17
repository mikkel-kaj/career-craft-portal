import { useState } from 'react';
import ImageWithFallback from "./ui/image-with-fallback";
import SocialLinks from "./SocialLinks";
import { AnimatePresence, motion } from "framer-motion";

const ProfileCard = () => {
    const [isAlternatePhoto, setIsAlternatePhoto] = useState(false);

    return (
        <div className="glass-light rounded-2xl p-8 border border-accent/10">
            <button
                type="button"
                className="relative w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                onClick={() => setIsAlternatePhoto(!isAlternatePhoto)}
                aria-label="Toggle between profile photos"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isAlternatePhoto ? "alt" : "main"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ImageWithFallback
                            src={isAlternatePhoto ? "/img/profile_pic.jpg" : "/img/profile_pic.png"}
                            alt="Mikkel Kaj Andersen - profile photo"
                            className="rounded-2xl shadow-xl w-full h-auto object-cover mb-6 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-shadow duration-500"
                            fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
                            fallbackClassName="w-full h-[300px] rounded-2xl"
                        />
                    </motion.div>
                </AnimatePresence>
            </button>
            <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-white">Mikkel Kaj Andersen</h1>
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
            </div>
            <p className="text-gray-300 mb-6">Computer Science Specialist | Former CTO, Ella Exchange</p>
            <div className="flex flex-wrap gap-4 mb-6">
                <a href="mailto:hello@mikkelkajandersen.dk"
                   className="text-link hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                    hello@mikkelkajandersen.dk
                </a>
                <a href="tel:+4521537395" className="text-link hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                    +45 21 53 73 95
                </a>
                <a href="https://www.mikkelkajandersen.dk" target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                    www.mikkelkajandersen.dk
                </a>
            </div>
            <div className="flex gap-4">
                <SocialLinks/>
            </div>
        </div>
    );
};

export default ProfileCard;
