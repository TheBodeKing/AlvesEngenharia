export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");

  const key = process.env.SENTRY_DSN;

  if (!key) {
    return res.status(500).json({ error: "Sentry Key not found" });
  }

  return res.status(200).json({ key });
}
