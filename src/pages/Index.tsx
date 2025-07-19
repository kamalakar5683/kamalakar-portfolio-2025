import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* AI Chatbot */}
      <ChatBot />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2025 Kamalakar Majji.
        </p>
        </div>
      </footer>
    </div>;
};
export default Index;