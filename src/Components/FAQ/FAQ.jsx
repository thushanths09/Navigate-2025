import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the benefits of participating in Navigate 2025 for students who have completed A/Ls?",
      answer: (
        <ul>
          <li>Opportunity to explore international volunteering experiences before starting higher education</li>
          <li>Access to unique cultural exchange experiences</li>
          <li>Chance to develop cross-cultural communication skills</li>
          <li>Opportunity to contribute to UN Sustainable Development Goals</li>
          <li>Potential to enhance your CV with globally recognized certificates from AIESEC</li>
          <li>Building an international network early in your career journey</li>
          <li>Gaining practical experience through meaningful volunteer work abroad</li>
        </ul>
      ),
    },
    {
      question: "Who can attend Navigate 2025?",
      answer: "The event is primarily designed for students who have just completed their G.C.E. (A/L) examinations and are interested in exploring international opportunities before their next academic journey.",
    },
    {
      question: "What happens at Navigate 2025?",
      answer: (
        <ul>
          <li>Information about global volunteering opportunities</li>
          <li>Cultural exchange experiences with international participants</li>
          <li>Opportunities to learn about different cultures</li>
          <li>Guidance on how to participate in international volunteer projects</li>
        </ul>
      ),
    },
    {
      question: "What is special about the Global Village at Navigate 2025?",
      answer: (
        <ul>
          <li>Participants can interact directly with youth from various countries</li>
          <li>Experience different cultures firsthand</li>
          <li>Enjoy various cultural delicacies and performances</li>
          <li>Engage in fun games and activities throughout the event day</li>
          <li>Create everlasting memories through cross-cultural interactions</li>
          <li>Broaden their global perspective through meaningful exchange</li>
        </ul>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`faq-answer ${openIndex === index ? "show" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
