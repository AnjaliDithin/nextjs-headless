"use client";
import React, { useEffect } from "react";

export default function ContactForm({
  showCaptcha = false,
  theme = "light",
  title = "",
}) {
  useEffect(() => {
    if (!showCaptcha) return;

    // Simple Captcha generator
    const generateCaptcha = () => {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "";
      for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.querySelectorAll(".captcha-code").forEach((el) => (el.textContent = code));
    };

    generateCaptcha();
    document.querySelectorAll(".refresh-btn").forEach((btn) => {
      btn.addEventListener("click", generateCaptcha);
    });

    return () => {
      document.querySelectorAll(".refresh-btn").forEach((btn) => {
        btn.removeEventListener("click", generateCaptcha);
      });
    };
  }, [showCaptcha]);

  return (
    <div className={`contact-form-wrap ${theme === "dark" ? "banner-form" : ""}`}>
      {title && <div className="top-title">{title}</div>}

      <form action="/submit" method="post" aria-labelledby="form-title" noValidate>
        <ul className="form-wrap">
          <li className="form-field">
            <input type="text" name="Yourname" placeholder="Your name" required aria-label="Your name" />
          </li>
          <li className="form-field">
            <input type="email" name="Emailaddress" placeholder="Email address" required aria-label="Email address" />
          </li>
          <li className="form-field">
            <input type="tel" name="PhoneNumber" placeholder="Phone Number" required aria-label="Phone Number" />
          </li>
          <li className="form-field">
            <input type="text" name="Country" placeholder="Country" required aria-label="Country" />
          </li>
          <li className="form-field">
            <input type="text" name="CompanyName" placeholder="Company Name" required aria-label="Company Name" />
          </li>
          <li className="form-field">
            <input type="text" name="Website" placeholder="Website" aria-label="Website" />
          </li>
          <li className="form-field full-width-field">
            <textarea
              name="Message"
              placeholder="Tell us about your requirement"
              required
              aria-label="Message"
            ></textarea>
          </li>

          {showCaptcha && (
            <li className="form-field full-width-field">
              <div className="captcha-block">
                <input
                  type="text"
                  className="captcha-input"
                  name="captcha"
                  placeholder="Enter Captcha"
                  required
                />
                <div className="captcha-display">
                  <span className="captcha-code"></span>
                  <button type="button" className="refresh-btn" aria-label="Refresh Captcha">
                    <img src="/assets/refresh-icon.svg" alt="Refresh" title="Refresh Captcha" />
                  </button>
                </div>
              </div>
            </li>
          )}

          <li className="form-field full-width-field">
            <input
              type="submit"
              value="Get a Free Quote Now"
              className={`common-input-btn ${theme === "dark" ? "inputWhite-btn" : ""}`}
            />
          </li>

          <li className="form-field full-width-field">
            <p>Your information is secure and will not be shared.</p>
          </li>
        </ul>
      </form>
    </div>
  );
}
