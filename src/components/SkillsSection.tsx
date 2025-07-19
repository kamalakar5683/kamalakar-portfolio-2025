import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Wrench, Award } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "Java", "SQL"],
      color: "text-primary"
    },
    {
      title: "Web Technologies",
      icon: Database,
      skills: ["HTML", "CSS", "Bootstrap", "Django", "Streamlit"],
      color: "text-accent"
    },
    {
      title: "AI & ML",
      icon: Cpu,
      skills: ["Generative AI", "LangChain", "FAISS"],
      color: "text-tech-purple"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS (Certified)", "Google GenAI API", "Git", "Docker", "Tesseract OCR"],
      color: "text-tech-blue"
    },
    {
      title: "ServiceNow",
      icon: Wrench,
      skills: ["CSA Certified", "CAD Certified", "Workflow Building", "Custom App Development"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and AI solutions
          </p>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift transition-smooth group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <CardHeader className="text-center relative z-10">
                  <div className={`inline-flex p-3 rounded-full bg-secondary/50 mb-4 ${category.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ServiceNow Highlight */}
        <div className="mt-16">
          <Card className="glass p-8 hover-glow transition-smooth max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">ServiceNow Expertise</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Certified System Administrator (CSA)</h4>
                <p className="text-sm text-muted-foreground">Platform administration and configuration</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Certified Application Developer (CAD)</h4>
                <p className="text-sm text-muted-foreground">Custom application development</p>
              </div>
              <div>
                <h4 className="font-semibold text-tech-purple mb-2">Workflow Building</h4>
                <p className="text-sm text-muted-foreground">Business process automation</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;