export const getEmailJsKey = async () => {
  const emailToken = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (emailToken) {
    return emailToken;
  }

  try {
    const res = await fetch("/api/getEmailJsKey");
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }
    const data = await res.json();
    return data.key;
  } catch (err) {
    console.error("Failed to fetch EmailJS key:", err);
    return null;
  }
};

export const getSentryKey = async () => {
  const sentryToken = import.meta.env.VITE_SENTRY_DSN;
  if (sentryToken) {
    return sentryToken;
  }

  try {
    const res = await fetch("/api/getSentryKey");
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }
    const data = await res.json();
    return data.key;
  } catch (err) {
    console.error("Failed to fetch Sentry key:", err);
    return null;
  }
};
