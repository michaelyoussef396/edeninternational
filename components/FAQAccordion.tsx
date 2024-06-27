"use client"
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left text-xl font-medium text-gray-900 bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        <span className="flex items-center">
          {isOpen ? (
            <span className="mr-2">-</span>
          ) : (
            <span className="mr-2">+</span>
          )}
          {title}
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && <div className="p-4 bg-white text-gray-900">{content}</div>}
      </motion.div>
    </div>
  );
};

const FAQAccordion: FC = () => {
  const items = [
    {
      title: "HOW DO I FIND OUT IF I AM ELIGIBLE TO APPLY?",
      content:
        "Please click here for a summary of the current Australian immigration regulations. Then take a FREE initial check of your eligibility to be referred to a MARA Registered Migration Agent.",
    },
    {
      title: "HOW LONG DOES IT TAKE TO GET A PERMANENT RESIDENCE VISA TO IMMIGRATE TO AUSTRALIA?",
      content: "Information about the duration for permanent residence visa...",
    },
    {
      title: "CAN THE IMMIGRATION AUTHORITIES REFUSE MY APPLICATION?",
      content: "Information about the possibilities of application refusal...",
    },
    {
      title: "WILL THE IMMIGRATION AUTHORITIES OR EMBASSY HELP ME TO PREPARE MY APPLICATION AND MAKE SURE THAT EVERYTHING IS CORRECT BEFORE APPLYING?",
      content: "Information about help from immigration authorities or embassy...",
    },
    {
      title: "MY MIGRATION AGENT HAS ASSESSED ME AS BEING ELIGIBLE FOR RESIDENCE IN AUSTRALIA. IF I APPLY WITHOUT HIS OR HER HELP, CAN I BE CERTAIN OF SUCCESS?",
      content: "Information about the certainty of success without a migration agent...",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 font-bold">
            GET A FREE INITIAL ASSESSMENT OF YOUR ELIGIBILITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
