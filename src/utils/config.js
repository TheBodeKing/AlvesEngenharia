export const getSentryDSN = () => {
  return import.meta.env.VITE_SENTRY_DSN || import.meta.env.SENTRY_DSN;
};

export const getEmailJsKey = () => {
  return (
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    import.meta.env.EMAILJS_PUBLIC_KEY
  );
};
