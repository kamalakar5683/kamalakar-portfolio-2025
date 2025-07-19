import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Download } from "lucide-react";
// Updated to use new hero image

const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 tech-grid"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                Kamalakar Majji
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium px-4 lg:px-0">Frontend Developer | Generative AI | ServiceNow Certified Developer | Data Analyst

            </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                "Building AI-powered solutions for the real world."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 px-4 lg:px-0 justify-center lg:justify-start">
              <Button size="lg" className="hero-gradient hover-glow transition-smooth w-full sm:w-auto" onClick={() => {
              const link = document.createElement('a');
              link.href = '/lovable-uploads/17e9d490-222d-49e9-b6f7-31bf3656430f.png';
              link.download = 'Kamalakar_Majji_Resume.png';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
                <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover-lift transition-smooth w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start px-4 lg:px-0">
              <a href="https://github.com/kamalakar5683" target="_blank" rel="noopener noreferrer" className="p-2 lg:p-3 glass rounded-full hover-glow transition-smooth">
                <Github className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/majji-kamalakar" target="_blank" rel="noopener noreferrer" className="p-2 lg:p-3 glass rounded-full hover-glow transition-smooth">
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://kamalakar5683.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="p-2 lg:p-3 glass rounded-full hover-glow transition-smooth">
                <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>

          {/* Professional Portfolio Image */}
          <div className="relative flex justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative group">
              {/* Elegant border frame */}
              <div className="relative z-10 p-1.5 lg:p-2 bg-gradient-to-br from-primary/30 via-background/50 to-accent/20 rounded-full shadow-2xl">
                <div className="bg-background/90 backdrop-blur-sm rounded-full p-0.5 lg:p-1">
                  <img src="/image-uploads/f47f9c9f-68d8-42b4-90a7-8425ef64b270.png" alt="Kamalakar Majji - Frontend Developer" className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full shadow-xl transition-all duration-700 group-hover:shadow-primary/30 group-hover:scale-[1.03]" />
                </div>
              </div>
              
              {/* Professional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 -z-10"></div>
              
              {/* Subtle base shadow */}
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-primary/10 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation - Hidden on small screens for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-tech-purple rounded-full animate-pulse delay-500"></div>
      </div>
    </section>;
};
export default HeroSection;