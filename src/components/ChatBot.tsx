import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Kamalakar's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple NLP responses - in a real implementation, this would connect to an AI API
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
      return "Kamalakar is skilled in Python, C++, Java, SQL, Django, Streamlit, Generative AI, LangChain, FAISS, AWS, and ServiceNow. He's also certified in ServiceNow (CSA, CAD) and AWS Cloud Practitioner.";
    }
    
    if (message.includes("project") || message.includes("work") || message.includes("build")) {
      return "Kamalakar has built several impressive projects including an AI Code Review Assistant, an AI app for visually impaired users, and a Pizza Sales Data Dashboard. All projects showcase his expertise in AI/ML and data analysis.";
    }
    
    if (message.includes("experience") || message.includes("internship") || message.includes("job")) {
      return "Kamalakar completed dual internships at Innomatics Research Labs as a Data Science & GenAI Intern, where he built AI-powered applications and worked with real-world datasets using agile methodologies.";
    }
    
    if (message.includes("education") || message.includes("degree") || message.includes("study")) {
      return "Kamalakar is pursuing B.Tech in Computer Science and Data Science at Aditya Institute of Technology and Management (2022-2026) with a CGPA of 7.4.";
    }
    
    if (message.includes("certification") || message.includes("certificate")) {
      return "Kamalakar has 6+ certifications including ServiceNow CAD & CSA, Generative AI with LLMs (Coursera), Python Essentials (Cisco), AWS Cloud Practitioner, and Hyperledger Blockchain Developer.";
    }
    
    if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach")) {
      return "You can reach Kamalakar at kamalakarmajji5683@gmail.com or +91 6303776828. You can also connect with him on LinkedIn or check out his GitHub projects!";
    }
    
    if (message.includes("ai") || message.includes("artificial intelligence") || message.includes("machine learning")) {
      return "Kamalakar specializes in Generative AI applications, working with LangChain, FAISS, Google GenAI API, and building real-world AI solutions like code review assistants and accessibility apps.";
    }
    
    if (message.includes("servicenow")) {
      return "Kamalakar is ServiceNow certified with both CSA (Certified System Administrator) and CAD (Certified Application Developer) credentials. He has experience in workflow building and custom app development.";
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn more about Kamalakar Majji. Feel free to ask about his skills, projects, experience, or education!";
    }
    
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! Is there anything else you'd like to know about Kamalakar's background or expertise?";
    }
    
    return "I can help you learn about Kamalakar's skills, projects, experience, education, or contact information. What specific area would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are his main skills?",
    "Tell me about his projects",
    "What's his experience?",
    "How can I contact him?"
  ];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full hero-gradient hover-glow transition-smooth shadow-lg z-50"
          size="sm"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-96 glass border-primary/20 shadow-2xl z-50 transition-all duration-300 ${
          isMinimized ? "h-16" : "h-96"
        }`}>
          {/* Header */}
          <CardHeader className="p-4 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-primary/10 rounded-full mr-3">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-sm">AI Assistant</CardTitle>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                    Online
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 p-0"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-80">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="p-1 bg-primary/10 rounded-full">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.sender === "user" && (
                      <div className="p-1 bg-secondary rounded-full">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-primary/10 rounded-full">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg text-sm">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => setInputMessage(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Kamalakar..."
                    className="flex-1 h-8 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="h-8 w-8 p-0 hero-gradient"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default ChatBot;