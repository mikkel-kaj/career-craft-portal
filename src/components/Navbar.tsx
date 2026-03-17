import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const NavbarCTA = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:hello@mikkelkajandersen.dk?subject=Consultation Request: ${encodeURIComponent(name)} - ${encodeURIComponent(selectedModel)}&body=${encodeURIComponent(`From: ${name}\nEngagement Model: ${selectedModel}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    toast({
      title: "Message Prepared",
      description: "Your consultation request has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm hidden sm:inline">Open to building something great</span>
          <span className="text-sm sm:hidden">Available</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-accent/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
            <Mail className="w-6 h-6 text-accent" />
            Schedule Your Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-base">
            Take the first step towards transforming your technical challenges into opportunities.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nav-name" className="text-white text-sm font-medium">Full Name</Label>
            <Input
              id="nav-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-card-lighter border-accent/20 text-white placeholder:text-gray-500 focus:border-accent/50 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nav-engagement" className="text-white text-sm font-medium">Engagement Model</Label>
            <Select required value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger id="nav-engagement" className="bg-card-lighter border-accent/20 text-white">
                <SelectValue placeholder="Choose an engagement model" />
              </SelectTrigger>
              <SelectContent className="bg-card border-accent/20">
                <SelectItem value="full-time" className="text-white">Full-Time Project</SelectItem>
                <SelectItem value="part-time" className="text-white">Part-Time Engagement</SelectItem>
                <SelectItem value="package" className="text-white">Consultancy Package</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nav-message" className="text-white text-sm font-medium">Project Details</Label>
            <Textarea
              id="nav-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please describe your project requirements or technical challenges"
              required
              className="bg-card-lighter border-accent/20 text-white placeholder:text-gray-500 focus:border-accent/50 transition-colors min-h-[150px] resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-primary font-medium py-6 text-lg relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Request
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <p className="text-xs text-gray-400 text-center -mt-3">
            Nothing happens? Send me an e-mail at{" "}
            <a href="mailto:hello@mikkelkajandersen.dk" className="text-accent hover:text-accent/80 transition-colors">
              hello@mikkelkajandersen.dk
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, isActive, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
    aria-current={isActive ? "page" : undefined}
  >
    <span className={isActive ? "text-white" : "text-gray-300 hover:text-gray-100"}>
      {children}
    </span>
    {isActive && (
      <motion.div
        layoutId="tubelight"
        className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
        style={{ zIndex: -1 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      >
        <div className="absolute -top-px left-3 right-3 h-px bg-accent/60" />
      </motion.div>
    )}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl">
      <div className="bg-card/60 backdrop-blur-xl rounded-full border border-accent/10 px-4 py-2.5 shadow-lg shadow-black/20">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-sm md:text-base font-bold text-white hover:text-accent transition-colors whitespace-nowrap pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            Mikkel Kaj Andersen
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/profile" isActive={location.pathname === "/profile"}>
              Profile
            </NavLink>
            <span className="text-gray-600 mx-1">|</span>
            <NavbarCTA />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <NavbarCTA />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 bg-card/90 backdrop-blur-xl rounded-2xl border border-accent/10 overflow-hidden shadow-lg shadow-black/20"
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" isActive={location.pathname === "/"} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/profile" isActive={location.pathname === "/profile"} onClick={() => setIsOpen(false)}>
              Profile
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
