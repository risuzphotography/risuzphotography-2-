import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

window.addEventListener("load", () => {
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale")
    .forEach((el) => observer.observe(el));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);