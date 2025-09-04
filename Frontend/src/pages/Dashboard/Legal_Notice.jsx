import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const LegalNotice = () => {
  const sections = [
    {
      title: "Rechtliche Hinweise",
      items: [
        "Österreichisches Bürgerliches Gesetzbuch",
        "Österreichisches Strafgesetzbuch",
        "Unternehmensgesetzbuch",
        "Datenschutz-Grundverordnung",
      ],
    },
    {
      title: "Quellen",
      items: ["OGH-Entscheidungen", "E-Mail-Versand Verordnung"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen flex flex-col p-4 sm:p-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Rechtliche Hinweise
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow text-sm sm:text-base">
          Vertrag hochladen
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full mb-4">
        <input
          type="text"
          placeholder="Suchen"
          className="pl-10 pr-4 w-full py-2 border bg-[var(--bg-color)] border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-sm sm:text-base"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Accordions */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden">
  {sections.map((section, sectionIdx) => (
    <div key={sectionIdx} className="mb-6">
      {/* Section Title */}
      <h2 className="py-3 text-[var(--black-color)] font-[500] border-gray-200">
        {section.title}
      </h2>

      {/* Section Accordions */}
      <div className="bg-[var(--bg-color)] rounded-lg w-full shadow border border-gray-300">
        {section.items.map((item, idx) => {
          const index = `${sectionIdx}-${idx}`;
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-gray-300">
              {/* Accordion Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center px-4 py-5 text-left"
              >
                {/* Left Arrow */}
                <span className="flex-shrink-0 w-6 flex justify-center">
                  {isOpen ? (
                    <FiChevronDown className="text-gray-600 text-xl" />
                  ) : (
                    <FiChevronRight className="text-gray-600 text-xl" />
                  )}
                </span>

                {/* Item Text */}
                <span className="ml-2 text-[var(--black-color)] text-sm sm:text-base">
                  {item}
                </span>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <div
                    className="px-10 pb-4 text-sm text-gray-600 overflow-hidden"
                  >
                    <p>
                      {item} – weitere rechtliche Informationen, die hier
                      dargestellt werden können.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default LegalNotice;
