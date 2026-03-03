import { Link } from "react-router-dom";
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
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
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
          <DialogDescription className="text-gray-400 text-base">
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-accent/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-base md:text-xl font-bold text-white hover:text-accent transition-colors whitespace-nowrap">
            Mikkel Kaj Andersen
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-accent transition-colors">
              Profile
            </Link>
            <span className="text-gray-600">|</span>
            <NavbarCTA />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <NavbarCTA />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-accent/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
