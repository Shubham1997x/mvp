"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "How can you build a prototype in just 48 hours?",
    answer:
      "We use AI-powered development tools combined with 7 years of expertise and proven frameworks. Plus, we focus on core functionality that demonstrates your concept, not every possible feature. Our streamlined process and experienced team allow us to deliver working prototypes faster than traditional agencies.",
    category: "General",
  },
  {
    question: "What if I don't like the prototype?",
    answer:
      "We include one revision round, and if you're still not satisfied, we offer a full refund. In 7 years, we've had a 94% satisfaction rate. Your satisfaction is our priority, and we work closely with you to ensure the prototype meets your expectations.",
    category: "General",
  },
  {
    question: "Can you handle complex technical requirements?",
    answer:
      "Absolutely. We've built everything from simple apps to complex enterprise systems. Our team has experience with AI, blockchain, IoT, and more. We can handle any technical complexity and will discuss your requirements during the discovery call.",
    category: "Technical",
  },
  {
    question: "What happens after the prototype?",
    answer:
      "Many clients upgrade to our full MVP development. We provide a clear roadmap showing exactly how to turn your prototype into a market-ready product. You can also choose our Growth Partnership for ongoing development and support.",
    category: "General",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, you own everything we create for you, including all code, designs, and documentation. We believe you should have full ownership of your product.",
    category: "General",
  },
  {
    question: "What's included in the $150 prototype package?",
    answer:
      "The package includes a 30-minute discovery call, AI-powered requirements analysis, a working interactive prototype, custom subdomain hosting, future roadmap presentation, and 1 round of revisions. All delivered within 48 hours.",
    category: "Pricing",
  },
];

const categories = ["All", "General", "Technical", "Pricing", "Support"];

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpandAll = () => {
    if (expandedItems.length === filteredFaqs.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(filteredFaqs.map((_, index) => `item-${index}`));
    }
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            FAQs
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our 48-hour prototype service
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border-gray-200 focus:border-primary-cta focus:ring-primary-cta"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${selectedCategory === category
                    ? "bg-primary-cta text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredFaqs.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={toggleExpandAll}
                className="text-sm text-primary-cta hover:text-primary-cta-hover font-medium transition-colors cursor-pointer"
              >
                {expandedItems.length === filteredFaqs.length
                  ? "Collapse All"
                  : "Expand All"}
              </button>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-600">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              <Accordion
                type="multiple"
                value={expandedItems}
                onValueChange={setExpandedItems}
                className="w-full"
              >
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left [&>svg]:hidden [&[data-state=open]_.faq-arrow]:rotate-135">
                      <div className="flex items-center gap-3 w-full">
                        <ArrowUpRight className="faq-arrow w-4 h-4 text-primary-cta shrink-0 transition-transform duration-300" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base flex-1 text-left">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 font-normal leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

