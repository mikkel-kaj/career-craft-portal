import ImageWithFallback from "./ui/image-with-fallback";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

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

const CompanyLogos = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="py-12 md:py-16 px-4 bg-card"
        >
            <div className="container max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                    Companies I've Worked With
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                    {companies.map((company) => (
                        <CompanyLogoItem key={company.name} {...company} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default CompanyLogos;
