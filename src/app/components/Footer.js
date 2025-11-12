
"use client";
import React from "react";
import Link from "next/link";
import "../globals.scss";
import "../../styles/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer-block">
      <div className="footer-container container">
        <div className="footer-top-area">
          {/* Logo + About */}
          <div className="footer-logo-block">
            <div className="footer-logo">
              <Link href="https://landing.acodez.ca/truppglobal/" className="ftr-logo">
                <img
                  src="/assets/ftr-logo.svg"
                  alt="truppglobal"
                  title="truppglobal"
                  width="84"
                  height="84"
                />
              </Link>
              <p>
                At Trupp Global, we help businesses deliver exceptional customer experiences
                while keeping costs low. Whether it's inbound support, outbound voice, live
                chat, email, or technical help desk – our dedicated agents represent your brand
                with empathy, efficiency, and professionalism.
              </p>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <div className="top-head">Find us on</div>
              <div className="social-lnk">
                <Link href="https://www.facebook.com/TruppGlobal" aria-label="Facebook">
                  <img src="/assets/fb-icon.svg" alt="Facebook" title="Facebook" width="9" height="18" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/trupp-global-technologies-pvt-ltd"
                  aria-label="LinkedIn"
                >
                  <img src="/assets/linkedin-icon.svg" alt="LinkedIn" title="LinkedIn" width="19" height="18" />
                </Link>
                <Link href="https://www.instagram.com/truppglobalbpo/" aria-label="Instagram">
                  <img src="/assets/insta-icon.svg" alt="Instagram" title="Instagram" width="18" height="18" />
                </Link>
                <Link href="https://x.com/Trupp4global" aria-label="Twitter">
                  <img src="/assets/twitter-icon.svg" alt="Twitter" title="Twitter" width="19" height="18" />
                </Link>
                <Link href="https://www.youtube.com/@truppglobalbpo" aria-label="YouTube">
                  <img src="/assets/youtube-icon.svg" alt="YouTube" title="YouTube" width="27" height="19" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-menu">
            <div className="top-head">Our Services</div>
            <ul>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Inbound Voice Support</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Outbound Voice Support</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Email Support</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Live Chat Support</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Technical Support</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Customer Care</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-menu">
            <div className="top-head">Industries We Serve</div>
            <ul>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">E-commerce</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Healthcare</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">BFSI</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">EdTech</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Automotive</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Travel & Hospitality</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Technology</Link></li>
              <li><Link href="https://www.truppglobal.com/get-in-touch/">Real Estate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="ftr-connect">
            <div className="top-head">Get In Touch</div>
            <div className="ftr-ct ftr-call">
              <a className="callto" href="tel:+1-407-982-5822"><span>USA</span> +1-407-982-5822</a>
              <a className="callto" href="tel:+44-203-5146643"><span>UK</span> +44-203-5146643</a>
              <a className="callto" href="tel:+91-80-41227522"><span>IND</span> +91-80-41227522</a>
            </div>
            <div className="ftr-ct ftr-mail">
              <div className="top-text">Email us</div>
              <a className="mailto" href="mailto:sales@truppglobal.com">sales@truppglobal.com</a>
            </div>
            <div className="ftr-ct ftr-address">
              <div className="top-text">Visit us</div>
              <p>
                #2HM-201, 2nd Main, Kasturi Nagar,
                <br />
                Bengaluru – 560043, India
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-btm-area">
          <div className="footer-left">
            <p>© 2025 Trupp Global Technologies Pvt. Ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="footer-right">
            <ul>
              <li><Link href="#PrivacyPolicy">Privacy Policy</Link></li>
              <li><Link href="#TermsConditions">Terms of Service</Link></li>
              <li><Link href="#CookiePolicy">Cookie Policy</Link></li>
            </ul>
            <Link href="https://acodez.in" target="_blank">Site by Acodez</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
