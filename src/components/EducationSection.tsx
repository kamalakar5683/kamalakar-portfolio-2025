import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const certifications = [
    "ServiceNow Certified Application Developer",
    "ServiceNow Certified System Administrator", 
    "Generative AI with LLMs (Coursera)",
    "Python Essentials (Cisco)",
    "AWS Cloud Practitioner Essentials (edX)",
    "Hyperledger Besu Blockchain Developer (edX)"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey in computer science and emerging technologies
          </p>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Education Card */}
          <Card className="glass hover-glow transition-smooth group relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    Education
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    2022 - 2026
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">
                B.Tech in Computer Science and Data Science
              </h3>
              <p className="text-muted-foreground mb-4">
                Aditya Institute of Technology and Management
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  CGPA: 7.4
                </Badge>
                <Badge variant="outline">
                  In Progress
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="glass hover-glow transition-smooth group relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                  Professional Certifications
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group/cert"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/cert:scale-125 transition-transform"></div>
                    <span className="text-sm font-medium group-hover/cert:text-primary transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center">
          <Card className="glass p-8 hover-glow transition-smooth max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full mr-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Academic Excellence</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing Computer Science with focus on Data Science, maintaining strong academic performance 
              while gaining industry certifications in cloud computing, AI, and enterprise platforms.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;