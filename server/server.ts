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
  "https://www.medbedhealingcentre.com",
  "https://medbedhealingcentre.com",
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

app.get("/api/_cors-info", (req, res) => {
  res.json({ allowedOrigins: ALLOWED_ORIGINS });
  console.log(req);
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

app.post("/api/purchase", async (req, res) => {
  const {
    name,
    email,
    phone,
    whatsapp,
    telegram,
    country,
    medBedModel,
    medBedUse,
    otherUse,
    additionalInfo,
    aboutUs,
    date,
    medBedTraining,
    medBedContact,
  } = req.body || {};

  // Required fields validation
  if (
    !name ||
    !email ||
    !phone ||
    !country ||
    !medBedModel ||
    !medBedUse ||
    !medBedContact
  ) {
    return res
      .status(400)
      .json({ success: false, error: "Please fill in all required fields." });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address." });
  }

  const payload = {
    name,
    email,
    phone,
    whatsapp,
    telegram,
    country,
    medBedModel,
    medBedUse,
    otherUse,
    additionalInfo,
    aboutUs,
    date,
    medBedTraining,
    medBedContact,
    source: req.ip || req.headers["x-forwarded-for"] || null,
  };

  if (!resend) {
    await appendOutbox({
      ...payload,
      note: "Resend API key missing - saved locally.",
    });
    return res.status(500).json({
      success: false,
      error: "Email service not configured. Purchase request saved to outbox.",
    });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "no-reply@theactualdev.live",
      to: [process.env.CONTACT_RECEIVER || "theolayinkayodele@gmail.com"],
      subject: `New Med-Bed Purchase Request from ${name}`,
      html: `
        <h2>New Med-Bed Purchase Request</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
        <p><strong>Telegram:</strong> ${telegram || "Not provided"}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Date:</strong> ${date || "Not provided"}</p>
        
        <h3>Med-Bed Selection</h3>
        <p><strong>Model:</strong> ${medBedModel}</p>
        <p><strong>Intended Use:</strong> ${medBedUse}</p>
        ${
          otherUse
            ? `<p><strong>Other Use Details:</strong> ${otherUse}</p>`
            : ""
        }
        
        <h3>Additional Information</h3>
        <p><strong>Training Required:</strong> ${
          medBedTraining || "Not specified"
        }</p>
        <p><strong>Preferred Contact Method:</strong> ${medBedContact}</p>
        <p><strong>How they heard about us:</strong> ${
          aboutUs || "Not provided"
        }</p>
        ${
          additionalInfo
            ? `<p><strong>Additional Information:</strong> ${additionalInfo}</p>`
            : ""
        }
      `,
    });

    console.log("Purchase request Resend response:", data);

    await appendOutbox({ ...payload, resendResponse: data, type: "purchase" });

    return res.json({ success: true, data });
  } catch (error: any) {
    console.error(
      "Purchase request Resend send error:",
      error?.message || error,
      error?.response || "no response"
    );
    await appendOutbox({
      ...payload,
      error: String(error?.message || error),
      type: "purchase",
    });
    return res.status(500).json({
      success: false,
      error: "Failed to send purchase request. Saved to outbox.",
    });
  }
});

app.post("/api/appointment", async (req, res) => {
  const {
    name,
    number,
    email,
    demail,
    address,
    state,
    occupation,
    gender,
    other,
    age,
    date,
    purpose,
  } = req.body || {};

  // Required fields validation
  if (!name || !number || !email || !address || !state) {
    return res
      .status(400)
      .json({ success: false, error: "Please fill in all required fields." });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address." });
  }

  const payload = {
    name,
    number,
    email,
    demail,
    address,
    state,
    occupation,
    gender,
    other,
    age,
    date,
    purpose,
    source: req.ip || req.headers["x-forwarded-for"] || null,
  };

  if (!resend) {
    await appendOutbox({
      ...payload,
      note: "Resend API key missing - saved locally.",
    });
    return res.status(500).json({
      success: false,
      error:
        "Email service not configured. Appointment request saved to outbox.",
    });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "no-reply@theactualdev.live",
      to: [process.env.CONTACT_RECEIVER || "theolayinkayodele@gmail.com"],
      subject: `New Med-Bed Appointment Request from ${name}`,
      html: `
        <h2>New Med-Bed Appointment Registration</h2>
        <h3>Patient Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${demail ? `<p><strong>Additional Email:</strong> ${demail}</p>` : ""}
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>State/Region:</strong> ${state}</p>
        ${occupation ? `<p><strong>Occupation:</strong> ${occupation}</p>` : ""}
        
        <h3>Personal Details</h3>
        ${gender ? `<p><strong>Gender:</strong> ${gender}</p>` : ""}
        ${
          gender === "Other" && other
            ? `<p><strong>Other Gender:</strong> ${other}</p>`
            : ""
        }
        ${age ? `<p><strong>Age:</strong> ${age}</p>` : ""}
        ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ""}
        
        <h3>Appointment Details</h3>
        ${
          purpose
            ? `<p><strong>Purpose of Appointment:</strong> ${purpose}</p>`
            : "No purpose specified"
        }
      `,
    });

    console.log("Appointment request Resend response:", data);

    await appendOutbox({
      ...payload,
      resendResponse: data,
      type: "appointment",
    });

    return res.json({ success: true, data });
  } catch (error: any) {
    console.error(
      "Appointment request Resend send error:",
      error?.message || error,
      error?.response || "no response"
    );
    await appendOutbox({
      ...payload,
      error: String(error?.message || error),
      type: "appointment",
    });
    return res.status(500).json({
      success: false,
      error: "Failed to send appointment request. Saved to outbox.",
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
