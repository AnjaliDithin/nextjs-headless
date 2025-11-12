"use client";
import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

export default function MouseFollowerSection({ selector }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.querySelector(selector)) return;

    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      container: selector,
      speed: 0.4,
      stateDetection: {
        "-pointer": false, // disable pointer detection
      },
    });

    // Cleanup when component unmounts or section removed
    return () => cursor.destroy();
  }, [selector]);

  return null; // nothing visible — just behavior
}
