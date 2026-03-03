import { useState } from 'react';
import ImageWithFallback from "./ui/image-with-fallback";
import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
    const [isAlternatePhoto, setIsAlternatePhoto] = useState(false);

    return (
        <div className="bg-card-lighter rounded-2xl p-8">
            <div className="relative" onClick={() => setIsAlternatePhoto(!isAlternatePhoto)}>
                <ImageWithFallback
                    src={isAlternatePhoto ? "/img/profile_pic.jpg" : "/img/profile_pic.png"}
                    alt="Profile picture"
                    className={`rounded-2xl shadow-xl w-full h-auto object-cover mb-6 cursor-pointer transition-opacity duration-300 ${
                        isAlternatePhoto ? 'animate-scale-in' : ''
                    }`}
                    fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    fallbackClassName="w-full h-[300px] rounded-2xl"
                />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-white">Mikkel Kaj Andersen</h1>
            <p className="text-gray-400 mb-6">Computer Science Specialist | Former CTO, Ella Exchange</p>
            <div className="flex flex-wrap gap-4 mb-6">
                <a href="mailto:hello@mikkelkajandersen.dk"
                   className="text-link hover:text-link-hover transition-colors">
                    hello@mikkelkajandersen.dk
                </a>
                <a href="tel:+4521537395" className="text-link hover:text-link-hover transition-colors">
                    +45 21 53 73 95
                </a>
                <a href="https://www.mikkelkajandersen.dk" target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover transition-colors">
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
