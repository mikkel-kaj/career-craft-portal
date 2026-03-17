import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import ImageWithFallback from "./ui/image-with-fallback";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMemo } from "react";

interface CompanyLogoProps {
    src: string;
    alt: string;
    name: string;
}

const CompanyLogoItem = ({ src, alt, name }: CompanyLogoProps) => (
    <div className="flex flex-col items-center space-y-1 md:space-y-2 p-3 md:p-4 glass rounded-lg hover:shadow-lg transition-all text-center group min-h-[60px]">
        <ImageWithFallback
            src={src}
            alt={alt}
            className="h-8 md:h-12 w-auto bg-white rounded-lg opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all"
        />
        <span className="text-[10px] md:text-xs font-medium text-gray-300 line-clamp-2">{name}</span>
    </div>
);

const companies: CompanyLogoProps[] = [
    { src: "/img/resolve_logo.png", alt: "Resolve company logo", name: "Resolve" },
    { src: "/img/visma-enterprise_logo.svg", alt: "Visma Enterprise company logo", name: "Visma Enterprise" },
    { src: "/img/tripletex_logo.png", alt: "Tripletex company logo", name: "Tripletex" },
    { src: "/img/netcompany_logo.png", alt: "Netcompany company logo", name: "Netcompany" },
    { src: "/img/itminds_logo.jpg", alt: "IT-minds company logo", name: "IT-minds" },
    { src: "/img/keylane_logo.png", alt: "Keylane company logo", name: "Keylane" },
    { src: "/img/mim_logo.png", alt: "Make It Matter company logo", name: "Make It Matter" },
    { src: "/img/godream_logo.jpeg", alt: "GoDream company logo", name: "GoDream" },
    { src: "/img/itu_logo.png", alt: "IT-University of Copenhagen logo", name: "IT-University of Copenhagen" },
    { src: "/img/sjaellandske_medier_logo.svg", alt: "Sjællandske Medier company logo", name: "Sjællandske Medier" },
];

const CompanyLogos = () => (
    <div className="mt-6 pt-6 border-t border-border/10">
        <h3 className="text-base md:text-lg font-semibold text-link mb-4 text-center">
            Companies I've Worked With
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5 md:gap-3">
            {companies.map((company) => (
                <CompanyLogoItem key={company.name} {...company} />
            ))}
        </div>
    </div>
);

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image?: string;
    content: string;
    index: number;
}

const Testimonial = ({ name, role, company, image, content, index }: TestimonialProps) => (
    <Card
        className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 glass-light h-full">
        <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
            <span className="absolute top-2 right-4 text-8xl font-bold text-accent/5 select-none leading-none" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex items-start gap-4 md:gap-6 relative z-10">
                <Avatar className="w-20 h-20 border-2 border-accent/20 shadow-lg">
                    <ImageWithFallback src={image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} alt={`Photo of ${name}`} />
                </Avatar>

                <div className="flex-1 min-w-0">
                    <h4 className="text-xl md:text-2xl font-bold text-link truncate">{name}</h4>
                    <p className="text-sm md:text-base text-gray-300 font-medium">{role}</p>
                    <p className="text-sm md:text-base text-gray-300 truncate">{company}</p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-accent to-accent/20 rounded-full"/>
                <blockquote className="pl-4 md:pl-6 text-sm md:text-base text-gray-300 leading-relaxed italic">
                    {content}
                </blockquote>
            </div>
        </CardContent>
    </Card>
);

