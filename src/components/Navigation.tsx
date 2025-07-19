import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo - More compact on mobile */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span className="hidden sm:inline">KM</span>
              <span className="sm:hidden">KM</span>
            </h1>
          </div>

          {/* Desktop Navigation - Better spacing */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground/80 hover:text-primary transition-colors relative group font-medium text-sm xl:text-base">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>)}
            </div>
          </div>

          {/* Mobile menu button - Better positioning */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="glass p-2 h-9 w-9" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Improved layout */}
        {isOpen && <div className="lg:hidden absolute left-4 right-4 top-full mt-2">
            <div className="glass rounded-lg p-3 space-y-1 shadow-lg border border-border/50">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-3 rounded-md text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors font-medium">
                  {item.name}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;