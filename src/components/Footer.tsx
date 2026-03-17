import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-8 mt-auto relative" aria-label="Footer">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            <p className="font-medium text-white">Mikkel Kaj Andersen</p>
            <p>CVR: 39399903</p>
            <p>Est. December 20, 2022</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mikkel-kaj-andersen-b0a097a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.3)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