const Testimonials = () => {
    const reducedMotion = useReducedMotion();

    const testimonials = [
        {
            name: "Morten Nørgaard Larsen",
            role: "CTO & Senior Vice President",
            company: "Visma Enterprise A/S",
            image: "/img/people/morten_norgaard_larsen.png",
            content: `We have engaged his services multiple times on our HRM Analytics platform, and he has consistently impressed us with his exceptional skills and efficiency. Mikkel excels at understanding and aligning with customer requirements, ensuring that their needs are met to the highest standards.

Beyond his technical expertise, Mikkel is known for his friendly demeanor and remarkable adaptability, seamlessly integrating into our organization. His ability to collaborate effectively across teams is unmatched, and he has become a valued asset during our projects.

I am confident that Mikkel will bring the same dedication and skill to any organization fortunate enough to work with him.
            `
        },
        {
            name: "Martin Sommerseth",
            role: "Managing Director",
            company: "Resolve",
            image: "/img/people/martin_sommerseth.jpg",
            content: `Mikkel transitioned into a Tech Lead role due to his exceptional technical deliveries and leadership abilities.

            Mikkel also showcased strong project management skills, particularly in leading the PostNord project to success by balancing technical implementation and aligning different parties.

            In tech strategy contribution, he actively participated in shaping the central tech strategy at Resolve, demonstrating initiative and foresight in the LLM strategy and its potential role in the AI API strategy.

            For team collaboration, Mikkel has improved in involving team members early in various initiatives, sharing knowledge, and enabling independent work within the team, though there is still room for growth in this area.`
        },
        {
            name: "Stian Vale",
            role: "Manager",
            company: "Resolve",
            image: "/img/people/stian_vale.jpg",
            content: `Mikkel's work on Automatic Rostering received positive feedback from Postnord. All stakeholders involved are extremely pleased with the deliveries, which were primarily led and implemented by Mikkel.

            He significantly enhanced the Automatic Rostering product, preparing it for further growth. What was once an "unsure Resolve card" a year ago has now become one of our standout products, thanks to the technological advancements made.`
        },
        {
            name: "Jan Strandbakke",
            role: "CTO",
            company: "Tripletex",
            image: "/img/people/jan_strandbakke.jpg",
            content: `It has been very good to collaborate with Resolve, where their expertise and innovative approach to LLM/GPT technology have been crucial for Tripletex
and our AI team in an early phase. With Mikkel's central role, not just as a skilled technical leader but also as an inspiring person, we have succeeded in
establishing a robust AI team that continuously drives us forward. Through our collaboration with Resolve, we have not only strengthened our internal
competence but also positioned ourselves to lead in the further development of our AI assistant, which plays a critical role in our support of customers, and
which in the future will become more and more central in the Tripletex solution. Having Resolve by our side has enriched our understanding and
application of groundbreaking AI technology.`
        },
        {
            name: "Marie Preisler",
            role: "CEO",
            company: "Make It Matter",
            image: "/img/people/marie_preisler.jpg",
            content: `Det har været en sand fornøjelse at have Mikkel som ekstern IT-konsulent på vores projekt. Han har leveret et solidt og brugervenligt system, som
effektivt håndterer omkring 300 ordrer dagligt. Mikkel har været utrolig nem at kommunikere med, og han har hurtigt fanget alle aspekter af vores behov.
Gennem hele processen har han guidet os sikkert fra start til slut, hvilket har gjort samarbejdet både nemt og effektivt.
Vi er meget tilfredse med den service vi har modtaget fra Mikkel. Han er altid hurtig til at svare og står klar til at hjælpe med stort som småt. Det er en
tryghed at vide, at vi kan regne med hans ekspertise, og vi ser frem til fortsat at være kunder hos ham.`
        }
    ];

    const plugin = useMemo(() => Autoplay({
        delay: 15000,
        stopOnInteraction: true,
        playOnInit: !reducedMotion,
    }), [reducedMotion]);

    return (
        <section className="md:py-6">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-link mb-4 md:mb-6 text-center">
                    <span className="relative inline-block">
                        ... here's some honest feedback I've received
                    </span>
                </h2>

                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[plugin]}
                    className="w-full"
                    aria-label="Testimonials carousel"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <Testimonial {...testimonial} index={index} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:flex justify-center gap-4 mt-6">
                        <CarouselPrevious className="bg-gray-800 text-white" aria-label="Previous testimonial" />
                        <CarouselNext className="bg-gray-800 text-white" aria-label="Next testimonial" />
                    </div>
                </Carousel>
                <CompanyLogos />
            </div>
        </section>
    );
};

export default Testimonials;
