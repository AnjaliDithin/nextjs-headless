"use client";

import React from "react";
import "../styles/_banner.scss";
import "../styles/_form.scss";
import "../styles/_about-services-2col.scss";
import "../styles/_services-4col.scss";
import "../styles/_services-why-3col.scss";
import "../styles/_testimonial-3col.scss";
import "../styles/_success-2col.scss";
import "../styles/_faq.scss";
import "../styles/_reachout-2col.scss";
import "../styles/_mouse-follower.scss";
import Headingblock from "./components/Headingblock";
import FAQSection from './components/FaqSection';
import ContactForm from "./components/ContactForm";
import MouseFollowerSection from "./components/MouseFollowerSection";

export default function Home() {
      const faqData = [
    {
      question: "How can outsourcing customer support benefit my business?",
      answer:
        "It reduces costs, improves efficiency, and ensures 24/7 coverage without hiring a large in-house team.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Absolutely. We adapt to your processes, tone of voice, and customer expectations.",
    },
    {
      question: "Can your team handle high volumes of queries?",
      answer:
        "Yes, we scale teams quickly based on your workload and seasonal demand.",
    },
    {
      question: "How fast can you set up a team?",
      answer:
        "In as little as 2–4 weeks depending on the size and complexity of your requirements.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply fill out the form above and our team will connect with you within 24 hours.",
    },
  ];
  return (
    <main>
      {/* Banner Section */}
      <section className="banner-block">
          <div className="banner-content">
              <div className="banner-area container">
                  <div className="banner-text">
                      <h1 className="scroll-animate animate__animated">Call Center & Customer Support Outsourcing That Scales With Your Business</h1>
                      <div className="sub-text">24/7 Inbound &amp; Outbound Voice, Email, Live Chat, and Technical Support – Delivered With Expertise.</div>
                      <div className="counter-block">
                          <div className="counter-item">
                              <div className="counter-blk">
                                  <h3 className="counter-count">24/7</h3>
                              </div>
                              <div className="counter-text">Available</div>
                          </div>
                          <div className="counter-item">
                              <div className="counter-blk">
                                  <h3 className="counter-count animcount">50</h3>
                                  <h3 className="counter-incre">+</h3>
                              </div>
                              <div className="counter-text">Expert Agents</div>
                          </div>
                          <div className="counter-item">
                              <div className="counter-blk">
                                  <h3 className="counter-count animcount">99.9</h3>
                                  <h3 className="counter-incre">%</h3>
                              </div>
                              <div className="counter-text">Uptime</div>
                          </div>
                      </div>
                  </div>
                  <ContactForm
                    theme="dark"
                    title="Reach Out to Learn About Our Cost-Effective Call Center Solutions"showCaptcha={true} 
                    />
              </div>
          </div>
      </section>

       <section className="about-services-2col" id="about">
            <div className="about-services-container container">
                <div className="about-services-area">
                    <div className="left-block">
                        <div className="heading-block left-align scroll-animate animate__animated">
                            <h2>About Our Call Center Services</h2>
                            <div className="min-s-head">At Trupp Global, we help businesses deliver exceptional customer
                                experiences while keeping costs low. Whether it’s inbound support,
                                outbound voice, live chat, email, or technical help desk – our dedicated
                                agents represent your brand with empathy, efficiency, and
                                professionalism.</div>
                        </div>
                        <div className="darken-head">
                            We operate 24/7 and tailor our services to your exact requirements,
                            ensuring every customer feels valued and heard.
                        </div>
                        <div className="about-service-itemwrap">
                            <div className="about-service-item">
                                <div className="icon-blk">
                                    <img src="/assets/icon1.svg" alt="24/7 Operations" title="24/7 Operations" />
                                </div>
                                <div className="content-blk">
                                    <h5>24/7 Operations</h5>
                                    <p>Round-the-clock service across all time zones.</p>
                                </div>
                            </div>
                            <div className="about-service-item">
                                <div className="icon-blk">
                                    <img src="/assets/icon2.svg" alt="Expert Agents" title="Expert Agents" />
                                </div>
                                <div className="content-blk">
                                    <h5>Expert Agents</h5>
                                    <p>Skilled professionals trained to represent your brand.</p>
                                </div>
                            </div>
                            <div className="about-service-item">
                                <div className="icon-blk">
                                    <img src="/assets/icon3.svg" alt="Global Reach" title="Global Reach" />
                                </div>
                                <div className="content-blk">
                                    <h5>Global Reach</h5>
                                    <p>Multilingual support serving customers worldwide.</p>
                                </div>
                            </div>
                            <div className="about-service-item">
                                <div className="icon-blk">
                                    <img src="/assets/icon4.svg" alt="Quality Assured" title="Quality Assured" />
                                </div>
                                <div className="content-blk">
                                    <h5>Quality Assured</h5>
                                    <p>ISO certified with proven track record.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-block">
                        <img src="/assets/about-service.png" alt="About Our Call Center Services" title="About Our Call Center Services" width="407" height="569"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="services-4col" id="services">
            <div className="services-4col-container container">
                    <Headingblock
                        items={[
                            {
                            heading: "Our Services"
                            },
                        ]}
                        align="center"
                        whiteText={true}
                    />

                <div className="services-4col-area col3-gridarea">
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser1.svg" alt="Inbound Voice Support " title="Inbound Voice Support " width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Inbound Voice Support</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>Friendly and professional executives to handle general inquiries, billing queries, order taking, product information, and issue resolution – ensuring no customer feels left behind.</p>
                        </div>
                    </div>
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser2.svg" alt="Outbound Voice Support " title="Outbound Voice Support" width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Outbound Voice Support</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>Boost sales and engagement with targeted telemarketing, surveys, lead generation, collections, and appointment booking – handled with cultural sensitivity and professionalism.</p>
                        </div>
                    </div>
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser3.svg" alt="Email Support " title="Email Support " width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Email Support</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>Cut down response times and deliver timely, accurate answers. From product queries to order fulfillment and troubleshooting – we make sure your customers get fast, reliable support.</p>
                        </div>
                    </div>
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser4.svg" alt="Live Chat Support  " title="Live Chat Support " width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Live Chat Support</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>Real-time chat that solves customer problems instantly while upselling your services. Fully customizable, always available, and designed to increase conversions.</p>
                        </div>
                    </div>
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser5.svg" alt="Technical Support " title="Technical Support " width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Technical Support</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>From Level 1 troubleshooting to complex Level 3 problem resolution, our skilled tech team ensures your customers get the answers they need – via phone, email, or chat.</p>
                        </div>
                    </div>
                    <div className="service-griditem scroll-animate animate__animated">
                        <div className="top-bar">
                            <div className="icon-blk">
                                <img src="/assets/ser8.svg" alt="Customer Care" title="Customer Care" width="30" height="30" />
                            </div>
                            <div className="text-blk">
                                <h4>Customer Care</h4>
                            </div>
                        </div>
                        <div className="btm-bar">
                            <p>Comprehensive customer relationship management ensuring every interaction builds loyalty and satisfaction through personalized, empathetic service delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MouseFollowerSection selector=".services-4col-area" />

          <section className="services-why-3col">
            <div className="services-why-3col-container container">
                      <Headingblock
                        items={[
                            {
                            heading: "Why Choose Trupp Global for Call Center Services?"
                            },
                        ]}
                        align="center"
                        whiteText={false}
                    />
                    
                <div className="services-why-3col-area col3-gridarea ">
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why1.svg" alt="Inbound Voice Support " title="Inbound Voice Support " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>24/7 Customer Support</h6>
                            </div>
                            <p>We operate round the clock, ensuring your customers get assistance whenever they need it – across time zones.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why2.svg" alt="Skilled & Trained Agents " title="Skilled & Trained Agents " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Skilled & Trained Agents</h6>
                            </div>
                            <p>Our professionals are trained in communication, cultural sensitivity, and industry-specific knowledge to represent your brand effectively.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why3.svg" alt="Multi-Channel Expertise " title="Multi-Channel Expertise " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Multi-Channel Expertise</h6>
                            </div>
                            <p>From voice to email, live chat, and technical support – we manage customer interactions seamlessly across all channels.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why4.svg" alt="Scalable Teams " title="Scalable Teams " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Scalable Teams</h6>
                            </div>
                            <p>Whether you need a small dedicated team or large-scale support, we scale operations quickly to match your growth.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why5.svg" alt="Cost-Effective Solutions " title="Cost-Effective Solutions " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Cost-Effective Solutions</h6>
                            </div>
                            <p>Cut operational costs without compromising on service quality – we help you save up to 60% compared to in-house setups.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why6.svg" alt="High First-Call Resolution (FCR) Rates " title="High First-Call Resolution (FCR) Rates " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>High First-Call Resolution (FCR) Rates</h6>
                            </div>
                            <p>We focus on resolving customer issues on the very first contact, improving satisfaction and loyalty.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why7.svg" alt="Advanced Technology & Tools " title="Advanced Technology & Tools " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Advanced Technology & Tools</h6>
                            </div>
                            <p>Equipped with secure infrastructure, CRM integrations, and call monitoring systems to deliver superior service.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why8.svg" alt="Data Security & Compliance " title="Data Security & Compliance " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Data Security & Compliance</h6>
                            </div>
                            <p>ISO/IEC 27001:2022 certified – your customer data and business information are always protected.</p>
                        </div>
                    </div>
                    <div className="service-why-griditem scroll-animate animate__animated">
                        <div className="icon-blk">
                            <img src="/assets/ser-why9.svg" alt="Customized Solutions " title="Customized Solutions " width="30" height="30" />
                        </div>
                        <div className="btm-bar">
                            <div className="text-blk">
                                <h6>Customized Solutions</h6>
                            </div>
                            <p>Every business is unique – we design flexible engagement models and workflows to match your needs.</p>
                        </div>
                    </div>

                </div>
                <div className="counter-block-bar">
                    <div className="counter-item">
                        <div className="counter-blk">
                            <h3 className="counter-count animcount">99.9</h3>
                            <h3 className="counter-incre">%</h3>
                        </div>
                        <div className="counter-text">Service Uptime</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-blk">
                            <h3 className="counter-count animcount">60</h3>
                            <h3 className="counter-count">%</h3>
                        </div>
                        <div className="counter-text">Cost Savings</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-blk">
                            <h3 className="counter-count">24/7</h3>
                        </div>
                        <div className="counter-text">Available Support</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-blk">
                            <h3 className="counter-count animcount">95</h3>
                            <h3 className="counter-incre">%</h3>
                        </div>
                        <div className="counter-text">Customer Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
        <MouseFollowerSection selector=".services-why-3col-area" />


        <section className="testimaonial-3col" id="testimonials">
            <div className="testimaonial-3col-container container">
                 <Headingblock
                        items={[
                            {
                            heading: "Our testimonial Overview",
                            subHead : "Trusted by businesses worldwide for exceptional call center services and customer support excellence."
                            },
                        ]}
                        align="center"
                        whiteText={true}
                    />
                <div className="testimaonial-3col-area col3-gridarea">
                    <div className="testi-griditem">
                        <div className="star-bar">
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                        </div>
                        <div className="top-bar">
                            <p>"Trupp Global transformed our customer service operations. Their 24/7 support and professional agents have significantly improved our customer satisfaction scores. The cost savings are remarkable – we've reduced operational costs by 55% while maintaining exceptional service quality."</p>
                        </div>
                        <div className="btm-bar">
                            <div className="name-blk">
                                <h6>Sarah Johnson</h6>
                            </div>
                            <div className="info-blk">
                                <div className="desi">Operations Director </div>
                                <div className="field">Technology Industry</div>
                            </div>
                        </div>
                    </div>
                    <div className="testi-griditem">
                        <div className="star-bar">
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                        </div>
                        <div className="top-bar">
                            <p>"The multilingual support and cultural sensitivity of Trupp Global's agents have been game-changing for our global expansion. They handle our international customers with the same care as our local team. Highly recommended for any business looking to scale internationally."</p>
                        </div>
                        <div className="btm-bar">
                            <div className="name-blk">
                                <h6>Michael Chen</h6>
                            </div>
                            <div className="info-blk">
                                <div className="desi">CEO </div>
                                <div className="field">E-Commerce Industry</div>
                            </div>
                        </div>
                    </div>
                    <div className="testi-griditem">
                        <div className="star-bar">
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                            <img src="/assets/star.svg" alt="star" title="star" width="17" height="16"/>
                        </div>
                        <div className="top-bar">
                            <p>"What impressed us most is their technical expertise and quick adaptation to our healthcare industry requirements. The compliance standards and data security measures give us complete peace of mind. Our FCR rates have improved by 40% since partnering with them."</p>
                        </div>
                        <div className="btm-bar">
                            <div className="name-blk">
                                <h6>Emily Rodriguez</h6>
                            </div>
                            <div className="info-blk">
                                <div className="desi">Customer Success Manager </div>
                                <div className="field">Healthcare Industry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <MouseFollowerSection selector=".testimaonial-3col-area" />

        <section className="success-2col">
            <div className="success-2col-container container">
                <div className="success-2col-area">
                    <div className="left-block">
                        <div className="heading-block left-align scroll-animate animate__animated">
                            <h2>Success Story</h2>
                            <div className="min-head">See how we transformed customer support for a growing business.</div>
                        </div>
                            <Headingblock
                            items={[
                                {
                                heading: "Success Story",
                                minHead : "See how we transformed customer support for a growing business."
                                },
                            ]}
                            align="left"
                            whiteText={false}
                        />
                        <div className="counter-block-2col">
                            <div className="counter-item">
                                <div className="counter-blk">
                                    <h3 className="counter-count animcount">85</h3>
                                    <h3 className="counter-incre">%</h3>
                                </div>
                                <div className="counter-text">CSAT Rating</div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-blk">
                                    <h3 className="counter-count ">30</h3>
                                </div>
                                <div className="counter-text">Days Setup</div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-blk">
                                    <h3 className="counter-count">$40M</h3>
                                </div>
                                <div className="counter-text">Revenue</div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-blk">
                                    <h3 className="counter-count">15</h3>
                                </div>
                                <div className="counter-text">Agents</div>
                            </div>
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="heading-wrap">
                            <h3>Scaling Support for a Fast-Growing Fashion Retailer</h3>
                            <p>A leading Australian online fashion retailer with $40M annual revenue was struggling to manage rising customer inquiries. Trupp Global built and deployed a 15-member support team within 30 days, delivering voice and email support.</p>
                        </div>
                        <div className="results-blk">
                            <div className="key-head">
                                <h6> Key Results</h6>
                            </div>
                            <div className="list-itemblk">
                                <ul>
                                    <li>Achieved 85% CSAT rating in the first month</li>
                                    <li>Enabled global scaling without <strong>customer experience gaps</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="common-btn-blk success-btn">
                            <a href="#contact" className="common-black-btn"><span>Get Your Success Story</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       <FAQSection
        items={faqData}
      />

        <section className="reachout-2col" id="contact">
            <div className="reachout-2col-container container">
                <div className="heading-block center-align scroll-animate animate__animated">
                    <h2>Reach Out to Learn About Our Cost-Effective Call Center Solutions.</h2>
                </div>
                <div className="reachout-2col-area">
                    <div className="left-block">
                        <img src="/assets/reachout.png" alt="Reach Out to " title="Reach Out " width="558" height="632"/>
                    </div>
                    <div className="right-block">
                        <ContactForm showCaptcha={true} />
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
