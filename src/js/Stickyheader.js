"use client";
import { useEffect } from "react";

export default function useStickyHeader() {
  useEffect(() => {
    const header = document.querySelector(".header_block");
    const body = document.body;

    if (!header) return; // Safety check

    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!header.classList.contains("is-sticky")) {
          header.classList.add("is-sticky");
          body.classList.add("header-scrolled");
        }
      } else {
        header.classList.remove("is-sticky");
        body.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
