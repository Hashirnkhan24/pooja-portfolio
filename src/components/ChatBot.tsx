"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

function parseMessageText(text: string) {
  if (!text) return "";
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={index} className="font-bold">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return part;
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi there! 🌸 I'm Pooja's AI assistant. I can answer questions about her HR projects, her experience at Tata Motors, her Forensic Science background, or her dancing! \n\nWhat would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    { label: "Why hire Pooja? 🌟", text: "Why should I hire Pooja?" },
    { label: "Her LXP project 🚗", text: "Tell me about her LXP project at Tata Motors" },
    { label: "Key skills? 🧠", text: "What are her key skills and certifications?" },
    { label: "Education? 🎓", text: "What is her educational background?" },
    { label: "Hobbies? 💃", text: "What does she do for fun?" },
  ];

  // Auto scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      
      const botMsg: Message = {
        sender: "bot",
        text: data.reply,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      // Client-side fallback if server fails
      const fallbackText = getClientFallbackResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: fallbackText,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getClientFallbackResponse = (question: string): string => {
    const q = question.toLowerCase();
    if (q.includes("hire") || q.includes("why")) {
      return "Pooja is analytical (BSc Forensic Science, 9.12 CGPA) and deeply empathetic (MMS-HR). She has proven internship experience at Tata Motors and Shoppers Stop, is certified in Excel/Data Analytics, and brings positive energy to team cultures! 🌸";
    }
    if (q.includes("tata") || q.includes("lxp")) {
      return "At Tata Motors (May–July 2026), Pooja is driving learner engagement and adoption campaigns for their LXP under the mentorship of Scherezade Bahmani. She analyzes metrics and designs customized digital learning pathways! 🚗";
    }
    if (q.includes("skill") || q.includes("cert")) {
      return "Her core skills include recruitment, L&D, and employee engagement. She is certified in MS Excel, Data Analytics, and Digital Marketing, and speaks English, Hindi, and Kutchi! 🧠";
    }
    if (q.includes("edu") || q.includes("study") || q.includes("college")) {
      return "She is pursuing an MMS in HR at Chetana's (due 2027) and graduated with a BSc in Forensic Science from Institute of Forensic Science, Mumbai with a stellar 9.12 CGPA! 🎓";
    }
    if (q.includes("dance") || q.includes("fun") || q.includes("hobby")) {
      return "Pooja's absolute happy place is dancing! She views dance as her creative expression of joy. Click 'Dance Mode' on the site to see it in action! 💃";
    }
    return "Thank you for asking! I'm currently offline, but you can learn all about Pooja's projects and skills on this page, or reach out to her directly at poojabhanushali1401@gmail.com! 📩";
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-accent hover:bg-accent-hover text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center glow-accent"
          aria-label="Toggle Chatbot"
        >
          <MessageSquare size={24} />
          {/* Unread dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-sunny rounded-full border-2 border-accent animate-pulse" />
          {/* Tooltip */}
          <span className="absolute left-16 scale-0 group-hover:scale-100 transition-all duration-300 bg-deep-charcoal text-white text-xs px-3 py-1.5 rounded-xl font-bold whitespace-nowrap shadow-md pointer-events-none">
            {"Ask Pooja's AI! 🤖"}
          </span>
        </button>
      </div>

      {/* Chat window panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.85 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] h-[400px] sm:h-[450px] bg-bg-base border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-40"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-accent to-peach-300 text-white p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide">{"Pooja's AI assistant"}</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-90">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/15 transition-colors cursor-pointer text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Message List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      isBot ? "mr-auto" : "ml-auto flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs shadow-sm ${
                        isBot ? "bg-accent-soft text-accent" : "bg-accent text-white"
                      }`}
                    >
                      {isBot ? <Sparkles size={14} /> : <User size={14} />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line shadow-xs ${
                        isBot
                          ? "bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-text-base rounded-tl-none"
                          : "bg-accent text-white rounded-tr-none"
                      }`}
                    >
                      {parseMessageText(msg.text)}
                    </div>
                  </div>
                );
              })}

              {/* Typing loader */}
              {isLoading && (
                <div className="flex items-start gap-2.5 max-w-[80%] mr-auto">
                  <div className="w-7 h-7 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0 text-xs animate-pulse">
                    <Sparkles size={14} />
                  </div>
                  <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* suggestion chips */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 border-t border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none flex-nowrap">
                  {suggestionChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.text)}
                      className="bg-black/5 dark:bg-white/5 hover:bg-accent-soft hover:text-accent border border-black/5 dark:border-white/5 rounded-full px-3 py-1.5 text-[10px] font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Message Input */}
            <div className="p-3 border-t border-black/5 dark:border-white/5 bg-bg-base flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(input)}
                placeholder="Ask me a question..."
                className="flex-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-accent transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-2xl bg-accent hover:bg-accent-hover text-white transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none shrink-0"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
