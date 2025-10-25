"use client";
import React, { useState } from "react";

const ValuesSection = () => {
  const [activeValue, setActiveValue] = useState("TRUST");

  const renderItems = [
    {
      id: "TRUST",
      title: "TRUST",
      description:
        "Trustworthiness is one of our most prized values. Ensuring a culture that naturalizes the sense of reliability among the people involved enhances productivity, respect and helps strengthen the bond between the clients and us.",
    },
    {
      id: "CLOSENESS",
      title: "CLOSENESS",
      description:
        "Maintaining long-term, rewarding relationships with our clients is one of the principal things we transgress. Their happiness is our advancement towards success, and we make it happen by paying attention to the tiniest details.",
    },
    {
      id: "UNIQUENESS",
      title: "UNIQUENESS",
      description:
        "Here at JCX, we do things differently. All of our building projects portray uniqueness in their own accord. With the touch of modern architectural concepts used in the structures, state-of-the-art technology, and finally with large amounts of sustainability, all infuse together and produce results that mesmerize.",
    },
    {
      id: "INTEGRITY",
      title: "INTEGRITY",
      description:
        "Integrity is a fundamental value that characterizes us. We demonstrate integrity in our work and garner trust from our clients by accumulating accomplishments and success over the new course of our journey.",
    },
  ];

  const activeItem = renderItems.find((item) => item.id === activeValue);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Values Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {renderItems.map((value) => (
            <button
              key={value.id}
              onClick={() => setActiveValue(value.id)}
              className={`relative px-6 py-3 text-lg font-montserrat font-semibold uppercase transition-all duration-300 ${
                activeValue === value.id
                  ? "text-primary"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {value.title}

              {/* Active Border Bottom */}
              <div className="w-full h-[1px] bg-white/60 absolute bottom-0 left-0"></div>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  activeValue === value.id ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="text-secondary text-lg font-montserrat leading-8 transition-all duration-500"
            data-aos="fade-up"
          >
            {activeItem?.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
