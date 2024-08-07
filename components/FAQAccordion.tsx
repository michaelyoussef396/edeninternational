"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('faqAccordion');

  const items = [
    {
      title: t('howDoIFindOutIfIAmEligibleToApply.title'),
      content: t('howDoIFindOutIfIAmEligibleToApply.content'),
    },
    {
      title: t('howLongDoesItTakeToGetAPermanentResidenceVisa.title'),
      content: t('howLongDoesItTakeToGetAPermanentResidenceVisa.content'),
    },
    {
      title: t('canTheImmigrationAuthoritiesRefuseMyApplication.title'),
      content: t('canTheImmigrationAuthoritiesRefuseMyApplication.content'),
    },
    {
      title: t('willTheImmigrationAuthoritiesOrEmbassyHelpMeToPrepareMyApplication.title'),
      content: t('willTheImmigrationAuthoritiesOrEmbassyHelpMeToPrepareMyApplication.content'),
    },
    {
      title: t('myMigrationAgentHasAssessedMeAsBeingEligibleForResidence.title'),
      content: t('myMigrationAgentHasAssessedMeAsBeingEligibleForResidence.content'),
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          {t('title')} <span className="text-red-500">{t('highlightText')}</span>
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
          <a href="/contact-us">
            <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 font-bold">
              {t('cta')}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
