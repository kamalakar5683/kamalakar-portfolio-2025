import { Card } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="glass p-8 lg:p-12 hover-glow transition-smooth">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Kamalakar is a <span className="text-primary font-semibold">tech-savvy Computer Science undergraduate</span>, 
                passionate about building scalable applications using <span className="text-accent font-semibold">Generative AI</span>, 
                modern web frameworks, and cloud technologies.
              </p>
              
              <p className="text-foreground/90">
                With hands-on internship experience at <span className="text-primary font-semibold">Innomatics Research Labs</span>, 
                he's developed real-world tools like AI code reviewers, accessibility apps, and more. 
              </p>
              
              <p className="text-foreground/90">
                He's also a <span className="text-accent font-semibold">certified ServiceNow Developer (CSA, CAD)</span> and 
                enjoys teaching, collaborating, and building products with impact.
              </p>

              {/* Highlight Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Learning</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;