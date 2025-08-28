import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function HealthChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm your FitScan Health Assistant.\n\nI can help you with:\n• Choosing health assessments\n• Understanding symptoms\n• Explaining test results\n• General health questions\n\nWhat would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Health-specific responses for FitScan
  const getHealthResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to FitScan Health. I'm here to help you with health assessments and medical questions. What can I assist you with today?";
    }
    
    // Assessment selection
    if (lowerMessage.includes("which test") || lowerMessage.includes("what assessment")) {
      return "I can help you choose the right assessment! Here are our popular tests:\n\n🫀 Heart Disease Risk - for chest pain, shortness of breath\n🧠 Anxiety Assessment - for worry, nervousness, panic\n🦠 COVID-19 Checker - for fever, cough, loss of taste/smell\n🫁 Asthma Checker - for wheezing, breathing problems\n💊 Diabetes Risk - for increased thirst, fatigue\n\nWhat symptoms are you experiencing?";
    }
    
    // Specific conditions
    if (lowerMessage.includes("chest pain") || lowerMessage.includes("heart")) {
      return "For chest pain or heart-related symptoms, I recommend our Heart Disease Risk Assessment. It evaluates symptoms like chest discomfort, shortness of breath, and cardiovascular risk factors. Would you like me to guide you to this test?";
    }
    
    if (lowerMessage.includes("anxiety") || lowerMessage.includes("worry") || lowerMessage.includes("nervous")) {
      return "Our Anxiety Assessment can help evaluate worry, nervousness, and anxiety symptoms. It takes 6-8 minutes and covers 8 key areas including panic attacks, sleep problems, and concentration issues. Shall I direct you to this assessment?";
    }
    
    if (lowerMessage.includes("covid") || lowerMessage.includes("fever") || lowerMessage.includes("cough")) {
      return "The COVID-19 Symptom Checker evaluates symptoms like fever, cough, loss of taste/smell, fatigue, and breathing difficulties. It helps assess your risk level and provides guidance on testing and isolation. Would you like to take this assessment?";
    }
    
    if (lowerMessage.includes("breathing") || lowerMessage.includes("asthma") || lowerMessage.includes("wheezing")) {
      return "Our Asthma Symptom Checker is perfect for breathing issues! It evaluates wheezing, persistent cough, chest tightness, and exercise limitations. This assessment can help identify if you might have asthma or other respiratory conditions.";
    }
    
    if (lowerMessage.includes("diabetes") || lowerMessage.includes("thirst") || lowerMessage.includes("urination")) {
      return "The Diabetes Risk Assessment evaluates symptoms like increased thirst, frequent urination, fatigue, and risk factors including age and family history. It's an important screening tool for early detection.";
    }
    
    // Results interpretation
    if (lowerMessage.includes("results") || lowerMessage.includes("score") || lowerMessage.includes("risk level")) {
      return "FitScan results show three risk levels:\n\n🟢 LOW RISK (0-39%) - Few symptoms, maintain healthy habits\n🟡 MODERATE RISK (40-69%) - Some concerning symptoms, consider medical consultation\n🔴 HIGH RISK (70-100%) - Significant symptoms, seek medical attention promptly\n\nEach result includes personalized recommendations and can be printed as a professional medical report.";
    }
    
    // Accuracy and reliability
    if (lowerMessage.includes("accurate") || lowerMessage.includes("reliable") || lowerMessage.includes("trust")) {
      return "FitScan assessments use evidence-based medical algorithms with 95% accuracy rate. Our tools are designed by healthcare professionals and based on established clinical guidelines. However, they should not replace professional medical advice - always consult healthcare providers for medical decisions.";
    }
    
    // Printing and reports
    if (lowerMessage.includes("print") || lowerMessage.includes("report") || lowerMessage.includes("pdf")) {
      return "Yes! You can print your results as a professional medical report. When you click 'Print Results', we'll ask for patient details (name, age, sex) and generate a comprehensive report including:\n• Patient information\n• Assessment responses\n• Risk analysis\n• Clinical recommendations\n• Medical disclaimers\n\nPerfect for sharing with healthcare providers!";
    }
    
    // Emergency situations
    if (lowerMessage.includes("emergency") || lowerMessage.includes("urgent") || lowerMessage.includes("severe pain")) {
      return "🚨 IMPORTANT: If you're experiencing a medical emergency, call emergency services immediately (911 in the US).\n\nOur assessments are for informational purposes only and cannot replace emergency medical care. For severe symptoms, chest pain, difficulty breathing, or other urgent conditions, seek immediate medical attention.";
    }
    
    // General help
    if (lowerMessage.includes("help") || lowerMessage.includes("how to") || lowerMessage.includes("guide")) {
      return "I can help you with:\n\n📋 Choosing the right health assessment\n🔍 Understanding symptoms and conditions\n📊 Interpreting your results\n🖨️ Printing professional reports\n❓ General health questions\n🏥 Finding appropriate medical care\n\nJust ask me anything about health assessments or FitScan features!";
    }
    
    // Thank you
    if (lowerMessage.includes("thank")) {
      return "You're very welcome! Your health is important, and I'm glad I could help. If you have any other questions about FitScan assessments or health topics, feel free to ask anytime. Take care! 😊";
    }
    
    // Default response
    return "I understand you're asking about health topics. While I can help with FitScan assessments and general health information, for specific medical advice, please consult healthcare professionals.\n\nI can help you:\n• Choose the right health assessment\n• Understand symptoms\n• Explain how our tests work\n• Guide you through the platform\n\nWhat specific question do you have?";
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getHealthResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="w-80 h-96 bg-white shadow-2xl rounded-lg border border-gray-200 flex flex-col">
            {/* Header */}
            <div className="bg-blue-600 text-white rounded-t-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">FitScan Health Assistant</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%]`}>
                    {message.isBot && (
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm leading-relaxed whitespace-pre-line ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-blue-600" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about health assessments..."
                  onKeyPress={handleKeyPress}
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button 
                  onClick={sendMessage} 
                  size="sm"
                  disabled={!inputText.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
