import { useState, useEffect } from "react";
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

const AvailabilityBadge = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-card/80 backdrop-blur-lg border transition-all duration-300 cursor-pointer ${
            hovered ? "border-accent/40 shadow-[0_0_20px_rgba(251,191,36,0.1)]" : "border-accent/20"
          } ${
            visible ? "animate-slide-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Pulsing green dot */}
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
            <span className="relative inline-flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400" />
          </span>

          <span className="text-xs sm:text-sm text-white/90 font-medium whitespace-nowrap">
            Available for Projects
          </span>

          {/* Hover CTA arrow */}
          <ArrowRight
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent transition-all duration-300 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0"
            }`}
          />
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
            <Label htmlFor="avail-name" className="text-white text-sm font-medium">Full Name</Label>
            <Input
              id="avail-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-card-lighter border-accent/20 text-white placeholder:text-gray-500 focus:border-accent/50 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avail-engagement" className="text-white text-sm font-medium">Engagement Model</Label>
            <Select required value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger id="avail-engagement" className="bg-card-lighter border-accent/20 text-white">
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
            <Label htmlFor="avail-message" className="text-white text-sm font-medium">Project Details</Label>
            <Textarea
              id="avail-message"
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

export default AvailabilityBadge;
