import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

// ─── Accessibility auditing (dev only) ──────────────────────────
// Logs WCAG violations to the browser console in development.
// Completely tree-shaken out of production builds.
if (import.meta.env.DEV) {
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000);     // re-scans every 1 s
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);