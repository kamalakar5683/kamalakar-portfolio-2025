import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Create FormData object with field names matching Google Sheet
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('replyto', formData.email); // Using 'replyto' as per your old form
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://script.google.com/macros/s/AKfycbzsPbEEy53650nDYmhs4_rFGg_R9IgErcS3VQ_cSPPj36rn01kMoXoub3mo7LCcJHnO/exec', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                
                <Card className="glass p-6 hover-glow transition-smooth group">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a 
                        href="mailto:kamalakarmajji5683@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        kamalakarmajji5683@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6 hover-glow transition-smooth group">
                  <div className="flex items-center">
                    <div className="p-3 bg-accent/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a 
                        href="tel:+916303776828"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 6303776828
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6 hover-glow transition-smooth group">
                  <div className="flex items-center">
                    <div className="p-3 bg-tech-purple/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <Card className="glass p-6 text-center">
              <h4 className="text-lg font-semibold mb-3">Ready to work together?</h4>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <Button 
                className="hero-gradient hover-glow transition-smooth"
                onClick={() => window.open('mailto:kamalakarmajiwork@gmail.com?subject=Project Inquiry&body=Hello Kamalakar,%0D%0A%0D%0AI would like to discuss a project opportunity with you.%0D%0A%0D%0ABest regards', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8 hover-glow transition-smooth">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hero-gradient hover-glow transition-smooth"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;