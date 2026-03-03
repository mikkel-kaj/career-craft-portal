import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Mail } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoUrl = `mailto:hello@mikkelkajandersen.dk?subject=Consultation Request: ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Message Prepared",
      description: "Your consultation request has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-lg font-medium group relative overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
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
            <Label htmlFor="name" className="text-white text-sm font-medium">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-card-lighter border-accent/20 text-white placeholder:text-gray-500 focus:border-accent/50 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm font-medium">Project Details</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please describe your project requirements or technical challenges"
              required
              className="bg-card-lighter border-accent/20 text-white placeholder:text-gray-500 focus:border-accent/50 transition-colors min-h-[150px] resize-none"
            />
          </div>
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-primary font-medium py-6 text-lg relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Request
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <p className="text-xs text-gray-400 text-center -mt-3">
            Nothing happens? Send me an e-mail at {" "}
            <a href="mailto:hello@mikkelkajandersen.dk" className="text-accent hover:text-accent/80 transition-colors">
              hello@mikkelkajandersen.dk
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactForm;
