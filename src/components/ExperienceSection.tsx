import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Lightbulb } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Built an AI Code Review Assistant using Google Generative AI, Streamlit, and LangChain for real-time bug detection with multi-language support.",
    "Integrated FAISS for vector-based semantic search, improving system accuracy and scalability.",
    "Developed a user-friendly UI with Streamlit and implemented strong error handling.",
    "Designed an AI-powered accessibility app for the visually impaired using image captioning + TTS.",
    "Worked in agile sprints, contributing to real-world product development life cycles.",
    "Performed exploratory data analysis (EDA) on datasets (e.g., pizza store, AMCAT, vehicles) to generate actionable business insights."
  ];

  const techStack = [
    "Google Generative AI",
    "LangChain", 
    "FAISS",
    "Streamlit",
    "Python",
    "Data Analysis",
    "EDA",
    "Agile Development"
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience building AI-powered applications and data-driven solutions
          </p>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass hover-glow transition-smooth group relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      Data Science & GenAI Intern
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-accent mb-2">
                      Innomatics Research Labs
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Hyderabad, India
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        September 2024 – December 2024
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  2 Internships
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-accent" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors group/achievement"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover/achievement:scale-125 transition-transform"></div>
                      <span className="text-sm leading-relaxed group-hover/achievement:text-primary transition-colors">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Summary */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary mb-2">Impact & Learning</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gained hands-on experience in AI/ML product development, from conceptualization to deployment. 
                  Contributed to real-world solutions addressing accessibility challenges and code quality improvement. 
                  Strengthened skills in agile development practices and collaborative software engineering.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;