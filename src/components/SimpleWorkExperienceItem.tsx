import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

interface SimpleWorkExperienceItemProps {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
    logo?: string;
    description?: string;
    defaultOpen?: boolean;
}

const SimpleWorkExperienceItem = ({
    company,
    role,
    period,
    responsibilities,
    technologies,
    logo,
    description,
    defaultOpen = false
}: SimpleWorkExperienceItemProps) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="p-8 glass border-accent/5">
                <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined}>
                    <AccordionItem value="item-1" className="border-none">
                        <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                            <div>
                                <div className="flex items-center gap-4">
                                    {logo && (
                                        <img src={logo} alt={`${company} logo`} className="h-8 w-auto" />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{company}</h3>
                                        <p className="text-accent text-lg">{role}</p>
                                        <p className="text-gray-400">{period}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AccordionTrigger className="hover:no-underline">
                            <span className="text-sm text-gray-400">Click to expand details</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4">
                                {description && (
                                    <div className="mb-6 p-4 bg-card-lighter/60 rounded-lg backdrop-blur-sm">
                                        <h4 className="text-lg font-semibold text-white mb-2">The role</h4>
                                        <p className="text-gray-300 leading-relaxed">{description}</p>
                                    </div>
                                )}
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300 hover:bg-accent/10 hover:text-white transition-colors">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        </motion.div>
    );
};

export default SimpleWorkExperienceItem;
