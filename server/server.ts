import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { Resend } from "resend";
import cors from "cors";
import fs from "fs/promises";
import path from "path";

const app = express();

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://medbed-alpha.vercel.app",
  // add your production frontend origin(s) here
  process.env.VITE_FRONTEND_ORIGIN,
].filter(Boolean) as string[];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like curl, server-to-server)
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS policy: Origin not allowed"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
    optionsSuccessStatus: 200,
  })
);

// quick debug endpoint to list allowed origins
app.get("/api/_cors-info", (req, res) => {
  res.json({ allowedOrigins: ALLOWED_ORIGINS });
});

app.use(bodyParser.json());

const RESEND_API_KEY = process.env.VITE_RESEND;
if (!RESEND_API_KEY) {
  console.warn(
    "WARNING: VITE_RESEND is not set. Email delivery will fail until you set it."
  );
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const OUTBOX_PATH = path.resolve(process.cwd(), "outbox.json");

async function appendOutbox(entry: Record<string, any>) {
  try {
    let arr: any[] = [];
    try {
      const raw = await fs.readFile(OUTBOX_PATH, "utf8");
      arr = JSON.parse(raw || "[]");
    } catch (err) {
      arr = [];
    }
    arr.push({ ...entry, receivedAt: new Date().toISOString() });
    await fs.writeFile(OUTBOX_PATH, JSON.stringify(arr, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to write outbox fallback:", err);
  }
}

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address." });
  }

  const payload = {
    name,
    email,
    message,
    source: req.ip || req.headers["x-forwarded-for"] || null,
  };

  if (!resend) {
    await appendOutbox({
      ...payload,
      note: "Resend API key missing - saved locally.",
    });
    return res.status(500).json({
      success: false,
      error: "Email service not configured. Message saved to outbox.",
    });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "no-reply@theactualdev.live",
      to: [process.env.CONTACT_RECEIVER || "theolayinkayodele@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend response:", data);

    await appendOutbox({ ...payload, resendResponse: data });

    return res.json({ success: true, data });
  } catch (error: any) {
    console.error(
      "Resend send error:",
      error?.message || error,
      error?.response || "no response"
    );
    await appendOutbox({ ...payload, error: String(error?.message || error) });
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Saved to outbox.",
    });
  }
});

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3001");
  if (!RESEND_API_KEY)
    console.log(
      "Tip: set VITE_RESEND in your environment or .env to enable sending emails."
    );
});
