import { Code, Brain, Cloud, Database, HelpCircle } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import ImageWithFallback from "./ui/image-with-fallback";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const TechItem = ({ tech }: { tech: { name: string; logo: string; tooltip: string } }) => (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex flex-col items-center p-2 glass rounded-lg hover:bg-card-lighter/80 transition-colors cursor-pointer relative group">
                    <div className="relative">
                        <ImageWithFallback
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-6 h-6 md:w-8 md:h-8 mb-1"
                            fallbackClassName="w-6 h-6 md:w-8 md:h-8 mb-1"
                        />
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-accent/10 rounded-full p-0.5">
                            <HelpCircle className="w-2 h-2 text-accent" />
                        </div>
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-300 text-center line-clamp-1">{tech.name}</span>
                </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs glass-light">
                <p className="text-sm">{tech.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const categoryColors: Record<string, string> = {
    "Backend & Frontend": "bg-accent",
    "Cloud & DevOps": "bg-blue-400",
    "AI & Modeling": "bg-green-400",
    "Data Engineering": "bg-purple-400",
};

const CategoryHeader = ({ category, icon }: { category: string; icon: React.ReactNode }) => {
    const dotColor = categoryColors[category] || "bg-accent";
    return (
        <div className="flex items-center gap-1.5 mb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
            {icon}
            <h4 className="text-xs md:text-sm font-semibold text-accent">{category}</h4>
        </div>
    );
};

const CompanyLogoItem = ({ src, alt, name }: { src: string; alt: string; name: string }) => (
    <div className="flex flex-col items-center space-y-1 p-2 glass rounded-lg hover:shadow-lg transition-all text-center group">
        <ImageWithFallback
            src={src}
            alt={alt}
            className="h-6 md:h-10 w-auto bg-white rounded opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all"
        />
        <span className="text-[9px] md:text-[10px] font-medium text-gray-300 line-clamp-1">{name}</span>
    </div>
);

const backend = [
    { name: "C++", logo: "/img/tech/cpp.svg", tooltip: "Built low-latency C++23 exchange components, including matching engine paths, market data broadcasting, and performance-critical concurrency." },
    { name: "Java", logo: "/img/tech/java.svg", tooltip: "Built enterprise applications with Spring Boot at Netcompany and Keylane. Primary language in competitive programming." },
    { name: "C#", logo: "/img/tech/csharp.svg", tooltip: "6 years of experience. .NET microservices at Visma Enterprise, EFCore APIs, plus freelance projects." },
    { name: "Python", logo: "/img/tech/python.svg", tooltip: "Algorithms, ML prototyping, and backend services with Django and Flask." },
    { name: "Flutter", logo: "/img/tech/flutter.svg", tooltip: "All of my freelance projects have been built with Flutter except 'The Tattoo Archive'." },
    { name: "TypeScript", logo: "/img/tech/typescript.svg", tooltip: "Strong expertise in type-safe JavaScript development and modern frontend frameworks." },
    { name: "React", logo: "/img/tech/react.svg", tooltip: "Proficient in building responsive and performant web applications with React and its ecosystem." },
];

const cloud = [
    { name: "AWS", logo: "/img/tech/aws.svg", tooltip: "AWS Developer Associate. Cloud infrastructure at Visma Resolve, Lambda, S3, CloudFormation." },
    { name: "Docker", logo: "/img/tech/docker.svg", tooltip: "Containerization and orchestration of applications using Docker at Visma." },
    { name: "CI/CD", logo: "/img/tech/cicd.svg", tooltip: "Jenkins, GitHub Actions, and AWS CodePipeline deployment pipelines." },
    { name: "Azure", logo: "/img/tech/azure.svg", tooltip: "Azure cloud services and Microsoft ecosystem integration." },
    { name: "Monitoring", logo: "/img/tech/monitoring.svg", tooltip: "Prometheus, Grafana, and CloudWatch dashboards for production observability." },
];

const ai = [
    { name: "Algorithms", logo: "/img/tech/predictive_modeling.svg", tooltip: "Complex optimization algorithms — roster optimization, constraint satisfaction, mathematical programming." },
    { name: "ML Models", logo: "/img/tech/predictive_modeling.svg", tooltip: "Logistic regression, decision trees, neural networks, and more." },
    { name: "LLM / DL", logo: "/img/tech/deep_learning.svg", tooltip: "TensorFlow, PyTorch, BERT, GPT, Llama 3 — custom GenAI solutions." },
    { name: "Optimization", logo: "/img/tech/statistical_analysis.svg", tooltip: "LP, IP, constraint programming for automatic roster generation." },
    { name: "Statistics", logo: "/img/tech/statistical_analysis.svg", tooltip: "Probabilistic programming and statistical methods." },
];

const data = [
    { name: "PostgreSQL", logo: "/img/tech/postgresql.svg", tooltip: "PostgreSQL, MySQL, T-SQL, DynamoDB, and Redis." },
    { name: "EF Core", logo: "/img/tech/ef.svg", tooltip: "ORM development and database migrations in .NET." },
    { name: "Spring Boot", logo: "/img/tech/spring.svg", tooltip: "Enterprise applications at Netcompany and Keylane." },
];

const companies = [
    { src: "/img/resolve_logo.png", alt: "Resolve", name: "Resolve" },
    { src: "/img/visma-enterprise_logo.svg", alt: "Visma Enterprise", name: "Visma Enterprise" },
    { src: "/img/tripletex_logo.png", alt: "Tripletex", name: "Tripletex" },
    { src: "/img/netcompany_logo.png", alt: "Netcompany", name: "Netcompany" },
    { src: "/img/itminds_logo.jpg", alt: "IT-minds", name: "IT-minds" },
    { src: "/img/keylane_logo.png", alt: "Keylane", name: "Keylane" },
    { src: "/img/mim_logo.png", alt: "Make It Matter", name: "Make It Matter" },
    { src: "/img/godream_logo.jpeg", alt: "GoDream", name: "GoDream" },
    { src: "/img/itu_logo.png", alt: "ITU", name: "ITU" },
    { src: "/img/sjaellandske_medier_logo.svg", alt: "Sjællandske Medier", name: "Sjællandske Medier" },
];

const TechAndCompanies = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-8 md:py-12 bg-card"
        >
            <div className="max-w-7xl mx-auto">
                <div className="glass-light rounded-xl p-4 md:p-6 border border-accent/10">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-5">Technologies & Expertise</h3>

                    {/* Top of the L: Backend spans full width */}
                    <div className="mb-5">
                        <CategoryHeader category="Backend & Frontend" icon={<Code className="w-4 h-4 text-accent" />} />
                        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                            {backend.map((t) => <TechItem key={t.name} tech={t} />)}
                        </div>
                    </div>

                    {/* Bottom of the L: Cloud left | AI + Data + Companies right */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                        {/* Left leg */}
                        <div className="md:col-span-4">
                            <CategoryHeader category="Cloud & DevOps" icon={<Cloud className="w-4 h-4 text-accent" />} />
                            <div className="grid grid-cols-3 gap-2">
                                {cloud.map((t) => <TechItem key={t.name} tech={t} />)}
                            </div>
                        </div>

                        {/* Right extension */}
                        <div className="md:col-span-8 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <CategoryHeader category="AI & Modeling" icon={<Brain className="w-4 h-4 text-accent" />} />
                                    <div className="grid grid-cols-3 gap-2">
                                        {ai.map((t) => <TechItem key={t.name} tech={t} />)}
                                    </div>
                                </div>
                                <div>
                                    <CategoryHeader category="Data Engineering" icon={<Database className="w-4 h-4 text-accent" />} />
                                    <div className="grid grid-cols-3 gap-2">
                                        {data.map((t) => <TechItem key={t.name} tech={t} />)}
                                    </div>
                                </div>
                            </div>

                            {/* Companies flow seamlessly into the right side */}
                            <div className="pt-4 border-t border-accent/5">
                                <h4 className="text-xs md:text-sm font-semibold text-gray-300 mb-3">Companies I've Worked With</h4>
                                <div className="grid grid-cols-5 gap-2">
                                    {companies.map((c) => <CompanyLogoItem key={c.name} {...c} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TechAndCompanies;
