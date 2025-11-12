// "use client";
import React from "react";
import "../globals.scss";
import "../../styles/_common.scss";

export default function Headingblock({
  items = [],
  align = "center",   // "center" | "left"
  whiteText = false,  // true | false
  className = "",     // optional extra class
}) {
  // Combine dynamic classes
  const classes = [
    "heading-block",
    align === "center" ? "center-align" : "left-align",
    whiteText ? "white-text" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {items.map((item, index) => (
        <div key={index} className="heading-item">
          {item.heading && <h2>{item.heading}</h2>}
          {item.subHead && <div className="sub-head">{item.subHead}</div>}
          {item.minHead && <div className="min-head">{item.minHead}</div>}
        </div>
      ))}
    </div>
  );
}
