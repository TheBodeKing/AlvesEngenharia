import * as Sentry from "@sentry/react";

import { getSentryKey } from "./utils/config.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

getSentryKey().then((dsn) => {
  Sentry.init({
    dsn,

    sendDefaultPii: true,
    integrations: [
      Sentry.replayIntegration(),
      Sentry.browserTracingIntegration(),
    ],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    tracesSampleRate: 1.0,
  });
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
