"use client";
import { useState } from "react";

export default function FAQPage() {
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({});

  const toggleFAQ = (questionKey: string) => {
    setActiveItems((prev: Record<string, boolean>) => ({
      ...prev,
      [questionKey]: !prev[questionKey],
    }));
  };

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is the DSA Parental Digital Survival Kit?",
          answer:
            "The DSA Parental Digital Survival Kit is a comprehensive resource designed to help parents navigate the digital world with their children. It includes guides, tools, and expert advice to ensure safe and responsible digital citizenship.",
        },
        {
          question: "How can I get started with the toolkit?",
          answer:
            "Getting started is easy! Simply visit our Toolkit page and download the resources that best suit your needs. We recommend starting with the Digital Safety Assessment to evaluate your current practices.",
        },
        {
          question: "Is the toolkit suitable for all age groups?",
          answer:
            "Yes, our toolkit is designed to be adaptable for children of all ages. We provide age-specific guidelines and resources to help you address digital safety concerns appropriate for your child's developmental stage.",
        },
      ],
    },
    {
      title: "Digital Safety",
      questions: [
        {
          question: "How can I protect my child from online predators?",
          answer:
            "We provide comprehensive guides on setting up parental controls, monitoring online activity, and having open conversations about online safety. Our toolkit includes specific tools and checklists to help you implement these safety measures.",
        },
        {
          question: "What should I do if my child experiences cyberbullying?",
          answer:
            "Our toolkit includes a detailed guide on recognizing and addressing cyberbullying. We provide step-by-step instructions for documenting incidents, reporting to relevant platforms, and supporting your child through the experience.",
        },
        {
          question: "How can I manage my child's screen time effectively?",
          answer:
            "We offer practical tools and strategies for setting healthy screen time limits. This includes creating a family digital agreement, using parental control apps, and establishing tech-free zones and times.",
        },
      ],
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "How do I set up parental controls on different devices?",
          answer:
            "Our toolkit includes detailed guides for setting up parental controls on various devices and platforms, including iOS, Android, Windows, and popular social media platforms.",
        },
        {
          question: "What if I need help with the toolkit?",
          answer:
            "We offer comprehensive support through our help center, email support, and community forums. Our team of experts is available to assist you with any questions or concerns.",
        },
        {
          question: "Are the tools and resources regularly updated?",
          answer:
            "Yes, we regularly update our resources to reflect the latest digital safety concerns and technological developments. Subscribers receive notifications about new content and updates.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-md mx-auto px-6 relative z-10">
        {/* 3D Card Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
          {/* 3D Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-5xl font-bold text-text mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Need Help?
          </h1>

          <p className="text-text/70 mb-10 text-lg leading-relaxed">
            Contact our expert support team for personalized assistance
          </p>

          {/* 3D Button */}
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-primary/20"
          >
            Contact Support
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/30 rounded-full blur-sm animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
