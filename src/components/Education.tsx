import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Education = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="py-16 bg-card-lighter px-4 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"/>

            <div className="container max-w-4xl mx-auto relative z-10">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <img
                        src="/img/itu_logo.png"
                        alt="ITU Logo"
                        className="h-12 w-auto"
                    />
                    <h2 className="text-3xl font-extrabold text-white">Academic Excellence</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <Card className="p-6 glass border-accent/10 hover:shadow-xl hover:scale-[1.02] transform duration-200">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-extrabold text-white">IT-University of Copenhagen</h3>
                                <Badge className="bg-accent text-card font-bold shadow-[0_0_10px_rgba(251,191,36,0.2)]">MSc</Badge>
                            </div>
                            <p className="text-gray-200 font-medium mb-2">Aug. 2019 - Aug 2021</p>
                            <div className="space-y-2">
                                <p className="text-gray-100 font-medium">Mastering Advanced Algorithms & Optimization</p>
                                <p className="text-accent font-bold">Outstanding Achievement: Top 10% (11.00/12.00)</p>
                            </div>
                        </Card>

                        <Card className="p-6 glass border-accent/5 hover:shadow-xl hover:scale-[1.02] transform duration-200">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-extrabold text-white">IT-University of Copenhagen</h3>
                                <Badge className="bg-primary-light text-primary font-bold">BSc</Badge>
                            </div>
                            <p className="text-gray-200 font-medium mb-2">Aug. 2016 - Aug 2019</p>
                            <div className="space-y-2">
                                <p className="text-gray-100 font-medium">Advanced Software Engineering Foundations</p>
                                <p className="text-gray-100 font-medium">Specialized in Cutting-edge ML & Security</p>
                            </div>
                        </Card>
                    </div>

                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/img/itu.png"
                            alt="IT University of Copenhagen Building"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
                        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-sm font-bold">IT University of Copenhagen</p>
                            <p className="text-xs text-gray-100">Rued Langgaards Vej 7, 2300 København</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Education;
