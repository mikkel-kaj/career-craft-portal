import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import ProfileCard from "./ProfileCard";
import TechnologySection from "./TechnologySection";

const HeroSection = () => {
    return (
        <section className="px-4 pb-12 md:pb-16 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 space-y-4">
                        <ProfileCard />
                        <TechnologySection />
                    </div>

                    <div className="md:col-span-8 space-y-4">
                        <AboutSection/>
                        <Testimonials/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
