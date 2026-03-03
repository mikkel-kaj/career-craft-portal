import SimpleWorkExperienceItem from "./SimpleWorkExperienceItem";

const WorkExperience = () => {
    return (
        <section id="professional-experience" className="py-16 bg-card-lighter px-4">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
                <div className="space-y-8">
                    <SimpleWorkExperienceItem
                        company="ELLA EXCHANGE"
                        role="CTO"
                        period="Oct 2025 - Mar 2026"
                        defaultOpen={true}
                        description="Sole technical hire at an intraday power exchange. Designed and delivered a complete production-grade exchange platform from scratch in 4 months."
                        responsibilities={[
                            "Built a low-latency C++23 multi-process matching engine with isolated order-entry and market-data paths",
                            "Implemented actor-based concurrency using std::jthread actors and custom lock-free MPMC queues",
                            "Shipped Protobuf-serialized WebSocket messaging and Auth0 JWT/JWKS verification at the C++ edge",
                            "Delivered Go backend services for trade processing, nominations, and settlement with gRPC, PostgreSQL, and Temporal",
                            "Set up bare-metal infrastructure on Hetzner using Terraform and Ansible, with observability via OpenTelemetry"
                        ]}
                        technologies={["C++23", "uWebSockets", "Protobuf", "CMake", "vcpkg", "Go", "gRPC", "PostgreSQL", "Temporal", "Terraform", "Ansible", "OpenTelemetry"]}
                    />

                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="AI Tech Lead"
                        period="Aug 2023 - Jan 2025"
                        description="As AI Tech Lead, I drive the end-to-end development of AI solutions, from architecture to deployment. Working closely with Product Management to align technical implementation with business objectives, I lead the team in delivering sophisticated AI services while ensuring best practices in cloud infrastructure, CI/CD, and system design. In addition to everything mentioned under AI Developer, I also handle the following:"
                        responsibilities={[
                            "Lead the technical strategy and implementation of AI services, including architecture design and CI/CD pipelines",
                            "Drive knowledge sharing and mentorship within the team while maintaining high code quality standards",
                            "Developed an AI-powered support agent achieving 85% self-service rate using RAG and vector search",
                            "Manage sprint ceremonies and backlog prioritization as agile lead for the AI team",
                            "Collaborate with clients to translate business requirements into technical solutions",
                            "Oversee cloud infrastructure on AWS and Azure, implementing best practices in security and scalability"
                        ]}
                        technologies={["Python", "Java", "AWS", "Azure", "ML/AI", "LLMs", "RAG", "CI/CD", "Terraform"]}
                    />

                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="AI Developer"
                        period="May 2022 - Aug 2023"
                        description="Focused on developing sophisticated optimization algorithms for hospital work rosters, implementing various solver approaches and improving system performance through mathematical modeling and optimization techniques."
                        responsibilities={[
                            "Worked on a heuristic-based optimization solver to generate optimal work rosters for hospitals and elderly care, requiring deep understanding of object-oriented design, memory management, and performance optimization in Java/Python",
                            "Implemented scoring rankers, candidate selection algorithms, constraints and oversaw the architectural design of the algorithm itself",
                            "Implemented 12 different MIP solvers with Google OR tools, that can be used to quickly identify feasibility of the problem",
                            "Cloud architect on the team, and implemented our migration from TeamCity to Github Actions",
                            "Role as Service Owner and Security Engineer, meaning product stability/success is my responsibility",
                            "Our first big customer was PostNord, I was development lead and responsible for driving this customer to success. Some things I handled were: Single-person assignment (increased accuracy by 40%), Performance improvements (improved caching, and build processes), and project management/debugging ambitious payloads.",
                            "I create and maintain our infrastructure setup which is serverless, and managed through CloudFormation, with Docker, S3 and Lambda setup for test execution and deployment"
                        ]}
                        technologies={["Java", "Python", "AWS", "CloudFormation", "Docker", "OR-Tools", "Lambda"]}
                    />

                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="Software Developer"
                        period="Oct 2020 - May 2022"
                        description="Full-stack development focusing on performance optimization and mobile application development, working with both frontend and backend technologies to deliver robust solutions."
                        responsibilities={[
                            "T-SQL query optimization, API development, and business logic implementations in 5 enormous projects, primarily in C#",
                            "Reduced Visma HR central loading time from 10-30 seconds to 100-500ms",
                            "Led engineering transition from e-Boks to Mit.dk",
                            "Developed MyVisma app for Android and iOS using Xamarin and RealmDB",
                            "Implemented new features and bug fixes for Visma Enterprise",
                        ]}
                        technologies={["C#", "Angular", "Xamarin", "T-SQL", "DB2", "Realm DB"]}
                    />

                    <SimpleWorkExperienceItem
                        company="SYNERGY SOFTWARE"
                        role="Software Engineer & Founder"
                        period="May 2022 - Present"
                        description="Independent software consultancy focusing on enterprise solutions, cloud migrations, and custom software development for various clients across different industries."
                        responsibilities={[
                            "Mainframe migration to AWS, requiring changes in most deployed codebases",
                            "Maintain a data-processing project with a T-SQL database and BI products using C#",
                            "Developed custom solution for GoDream (Danish gift-card provider)",
                            "Built on .NET with EFCore ORM",
                            "PostgreSQL database implementation",
                            "AWS infrastructure deployment"
                        ]}
                        technologies={[".NET", "C#", "AWS", "PostgreSQL", "EFCore", "T-SQL", "BI"]}
                    />

                    <SimpleWorkExperienceItem
                        company="IT-UNIVERSITY OF COPENHAGEN"
                        role="Teaching Assistant"
                        period="Jan 2018 - Jan 2021"
                        description="Academic role focused on teaching and mentoring students across various computer science courses, providing hands-on guidance in programming, algorithms, and system design."
                        responsibilities={[
                            "Conducted workshops and lectures in courses including:",
                            "Operating Systems and C",
                            "Algorithm Design",
                            "Analysis, Design, and Software Architecture",
                            "Introduction to Database and Design",
                            "Prototyping of Interactive Technologies",
                            "StudyLab (Help for all courses)"
                        ]}
                        technologies={["C", "Algorithms", "Architecture", "Databases", "Teaching"]}
                    />

                    <SimpleWorkExperienceItem
                        company="NETCOMPANY"
                        role="Part-time Consultant"
                        period="Aug 2019 - Oct 2020"
                        description="Worked on critical government systems using Java Spring ecosystem, focusing on robust backend development and frontend integration with React."
                        responsibilities={[
                            "Consultant on state-critical systems: Boligstøtte and Social Pension Kommune",
                            "Developed systems handling multi-million annual payments",
                            "Tech stack included Java with Spring and Hibernate",
                            "OracleDB with T-SQL syntax",
                            "Frontend in React and Thymeleaf"
                        ]}
                        technologies={["Java", "Spring", "Hibernate", "React", "OracleDB", "T-SQL"]}
                    />

                    <SimpleWorkExperienceItem
                        company="IT-MINDS"
                        role="Part-time Consultant"
                        period="Feb 2019 - Aug 2019"
                        description="Specialized in Azure cloud services development and embedded systems programming, working with both cloud infrastructure and low-level device programming."
                        responsibilities={[
                            "Developed features for DSV using Azure cloud services",
                            "Integrated and extended C-code for micro devices at HPNow"
                        ]}
                        technologies={["C", "Azure", "Cloud Services"]}
                    />

                    <SimpleWorkExperienceItem
                        company="KEYLANE"
                        role="Part-time Developer"
                        period="Jan 2018 - Feb 2019"
                        description="Full-stack development role focusing on internal tools development and testing infrastructure, working with Java backend and automated testing solutions."
                        responsibilities={[
                            "Developed in-house git server for visualizing branch status and DB statistics",
                            "Created comprehensive front-end testing project using Selenium",
                            "Maintained front-end and back-end systems using Java and MySQL"
                        ]}
                        technologies={["Java", "MySQL", "Selenium", "Git"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
