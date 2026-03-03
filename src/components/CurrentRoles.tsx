import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CurrentRoles = () => {
    const ref = useScrollAnimation();

    return (
        <div ref={ref} className="container max-w-7xl mx-auto px-4 opacity-0">
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white">Recent Experience</h2>

                <Card className="bg-card-lighter border-gray-700 p-8">
                    <div className="space-y-2 mb-6">
                        <h3 className="text-2xl font-extrabold text-link">CTO</h3>
                        <p className="text-xl font-bold text-accent">Ella Exchange</p>
                        <p className="text-gray-200 font-medium">Oct 2025 - Mar 2026</p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-100 font-medium">
                            Sole technical hire at a NEMO-licensed intraday power exchange. I designed and delivered a full production-grade exchange platform from scratch in four months.
                        </p>
                        <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                            <li>Built a low-latency multi-process C++23 trading engine with separated order-entry and market-data paths.</li>
                            <li>Implemented actor-based concurrency using <code>std::jthread</code> and custom lock-free MPMC queues.</li>
                            <li>Integrated Protobuf over WebSockets, Auth0 JWT/JWKS verification, and compile-time product catalogue logic.</li>
                            <li>Delivered Go backend services with gRPC, PostgreSQL, and Temporal for trade, nomination, and settlement workflows.</li>
                            <li>Provisioned bare-metal Hetzner infrastructure with Terraform and Ansible, and shipped observability with OpenTelemetry.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["C++23", "uWebSockets", "Protobuf", "Go", "gRPC", "PostgreSQL", "Temporal", "Terraform", "Ansible", "OpenTelemetry"].map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card text-gray-100 font-medium">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="bg-card-lighter border-gray-700 p-8">
                    <div className="space-y-2 mb-6">
                        <h3 className="text-2xl font-extrabold text-link">Self-Employed Consultant and Founder</h3>
                        <p className="text-gray-200 font-medium">Mar 2026 - Present</p>
                    </div>

                    <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                        <li>Egmont: AI contractor building GenAI services for children and teachers.</li>
                        <li>Medicinex: Full medicine and law platform, including large backend and frontend codebases.</li>
                        <li>boliganalyse.ai: Tooling for apartment analysis in Denmark.</li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {["AI", "GenAI", "Product Development", "Consulting", "Architecture"].map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-card text-gray-100 font-medium">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CurrentRoles;
