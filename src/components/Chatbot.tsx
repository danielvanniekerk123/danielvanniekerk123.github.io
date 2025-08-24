import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes, FaUser } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Clippy, Dan's assistant! It looks like you're viewing a portfolio. Would you like help navigating around or learning more about Dan's work?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSendMessage();
    }
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Navigation help
    if (lowerMessage.includes('navigate') || lowerMessage.includes('menu') || lowerMessage.includes('sections')) {
      return "You can navigate using the menu at the top! There are sections for Home, About Me, Skills, Projects, and Contact. Each section showcases different aspects of Dan's work.";
    }
    
    // About Dan
    if (lowerMessage.includes('about') || lowerMessage.includes('dan') || lowerMessage.includes('daniel')) {
      return "Dan is a full-stack developer studying Informatics at the University of South Africa. He's passionate about technology and builds modern web applications using React, Node.js, Python, and more!";
    }
    
    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Dan has several impressive projects! Check out Quick2MB (file compression), Skoonify (cleaning services website), and his Telegram trading bot. Each project demonstrates different skills and technologies.";
    }
    
    // Skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('technology')) {
      return "Dan's tech stack includes React, TypeScript, Node.js, Python, Tailwind CSS, Firebase, and more. He's experienced in both frontend and backend development!";
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can contact Dan at danielvanniekerk1@icloud.com. He's also on LinkedIn and GitHub. Check out the Contact section for all his social links!";
    }
    
    // CV/Resume
    if (lowerMessage.includes('cv') || lowerMessage.includes('resume') || lowerMessage.includes('download')) {
      return "You can download Dan's CV from the Projects section! Look for the 'Download CV' button near the top of the projects page.";
    }
    
    // GitHub
    if (lowerMessage.includes('github') || lowerMessage.includes('code')) {
      return "Dan's GitHub is github.com/danielvanniekerk123. You can find all his project repositories there, including the source code for this portfolio!";
    }
    
    // Default responses
    const defaultResponses = [
      "That's interesting! Is there anything specific about Dan's work you'd like to know more about?",
      "I'd be happy to help! You can ask me about Dan's projects, skills, or how to contact him.",
      "Great question! Feel free to explore the different sections of the portfolio, or ask me about specific topics.",
      "I'm here to help! You can ask about navigation, projects, skills, or how to get in touch with Dan."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(userMessage.text);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Clippy Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-blue-300"
        aria-label="Toggle Clippy"
        style={{
          boxShadow: '0 4px 12px rgba(0, 120, 212, 0.3)'
        }}
      >
        {isOpen ? (
          <FaTimes size={20} className="text-blue-600" />
        ) : (
          <img 
            src="https://tenor.com/bYes2.gif" 
            alt="Clippy" 
            className="w-8 h-8"
            style={{ imageRendering: 'pixelated' }}
          />
        )}
      </button>

      {/* Clippy Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border-2 border-blue-300 flex flex-col" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
          {/* Clippy Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 100%)' }}>
            <div className="flex items-center gap-3">
              {/* Classic Clippy GIF */}
              <div className="relative">
                <img 
                  src="https://tenor.com/bYes2.gif" 
                  alt="Clippy" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div>
                <span className="font-bold text-lg">Clippy</span>
                <div className="text-xs opacity-80">Dan's Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                  style={{
                    boxShadow: message.isUser ? '0 2px 8px rgba(0, 120, 212, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.isUser ? (
                      <FaUser size={12} className="text-blue-200" />
                    ) : (
                      <img 
                        src="https://tenor.com/bYes2.gif" 
                        alt="Clippy" 
                        className="w-4 h-4 rounded-full"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    )}
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 max-w-xs p-3 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <img 
                      src="https://tenor.com/bYes2.gif" 
                      alt="Clippy" 
                      className="w-4 h-4 rounded-full"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <span className="text-xs opacity-70">Clippy is typing...</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Clippy anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ background: '#f8f9fa' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                style={{ background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 100%)' }}
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
