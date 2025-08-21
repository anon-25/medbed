import React from "react";
import "./App.css";
import Footer from "./components/Footer";

const Privacy: React.FC = () => (
  <div className="">
    <div
      style={{
        padding: "24px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        color: "#222",
      }}
      className="gap-6 mx-[62px]"
    >
      <h1 className="font-medium text-[40px]" style={{ textAlign: "center", color: "#0d6efd", marginBottom: 32 }}>
        Privacy Policy
      </h1>

      <h2 style={{ color: "#0d6efd" }} className="font-medium text-[28px] mb-4">Privacy Policy</h2>
      <p className="mb-6">
        At Med Bed Healing Center, we are dedicated to maintaining the trust and
        confidence of our visitors. This Privacy Policy details how we collect,
        use, and protect your personal information. We are committed to ensuring
        the security of your data and complying with all applicable privacy laws.
      </p>

      <h3 className="mb-4 font-medium text-2xl" style={{ color: "#6c757d" }}>Information We Collect</h3>
      <p>
        We collect information to provide and improve our services, personalize
        your experience, and communicate with you. The types of information we may
        collect include:
      </p>
      <ul>
        <li>
          <b>Personal Information:</b> This includes your name, email address, and
          any other information you provide when you create an account, subscribe
          to our newsletter, or contact us.
        </li>
        <li>
          <b>Usage Data:</b> We collect information about how you use our website,
          such as your IP address, browser type, pages visited, and the duration
          of your visit.
        </li>
        <li>
          <b>Cookies and Tracking Technologies:</b> We use cookies and similar
          technologies to enhance your browsing experience, analyze website
          traffic, and personalize content.
        </li>
      </ul>

      <h3 className="mt-6 text-2xl mb-4" style={{ color: "#6c757d" }}>How We Use Your Information</h3>
      <p className="mb-4">We use the collected information for various purposes, including:</p>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To personalize your experience and deliver relevant content.</li>
        <li>
          To communicate with you, including sending newsletters, updates, and
          promotional materials (where permitted).
        </li>
        <li>To analyze website usage and improve our services.</li>
        <li>To protect our rights and the rights of our users.</li>
      </ul>

      <h3 className="mt-6 mb-4 text-2xl" style={{ color: "#6c757d" }}>Data Security</h3>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, use, or disclosure. These measures
        include encryption, firewalls, secure server access. However, please note
        that no method of transmission over the internet or method of electronic
        storage is completely secure.
      </p>

      <h3 style={{ color: "#6c757d" }} className="mt-6 mb-4 text-2xl">Third-Party Links</h3>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of these websites. We encourage you
        to review the privacy policies of any third-party sites you visit.
      </p>

      <h3 className="text-2xl mt-6 mb-4" style={{ color: "#6c757d" }}>Your Rights</h3>
      <p className="mb-4">
        You may have certain rights regarding your personal information, depending
        on your location and applicable laws. These rights may include the right
        to:
      </p>
      <ul>
        <li>Access your personal information.</li>
        <li>Correct any inaccuracies in your data.</li>
        <li>Request the deletion of your personal information.</li>
        <li>Object to the processing of your data.</li>
        <li>Lodge a complaint with a supervisory authority.</li>
      </ul>
      <p className="my-6">
        To exercise these rights, please contact us at{" "}
        <a href="mailto:medbedteam@gmail.com" className="underline text-[#0d6efd]">medbedteam@gmail.com</a>.
      </p>

      <h3 className="mt-6 mb-4 text-2xl font-medium" style={{ color: "#6c757d" }}>Changes to This Policy</h3>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of
        any material changes by posting the updated policy on our website and
        updating the "Last Updated" date below.
      </p>
      <p style={{ fontSize: "0.95em", color: "#555" }}>
        <b>Last Updated:</b> 04-25
      </p>
    </div>
      <Footer />
  </div>
);

export default Privacy;
