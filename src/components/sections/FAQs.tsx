"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isActive,
  onClick,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }

    if (questionRef.current && isActive) {
      gsap.fromTo(
        questionRef.current,
        { color: "#1f2937" }, // gray-800
        {
          color: "#a855f7",
          duration: 0.3,
          ease: "power2.out",
        }
      );
    } else if (questionRef.current) {
      gsap.to(questionRef.current, {
        color: "#1f2937", // gray-800
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isActive]);

  return (
    <div
      className={`border-b border-gray-300 py-6 transition-all ${
        isActive
          ? "bg-gradient-to-r from-transparent to-purple-100 rounded-md"
          : ""
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer p-2"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
      >
        <h3
          ref={questionRef}
          className="text-xl md:text-2xl font-medium transition-colors duration-300 text-gray-900"
        >
          {question}
        </h3>
        <span className="text-purple-500 transition-transform duration-300 p-1 rounded-full bg-purple-100">
          {isActive ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </span>
      </div>
      {/* ✅ Removed opacity-0 so content always shows when expanded */}
      <div ref={contentRef} className="overflow-hidden h-0">
        <p className="pt-4 text-gray-700 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      question: "How does AI Advisory's recommendation system work?",
      answer:
        "Our AI Advisory system uses advanced machine learning algorithms to analyze your business data, industry trends, and market conditions. It then generates personalized recommendations based on this analysis, helping you make data-driven decisions that align with your business goals.",
    },
    {
      question: "Can I integrate AI Advisory with my existing business tools?",
      answer:
        "Yes! AI Advisory is designed with seamless integration in mind. We support connections with popular CRM systems, analytics platforms, accounting software, and many other business tools through our API. Our team can help you set up custom integrations for your specific tech stack.",
    },
    {
      question: "How secure is my business data with AI Advisory?",
      answer:
        "Security is our top priority. We employ enterprise-grade encryption for all data, both in transit and at rest. Our platform follows SOC 2 compliance standards and GDPR regulations. We maintain strict access controls and regular security audits to ensure your sensitive business information remains protected.",
    },
    {
      question: "Do I need technical expertise to use AI Advisory?",
      answer:
        "No technical expertise is required! We've designed AI Advisory with user-friendliness in mind. The platform features an intuitive interface that guides you through each step. For more advanced customizations, our support team is always available to assist you.",
    },
    {
      question: "What kind of support is available for AI Advisory users?",
      answer:
        "We provide comprehensive support including 24/7 live chat assistance, detailed documentation, video tutorials, and webinars. Enterprise clients also receive dedicated account managers and personalized onboarding sessions to ensure maximum value from our platform.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (containerRef.current) {
      const animation = gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          paused: true,
        }
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => animation.play(),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              Everything you need to know about AI Advisory and how it can
              transform your business decision-making
            </p>
          </div>

          <div ref={containerRef}>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                onClick={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
