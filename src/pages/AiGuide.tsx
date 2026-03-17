import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const Step = ({ number, title, total, children }: { number: number; title: string; total: number; children: React.ReactNode }) => (
    <div className="relative pl-10 md:pl-14 pb-10">
        <div className="absolute left-0 md:left-2 top-0 w-7 h-7 rounded-full bg-accent text-card flex items-center justify-center text-sm font-bold">
            {number}
        </div>
        {number < total && (
            <div className="absolute left-3 md:left-[18px] top-8 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
        )}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="text-gray-300 space-y-3 leading-relaxed">{children}</div>
    </div>
);

const CodeBlock = ({ children }: { children: string }) => (
    <pre className="glass rounded-lg p-4 overflow-x-auto text-sm text-gray-200 my-3">
        <code>{children}</code>
    </pre>
);

const ToolCard = ({ name, description, link, what }: { name: string; description: string; link: string; what: string }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-light rounded-xl p-5 border border-accent/10 hover:border-accent/20 transition-all group block"
    >
        <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{name}</h4>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors shrink-0 mt-1" />
        </div>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <p className="text-accent/70 text-xs">{what}</p>
    </a>
);

const AiGuide = () => {
    return (
        <div className="min-h-screen bg-card flex flex-col">
            <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
                <div className="container mx-auto max-w-3xl">
                    <p className="text-accent font-medium mb-4">Guide</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Øg dit Claude Code output med de her AI-værktøjer
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        I guiden forneden gennemgår jeg det setup jeg har brugt for at løfte kvaliteten af de designs jeg kan udvikle iterativt med Claude Code.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Kombinationen af de rigtige værktøjer gør forskellen. Hvert værktøj løser én ting godt — sammen løfter de kvaliteten markant. 
                                            </p>
                                            <br/>
                                            <p className="text-lg text-gray-300 leading-relaxed">
                        Her er en guide til hvordan du sætter det op selv.

                                            </p>
                </div>
            </section>

            <section className="pb-12 md:pb-16 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold text-white mb-8">Værktøjerne</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                        <ToolCard
                            name="Google Stitch"
                            link="https://stitch.withgoogle.com/"
                            description="Generer UI-mockups fra tekst-prompts. Lav hurtige prototyper af layouts som Claude Code kan bruge som visuel reference."
                            what="Brugt til: Mockups og visuel retning inden implementering"
                        />
                        <ToolCard
                            name="Nano Banana 2"
                            link="https://ai.google.dev/gemini-api/docs/image-generation"
                            description="Image-generation via Gemini. Genererer ikoner, logoer, illustrationer og visuelle assets direkte fra CLI'en."
                            what="Brugt til: Placeholder-logoer, ikoner og visuelle assets"
                        />
                        <ToolCard
                            name="UI/UX Pro Max"
                            link="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                            description="Claude Code skill med en komplet design-database. 67 styles, 96 farvepaletter, 99 UX-retningslinjer. Kører automatiseret design-review."
                            what="Brugt til: Design-audit, kontrast-tjek, tilgængelighed, farvepalet"
                        />
                        <ToolCard
                            name="21st.dev"
                            link="https://21st.dev/agents/overview"
                            description="Bibliotek af færdige UI-komponenter. Søg efter mønstre og få kode du kan tilpasse direkte — navbars, carousels, cards, layouts."
                            what="Brugt til: Navbar, tech-carousel, logo-søgning, komponent-inspiration"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4">Hvordan det hele hænger sammen</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Idéen er simpel: hvert værktøj er godt til én ting. Google Stitch og Nano Banana laver mockups og assets som Claude Code kan bruge som reference. UI/UX Pro Max sikrer at designet overholder standarder. 21st.dev leverer afprøvede komponent-mønstre. Claude Code binder det hele sammen og skriver koden.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-8">Opsætning trin for trin</h2>

                    <Step number={1} title="Installer Claude Code" total={6}>
                        <p>Claude Code er Anthropics CLI-værktøj til AI-assisteret kodning. Det er herfra du styrer alle MCP-serverne og skills.</p>
                        <CodeBlock>{`npm install -g @anthropic-ai/claude-code
claude`}</CodeBlock>
                        <p>Kør <code className="text-accent">claude</code> i dit projekt-directory for at starte.</p>
                    </Step>

                    <Step number={2} title="Tilføj Google Stitch MCP-server" total={6}>
                        <p>Google Stitch lader dig generere UI-mockups fra tekst-beskrivelser. Perfekt til at sætte den visuelle retning inden du begynder at kode.</p>
                        <CodeBlock>{`# Tilføj i .claude/settings.json:
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/stitch-mcp@latest"],
      "env": {
        "STITCH_API_KEY": "<din-api-nøgle>"
      }
    }
  }
}`}</CodeBlock>
                        <p>Opsæt din konto på <a href="https://stitch.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">stitch.withgoogle.com</a>.</p>
                        <p>Derefter kan du bede Claude Code: <em>"Lav et mockup af en landing page med dark theme og amber accent"</em> — og den genererer et visuelt udkast den selv kan bruge som reference.</p>
                    </Step>

                    <Step number={3} title="Opsæt Nano Banana 2 (image-generation)" total={6}>
                        <p>Nano Banana bruger Geminis image-generation API til at lave ikoner, logoer og assets direkte fra terminalen.</p>
                        <CodeBlock>{`# 1. Hent en Gemini API-nøgle fra:
#    https://ai.google.dev/gemini-api/docs/api-key

# 2. Tilføj den til dit miljø:
echo 'export GOOGLE_API_KEY="din-nøgle"' >> ~/.bashrc
source ~/.bashrc

# 3. Opsæt Nano Banana:
python3 -m venv ~/nano-banana-venv
source ~/nano-banana-venv/bin/activate
pip install google-genai Pillow

# 4. Hent generate.py scriptet og læg det i ~/nano-banana/

# 5. Opret Claude Code skill:
mkdir -p ~/.claude/skills/generate-image`}</CodeBlock>
                        <p>Opret filen <code className="text-accent">~/.claude/skills/generate-image/SKILL.md</code>:</p>
                        <CodeBlock>{`---
name: generate-image
description: Generate images using Nano Banana 2.
argument-hint: [prompt]
---

Generate an image:

\`\`\`bash
source ~/.bashrc && ~/nano-banana-venv/bin/python \\
  ~/nano-banana/generate.py "PROMPT" \\
  -o output.png -m flash -s 1K
\`\`\`

Options: -m flash|pro, -r 1:1|16:9|9:16,
         -s 512|1K|2K|4K`}</CodeBlock>
                        <p>Nu kan du sige: <em>"Generer et logo til mit projekt"</em> — og Claude Code kalder skillen automatisk.</p>
                    </Step>

                    <Step number={4} title="Installer UI/UX Pro Max skill" total={6}>
                        <p>Denne skill giver Claude Code en komplet design-database med styles, farvepaletter, font-pairings og UX-retningslinjer. Den kan køre automatiseret design-review der fanger tilgængelighedsfejl og designproblemer.</p>
                        <CodeBlock>{`# Klon skill'en:
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill \\
  .claude/skills/ui-ux-pro-max`}</CodeBlock>
                        <p>Claude Code finder den automatisk. Prøv: <em>"Lav en design-review af hele projektet"</em> — den tjekker kontrast, spacing, hover-states, tilgængelighed og mere.</p>
                    </Step>

                    <Step number={5} title="Tilføj 21st.dev MCP-server" total={6}>
                        <p>21st.dev er et bibliotek af færdige UI-komponenter. MCP-serveren lader Claude Code søge og hente komponent-kode direkte.</p>
                        <CodeBlock>{`# I Claude Code, kør:
/install-mcp 21st-magic

# Eller tilføj manuelt i .claude/settings.json:
{
  "mcpServers": {
    "21st-magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"],
      "env": {
        "TWENTY_FIRST_API_KEY": "<din-api-nøgle>"
      }
    }
  }
}`}</CodeBlock>
                        <p>Hent din API-nøgle på <a href="https://21st.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">21st.dev</a>. Prøv: <em>"Søg 21st.dev efter en floating navbar komponent"</em>.</p>
                    </Step>

                    <Step number={6} title="Brug det hele sammen" total={6}>
                        <p>Når alle værktøjer er sat op, er workflow'et:</p>
                        <div className="glass rounded-lg p-4 my-3 space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-accent font-bold shrink-0">1.</span>
                                <span><strong className="text-white">Mockup</strong> — Bed Claude Code lave et Stitch-mockup af din side. Det sætter den visuelle retning.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-accent font-bold shrink-0">2.</span>
                                <span><strong className="text-white">Komponenter</strong> — Søg 21st.dev efter mønstre der passer til mockup'et. Tilpas til dit tema.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-accent font-bold shrink-0">3.</span>
                                <span><strong className="text-white">Assets</strong> — Generer ikoner og logoer med Nano Banana direkte i flow'et.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-accent font-bold shrink-0">4.</span>
                                <span><strong className="text-white">Review</strong> — Kør en design-review med UI/UX Pro Max. Den finder problemer du ikke ser.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-accent font-bold shrink-0">5.</span>
                                <span><strong className="text-white">Iterer</strong> — Du er smagsdommeren. Giv feedback, juster, gentag.</span>
                            </div>
                        </div>
                        <p>Det vigtigste take-away: AI'en erstatter ikke din smag. Den erstatter tastaturet. Flaskehalsen rykker fra "kan jeg bygge det her?" til "ved jeg hvad godt ser ud?"</p>
                    </Step>

                    <div className="glass-light rounded-xl p-6 border border-accent/10 mt-4">
                        <h3 className="text-lg font-bold text-white mb-3">Resultatet</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Floating navbar med animeret aktiv-indikator, tech-badges med tooltips, glassmorphism-kort, infinite-scroll carousel, framer-motion animationer og fuld keyboard-navigation — alt sammen lavet med dette setup. Kig rundt på siden og se resultatet.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AiGuide;
