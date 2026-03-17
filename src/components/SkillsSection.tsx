import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const primarySkills = ["Java", "C#", "C++", "Python", "TypeScript", "React", "Flutter", "SQL"];
const secondarySkills = [".NET", "JavaScript", "Dart", "iOS", "Android", "HTML", "CSS", "Scala", "F#", "Maven", "Git"];
const frameworks = ["Spring", "Entity Framework", "Pandas", "PyTorch"];

const stagger = {
    container: {
        visible: { transition: { staggerChildren: 0.03 } },
    },
    item: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    },
};

const SkillsSection = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="py-16 px-4 bg-card"
        >
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Languages & Frameworks</h3>
                        <motion.div
                            variants={stagger.container}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-wrap gap-2"
                        >
                            {primarySkills.map((skill) => (
                                <motion.div key={skill} variants={stagger.item}>
                                    <Badge variant="secondary"
                                           className="text-sm bg-card-lighter text-gray-300 border border-accent/20 px-3 py-1 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                            {secondarySkills.map((skill) => (
                                <motion.div key={skill} variants={stagger.item}>
                                    <Badge variant="secondary"
                                           className="text-sm bg-card-lighter text-gray-300 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
                        <motion.div
                            variants={stagger.container}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-wrap gap-2"
                        >
                            {frameworks.map((framework) => (
                                <motion.div key={framework} variants={stagger.item}>
                                    <Badge variant="secondary"
                                           className="text-sm bg-card-lighter text-gray-300 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                        {framework}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
