import React, { useState, useRef } from "react";

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mt-4 border-t border-gray-200 pt-4">
      {/* Header with Title and "+" Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {!isOpen && (
          <button
            className="text-blue-500 text-xl leading-none focus:outline-none"
            onClick={toggleSection}
          >
            +
          </button>
        )}
      </div>

      {/* Collapsible content wrapper */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        {/* Inner content, including "x" button */}
        <div className="relative pt-2">
          {/* Close (x) button in top-right corner */}
          <button
            className="absolute top-0 right-0 text-red-500 text-xl leading-none focus:outline-none"
            onClick={toggleSection}
          >
            x
          </button>
          {/* Actual content below the close button */}
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md font-sans">
      <h1 className="text-2xl font-bold mb-2">Jay Park</h1>
      <p className="text-sm text-gray-600">
        UC Berkeley alum with a B.A. in Cognitive Science and HCI.
        I'm passionate about crafting seamless, joyful experiences.
        Currently at Ruli, reimagining legal workflow with AI.
      </p>

      <ExpandableSection title="Background">
        Ever since I can remember, I've always been curious and intrigued
        about how people see and interact with the world around them.
        This curiosity led me to study psychology and cognitive science,
        exploring the intricacies of human perception, cognition, and ultimately,
        <strong> human-computer interaction</strong>.
      </ExpandableSection>

      <ExpandableSection title="Design Philosophy">
        My design philosophy revolves around empathy, simplicity, and
        user-centered principles. I believe great products emerge when
        we deeply understand human needs and design solutions that are
        both functional and delightful.
      </ExpandableSection>

      <ExpandableSection title="Things I Love">
        I love traveling, coffee, music, and exploring new technologies.
        I'm also a huge fan of collaborative brainstorming sessions and
        believe that the best ideas come from diverse perspectives.
      </ExpandableSection>
    </div>
  );
}
