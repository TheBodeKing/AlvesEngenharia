import * as Sentry from "@sentry/react";
import { getSentryDSN } from "./utils/config.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

Sentry.init({
  dsn: getSentryDSN(),
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events

  sendDefaultPii: true,
  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
