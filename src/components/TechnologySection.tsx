import { Code, Brain, Cloud, Database, HelpCircle } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import ImageWithFallback from "./ui/image-with-fallback";

// TechnologyItem component
const TechnologyItem = ({ tech }: { tech: { name: string; logo: string; tooltip: string } }) => (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex flex-col items-center p-2 md:p-3 bg-card rounded-lg hover:bg-card-lighter transition-colors cursor-pointer relative group">
                    <div className="relative">
                        <ImageWithFallback
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2"
                            fallbackClassName="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2"
                        />
                        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-accent/2 rounded-full p-0.5 md:p-1">
                            <HelpCircle className="w-2 h-2 md:w-3 md:h-3 text-accent" />
                        </div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-300 text-center line-clamp-2">{tech.name}</span>
                </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-card-lighter">
                <p className="text-sm">{tech.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

// TechnologyCategory component
const TechnologyCategory = ({ category, icon, items }: { 
    category: string; 
    icon: React.ReactNode; 
    items: Array<{ name: string; logo: string; tooltip: string }> 
}) => (
    <div className="space-y-3 md:space-y-4">
        <div className="flex items-center gap-2 px-2 md:px-0">
            {icon}
            <h4 className="text-base md:text-lg font-semibold text-accent">{category}</h4>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-3 gap-2 md:gap-4">
            {items.map((tech) => (
                <TechnologyItem key={tech.name} tech={tech} />
            ))}
        </div>
    </div>
);

const TechnologySection = () => {
    const technologies = [
        {
            category: "Backend & Frontend Development",
            icon: <Code className="w-5 h-5 text-accent mb-2" />,
            items: [
                {
                    name: "C++",
                    logo: "/img/tech/cpp.svg",
                    tooltip: "Built low-latency C++23 exchange components, including matching engine paths, market data broadcasting, and performance-critical concurrency."
                },
                { 
                    name: "Java", 
                    logo: "/img/tech/java.svg",
                    tooltip: "Built enterprise applications with Spring Boot at Netcompany and Keylane, along with experience from many other projects. Was my primary language in competitive programming."
                },
                { 
                    name: "C#", 
                    logo: "/img/tech/csharp.svg",
                    tooltip: "6 years of experience in C# development. Developed .NET applications as a fullstack developer at Visma Enterprise with microservices architecture, specializing in API development with EFCore and other tools. Completed various freelance projects with C#."
                },
                { 
                    name: "Python", 
                    logo: "/img/tech/python.svg",
                    tooltip: "Auxillary developer in Python building web server applications, algorithm development, infrastructure and APIs with Django and Flask."
                },
                { 
                    name: "Flutter", 
                    logo: "/img/tech/flutter.svg",
                    tooltip: "All of my freelance projects have been built with Flutter except 'The Tattoo Archive'."
                },
                { 
                    name: "TypeScript", 
                    logo: "/img/tech/typescript.svg",
                    tooltip: "Strong expertise in type-safe JavaScript development and modern frontend frameworks."
                },
                { 
                    name: "React", 
                    logo: "/img/tech/react.svg",
                    tooltip: "Proficient in building responsive and performant web applications with React and its ecosystem."
                }
            ]
        },
        {
            category: "Cloud & DevOps",
            icon: <Cloud className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "AWS", 
                    logo: "/img/tech/aws.svg",
                    tooltip: "AWS Developer Assosciate with experience in designing and implementing cloud infrastructure at Visma Resolve and various freelance projects."
                },
                { 
                    name: "Docker", 
                    logo: "/img/tech/docker.svg",
                    tooltip: "Containerization and orchestration of applications using Docker at Visma."
                },
                { 
                    name: "CI/CD", 
                    logo: "/img/tech/cicd.svg",
                    tooltip: "Implementation of automated deployment pipelines using Jenkins, GitHub Actions, and AWS CodePipeline."
                },
                { 
                    name: "Azure (occasional)", 
                    logo: "/img/tech/azure.svg",
                    tooltip: "Experience with Azure cloud services and integration with Microsoft ecosystem."
                },
                { 
                    name: "Monitoring", 
                    logo: "/img/tech/monitoring.svg",
                    tooltip: "Proficient in building dashboards to monitor product lifecycles from end to end, analyzing logs and errors to ensure product reliability and performance in tools like Prometheus, Grafana, and CloudWatch."
                }
            ]
        },
        {
            category: "Predictive Modeling & AI",
            icon: <Brain className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "Algorithm Design", 
                    logo: "/img/tech/predictive_modeling.svg",
                    tooltip: "Expert in designing and implementing complex algorithms for optimization problems, including roster optimization, constraint satisfaction, and mathematical programming."
                },
                { 
                    name: "Predictive Modeling", 
                    logo: "/img/tech/predictive_modeling.svg",
                    tooltip: "Skilled in creating various machine learning models, such as logistic regression, decision trees, and neural networks."
                },
                { 
                    name: "LLM and Deep Learning", 
                    logo: "/img/tech/deep_learning.svg",
                    tooltip: "Proficient in using tools/models like TensorFlow, PyTorch, BERT, GPT, and Llama 3, to develop and implement custom GenAI solutions."
                },
                { 
                    name: "Mathematical Optimization", 
                    logo: "/img/tech/statistical_analysis.svg",
                    tooltip: "Experience in implementing complex mathematical optimization models for workforce planning, including linear programming, integer programming, and constraint programming for automatic roster generation."
                },
                { 
                    name: "Statistical Analysis", 
                    logo: "/img/tech/statistical_analysis.svg",
                    tooltip: "Experience with probabilistic programming and statistical methods."
                },
            ]
        },
        {
            category: "Data Engineering",
            icon: <Database className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "PostgreSQL", 
                    logo: "/img/tech/postgresql.svg",
                    tooltip: "Database design, optimization, and management in PostgreSQL/MySql/T-SQL, DynamoDB, and Redis."
                },
                { 
                    name: "Entity Framework", 
                    logo: "/img/tech/ef.svg",
                    tooltip: "Used during ORM development and database migration setup."
                },
                { 
                    name: "Spring Boot", 
                    logo: "/img/tech/spring.svg",
                    tooltip: "Worked on enterprise applications with Spring Boot at Netcompany and Keylane."
                },
            ]
        }
    ];

    return (
        <div className="bg-card-lighter rounded-xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 px-2 md:px-0">Technologies & Expertise</h3>
            <div className="space-y-6 md:space-y-8">
                {technologies.map((category, index) => (
                    <TechnologyCategory 
                        key={index} 
                        category={category.category} 
                        icon={category.icon} 
                        items={category.items} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TechnologySection;
