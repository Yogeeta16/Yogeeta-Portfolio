
import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would normally send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-dark">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <Phone className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91-9911576133</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <Mail className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">bodadeyogeeta2001@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <MapPin className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Yogeeta16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-light/10 rounded-full text-purple hover:bg-purple-light/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yogeeta-bodade-1a7687228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-light/10 rounded-full text-purple hover:bg-purple-light/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:bodadeyogeeta2001@gmail.com"
                  className="p-3 bg-purple-light/10 rounded-full text-purple hover:bg-purple-light/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Online Profiles</h4>
              <div className="space-y-2">
                <a
                  href="https://leetcode.com/yogeeta16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple hover:underline"
                >
                  LeetCode: leetcode.com/yogeeta16
                </a>
                <a
                  href="https://www.hackerrank.com/bsyog92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple hover:underline"
                >
                  HackerRank: hackerrank.com/bsyog92
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-dark">
              Send Me a Message
            </h3>
            
            <form
  action="https://formspree.io/f/mjkyqelz"
  method="POST"
  className="space-y-6"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium">
        Your Name
      </label>
      <Input
        id="name"
        name="name"
        placeholder="John Doe"
        required
        className="bg-white/50 border-purple-light/20 focus:border-purple"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium">
        Your Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="john@example.com"
        required
        className="bg-white/50 border-purple-light/20 focus:border-purple"
      />
    </div>
  </div>

  <div className="space-y-2">
    <label htmlFor="subject" className="text-sm font-medium">
      Subject
    </label>
    <Input
      id="subject"
      name="subject"
      placeholder="How can I help you?"
      required
      className="bg-white/50 border-purple-light/20 focus:border-purple"
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium">
      Message
    </label>
    <Textarea
      id="message"
      name="message"
      placeholder="Your message here..."
      required
      rows={5}
      className="bg-white/50 border-purple-light/20 focus:border-purple resize-none"
    />
  </div>

  <Button
    type="submit"
    className="w-full rounded-full"
  >
    Send Message
  </Button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
