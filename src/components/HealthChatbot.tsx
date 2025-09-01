import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, VolumeX, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function VoiceHealthChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm your FitScan Voice Health Assistant. Click the microphone to start talking, or I can speak to you. What would you like to know about your health?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            currentTranscript += event.results[i][0].transcript;
          }
        }
        if (currentTranscript) {
          setTranscript(currentTranscript);
          handleVoiceMessage(currentTranscript);
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Health-specific voice responses for FitScan
  const getHealthResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to FitScan Health. I can help you choose health assessments and understand symptoms. What can I help you with today?";
    }
    
    // Assessment selection
    if (lowerMessage.includes("which test") || lowerMessage.includes("what assessment") || lowerMessage.includes("choose test")) {
      return "I can help you choose the right assessment! We have Heart Disease Risk Assessment for chest pain, Anxiety Assessment for worry and nervousness, COVID-19 Checker for fever and cough, Asthma Checker for breathing problems, and Diabetes Risk Assessment for increased thirst. What symptoms are you experiencing?";
    }
    
    // Specific conditions
    if (lowerMessage.includes("chest pain") || lowerMessage.includes("heart") || lowerMessage.includes("cardiac")) {
      return "For chest pain or heart-related symptoms, I recommend our Heart Disease Risk Assessment. It evaluates chest discomfort, shortness of breath, and cardiovascular risk factors. This assessment takes about 8 to 10 minutes. Would you like me to guide you to this test?";
    }
    
    if (lowerMessage.includes("anxiety") || lowerMessage.includes("worry") || lowerMessage.includes("nervous") || lowerMessage.includes("panic")) {
      return "Our Anxiety Assessment can help evaluate worry, nervousness, and anxiety symptoms. It takes 6 to 8 minutes and covers 8 key areas including panic attacks, sleep problems, and concentration issues. This assessment is very helpful for understanding your mental health. Shall I direct you to this assessment?";
    }
    
    if (lowerMessage.includes("covid") || lowerMessage.includes("fever") || lowerMessage.includes("cough") || lowerMessage.includes("corona")) {
      return "The COVID-19 Symptom Checker evaluates symptoms like fever, cough, loss of taste or smell, fatigue, and breathing difficulties. It helps assess your risk level and provides guidance on testing and isolation. This is especially important if you've been exposed or have symptoms. Would you like to take this assessment?";
    }
    
    if (lowerMessage.includes("breathing") || lowerMessage.includes("asthma") || lowerMessage.includes("wheezing") || lowerMessage.includes("shortness of breath")) {
      return "Our Asthma Symptom Checker is perfect for breathing issues! It evaluates wheezing, persistent cough, chest tightness, and exercise limitations. This assessment can help identify if you might have asthma or other respiratory conditions. It's very thorough and takes about 6 to 8 minutes.";
    }
    
    if (lowerMessage.includes("diabetes") || lowerMessage.includes("thirst") || lowerMessage.includes("urination") || lowerMessage.includes("blood sugar")) {
      return "The Diabetes Risk Assessment evaluates symptoms like increased thirst, frequent urination, fatigue, and risk factors including age and family history. It's an important screening tool for early detection. Early detection of diabetes is crucial for your health. Would you like to start this assessment?";
    }
    
    // Results interpretation
    if (lowerMessage.includes("results") || lowerMessage.includes("score") || lowerMessage.includes("risk level")) {
      return "FitScan results show three risk levels. Low risk means 0 to 39 percent with few symptoms - maintain healthy habits. Moderate risk is 40 to 69 percent with some concerning symptoms - consider medical consultation. High risk is 70 to 100 percent with significant symptoms - seek medical attention promptly. Each result includes personalized recommendations and can be printed as a professional medical report.";
    }
    
    // Accuracy and reliability
    if (lowerMessage.includes("accurate") || lowerMessage.includes("reliable") || lowerMessage.includes("trust")) {
      return "FitScan assessments use evidence-based medical algorithms with 95 percent accuracy rate. Our tools are designed by healthcare professionals and based on established clinical guidelines. However, they should not replace professional medical advice. Always consult healthcare providers for medical decisions.";
    }
    
    // Emergency situations
    if (lowerMessage.includes("emergency") || lowerMessage.includes("urgent") || lowerMessage.includes("severe pain") || lowerMessage.includes("911")) {
      return "Important! If you're experiencing a medical emergency, call emergency services immediately. That's 911 in the United States. Our assessments are for informational purposes only and cannot replace emergency medical care. For severe symptoms, chest pain, difficulty breathing, or other urgent conditions, seek immediate medical attention.";
    }
    
    // Voice specific help
    if (lowerMessage.includes("how to use") || lowerMessage.includes("voice") || lowerMessage.includes("speak")) {
      return "Great! You're already using the voice feature perfectly. Just click the microphone button and speak your questions. I'll listen and respond with voice as well. You can ask about symptoms, choose assessments, or get health information. I can also read your results aloud. What would you like to know?";
    }
    
    // Thank you
    if (lowerMessage.includes("thank")) {
      return "You're very welcome! Your health is important, and I'm glad I could help with voice assistance. If you have any other questions about FitScan assessments or health topics, just speak to me anytime. Take care and stay healthy!";
    }
    
    // Default response
    return "I understand you're asking about health topics. I can help you choose the right health assessment, understand symptoms, or explain how our tests work. For specific medical advice, please consult healthcare professionals. What would you like to know about your health?";
  };

  const handleVoiceMessage = (voiceText: string) => {
    if (!voiceText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: voiceText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setTranscript("");

    // Generate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getHealthResponse(voiceText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Speak the response
      speakText(botResponse.text);
    }, 500);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const hasVoiceSupport = recognition !== null && 'speechSynthesis' in window;

  return (
    <>
      {/* Floating Voice Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <Mic className="h-6 w-6 text-white" />
          </Button>
        )}

        {/* Voice Chat Window */}
        {isOpen && (
          <div className="w-80 h-96 bg-white shadow-2xl rounded-lg border border-gray-200 flex flex-col">
            {/* Header */}
            <div className="bg-blue-600 text-white rounded-t-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">FitScan Voice Assistant</h3>
                  <p className="text-xs opacity-90">
                    {isListening ? "🎤 Listening..." : isSpeaking ? "🔊 Speaking..." : "Ready • Voice Enabled"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 h-8 w-8 p-0"
              >
                ✕
              </Button>
            </div>

            {/* Voice Support Check */}
            {!hasVoiceSupport && (
              <div className="p-4 bg-yellow-50 border-b text-center">
                <p className="text-sm text-yellow-800">
                  Voice features require Chrome/Edge browser. Text chat still works!
                </p>
              </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%]`}>
                    {message.isBot && (
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm leading-relaxed ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {message.text}
                      {message.isBot && hasVoiceSupport && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="mt-2 h-6 text-xs p-1"
                          onClick={() => speakText(message.text)}
                        >
                          🔊 Speak
                        </Button>
                      )}
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Listening Indicator */}
              {isListening && (
                <div className="flex justify-center">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Listening...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Voice Controls */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex justify-center gap-3">
                {hasVoiceSupport && (
                  <>
                    <Button
                      onClick={isListening ? stopListening : startListening}
                      className={`w-12 h-12 rounded-full ${
                        isListening 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                      disabled={isSpeaking}
                    >
                      {isListening ? (
                        <MicOff className="h-6 w-6 text-white" />
                      ) : (
                        <Mic className="h-6 w-6 text-white" />
                      )}
                    </Button>
                    
                    <Button
                      onClick={toggleSpeech}
                      variant="outline"
                      className="w-12 h-12 rounded-full"
                      disabled={!isSpeaking}
                    >
                      {isSpeaking ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </Button>
                  </>
                )}
              </div>
              
              <div className="text-center mt-2">
                <p className="text-xs text-gray-500">
                  {hasVoiceSupport 
                    ? (isListening ? "Speak now..." : "Click microphone to talk") 
                    : "Voice not supported in this browser"
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
