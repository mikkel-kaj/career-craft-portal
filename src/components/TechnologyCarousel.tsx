import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ui/image-with-fallback";
import { InfiniteSlider } from "./ui/infinite-slider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AnimatePresence, motion } from "framer-motion";

interface Technology {
    name: string;
    logo: string;
    bubble: string;
    category: 'core' | 'framework' | 'tool';
}

const technologies: Technology[] = [
    { name: "C++", logo: "/img/tech/cpp.svg", bubble: "Built a matching engine in C++23 at Ella Exchange — lock-free queues, actor concurrency, the whole deal.", category: 'core' },
    { name: "Java", logo: "/img/tech/java.svg", bubble: "My competitive programming language of choice. Built enterprise apps with Spring at Netcompany and Keylane.", category: 'core' },
    { name: "C#", logo: "/img/tech/csharp.svg", bubble: "6 years deep — .NET microservices at Visma, EFCore APIs, plus a bunch of freelance projects.", category: 'core' },
    { name: "Python", logo: "/img/tech/python.svg", bubble: "My go-to for algorithms, ML prototyping, and quick backend services with Django/Flask.", category: 'core' },
    { name: "TypeScript", logo: "/img/tech/typescript.svg", bubble: "Type safety everywhere. I use TS for React frontends and Node backends alike.", category: 'core' },
    { name: "React", logo: "/img/tech/react.svg", bubble: "This portfolio is React! I build responsive, performant web apps with the React ecosystem.", category: 'framework' },
    { name: "Flutter", logo: "/img/tech/flutter.svg", bubble: "All my freelance mobile apps are Flutter — Tattoo Archive, Gas Money, ScheduleIT.", category: 'framework' },
    { name: "Spring Boot", logo: "/img/tech/spring.svg", bubble: "Enterprise Java at Netcompany and Keylane — state-critical government systems.", category: 'framework' },
    { name: "Entity Framework", logo: "/img/tech/ef.svg", bubble: "My ORM of choice in the .NET world. Used it across multiple Visma projects.", category: 'framework' },
    { name: "AWS", logo: "/img/tech/aws.svg", bubble: "AWS Developer Associate certified. Built serverless infra at Visma with Lambda, S3, CloudFormation.", category: 'tool' },
    { name: "Docker", logo: "/img/tech/docker.svg", bubble: "Containerize everything. Used extensively at Visma and for all my deployment pipelines.", category: 'tool' },
    { name: "CI/CD", logo: "/img/tech/cicd.svg", bubble: "Jenkins, GitHub Actions, AWS CodePipeline — I've set up automated deploys across all of them.", category: 'tool' },
    { name: "Azure", logo: "/img/tech/azure.svg", bubble: "Used Azure cloud services for DSV projects and some Visma integrations.", category: 'tool' },
    { name: "PostgreSQL", logo: "/img/tech/postgresql.svg", bubble: "My preferred database. Also worked with MySQL, T-SQL, DynamoDB, and Redis.", category: 'tool' },
    { name: "Algorithm Design", logo: "/img/tech/predictive_modeling.svg", bubble: "Roster optimization at Visma, constraint satisfaction, mathematical programming — this is my jam.", category: 'core' },
    { name: "LLM & Deep Learning", logo: "/img/tech/deep_learning.svg", bubble: "Built an AI support agent at Tripletex with 80%+ accuracy using GPT, BERT, and RAG pipelines.", category: 'framework' },
    { name: "Optimization", logo: "/img/tech/statistical_analysis.svg", bubble: "12 different MIP solvers with OR-Tools for hospital roster scheduling. LP, IP, CP — you name it.", category: 'core' },
];

const ChatBubble = ({ text }: { text: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
    >
        <div className="relative bg-card-lighter/95 backdrop-blur-md border border-accent/15 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/30 w-[220px] md:w-[260px]">
            <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                {text}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-card-lighter/95" />
        </div>
    </motion.div>
);

const TechIcon = ({ tech }: { tech: Technology }) => {
    const [active, setActive] = useState(false);

    const toggle = useCallback(() => setActive(prev => !prev), []);

    return (
        <div
            className="relative shrink-0"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={toggle}
        >
            <AnimatePresence>
                {active && <ChatBubble text={tech.bubble} />}
            </AnimatePresence>

            <button
                type="button"
                className="flex flex-col items-center gap-2 px-3 py-2 min-w-[64px] min-h-[64px] rounded-lg cursor-pointer hover:bg-accent/5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`${tech.name}: ${tech.bubble}`}
            >
                <ImageWithFallback
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform"
                    fallbackClassName="w-10 h-10 md:w-12 md:h-12"
                />
                <span className={cn(
                    "text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center whitespace-nowrap",
                    tech.name.length > 14 && "text-[10px] md:text-xs"
                )}>
                    {tech.name}
                </span>
            </button>
        </div>
    );
};

const TechnologyCarousel = () => {
    const reducedMotion = useReducedMotion();

    const row1 = technologies.filter((_, i) => i < 9);
    const row2 = technologies.filter((_, i) => i >= 9);

    if (reducedMotion) {
        return (
            <div className="w-full py-4">
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
                    {technologies.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-4 relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-card to-transparent z-10" />

            <div className="space-y-2 pt-24">
                <InfiniteSlider gap={8} speed={35} speedOnHover={80}>
                    {row1.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </InfiniteSlider>

                <InfiniteSlider gap={8} speed={30} speedOnHover={80} reverse>
                    {row2.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    );
};

export default TechnologyCarousel;
