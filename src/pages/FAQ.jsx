import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const faqs = [
  {
    question: "What is the ATS QR Decal and how does it work?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`
  },
  {
    question: "How do I apply the ATS QR Decal correctly?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`, 
  },
  {
    question: "Where should I place the QR Decal on my vehicle?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`,
  },
  {
    question: "Can I use the ATS app without the QR Decal?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`,
  },
  {
    question: "Is my personal information safe with ATS?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`,
  },
  {
    question: "What should I do if I have trouble installing the decal or using the app?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`,
  },
  {
    question: "Is the ATS app available for both iOS and Android?",
    answer: `
Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing.
Instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal’s backing. Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed. Clean and dry the area on your windscreen before peeling the decal's backing.
Then, press it firmly from the center outward to avoid bubbles. Detailed instructions are provided in the app and support is available if needed.
`,
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mt-10 mx-auto p-6">
      <h2 className="text-4xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center text-gray-900 font-medium focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && faq.answer && (
              <p className="mt-2 text-gray-700 whitespace-pre-line">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
