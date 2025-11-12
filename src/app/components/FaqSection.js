"use client";
import { useEffect } from "react";
import initAccordion from "../../js/accordian";
import Headingblock from "./Headingblock";


export default function FAQSection({ title, subtitle, items = [] }) {
  useEffect(() => {
    initAccordion();
  }, []);

  return (
    <section className="faq-sec">
      <div className="faq-container container">
        {/* Heading */}
           <Headingblock
                items={[
                    {
                    heading: "Frequently Asked Questions",
                    subHead : "Quick answers to common questions about our services"
                    },
                ]}
                align="center"
                whiteText={true}
            />

        {/* Accordion */}
        <div className="faq-area">
          <div className="accordion scroll-animate animate__animated">
            {items.map((item, i) => (
              <div className="accordion-item" key={i}>
                <div className="accordion-header">
                  <span className="accordion-title">{item.question}</span>
                  <span className="icon" aria-hidden="true"></span>
                </div>
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
