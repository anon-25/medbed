import React from "react";
import Footer from "./components/Footer";

const Terms: React.FC = () => (
  <div className="">
    <div
      className="mx-[62px]"
      style={{
        padding: "24px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        color: "#222",
      }}
    >
      <div className="flex justify-start items-start">
        <img src="/assets/logo.png" alt="" width={355} height={125} />
        <h1
          className="font-medium text-[40px] mt-6 mb-4"
          style={{ textAlign: "center", color: "#0d6efd", marginBottom: 32 }}
        >
          Terms of Service
        </h1>
      </div>

      <h2
        className="font-medium text-[28px] mt-6 mb-4"
        style={{ color: "#0d6efd" }}
      >
        Terms of Service
      </h2>
      <p>
        Welcome to Med Bed Healing Center. These Terms of Service govern your
        use of our website and services. By accessing or using our website, you
        agree to be bound by these terms.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Acceptance of Terms
      </h3>
      <p>
        By accessing and using Med Bed Healing Center, you accept and agree to
        be bound by these Terms of Service and our Privacy Policy. If you do not
        agree to these terms, please do not use our website.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Description of Services
      </h3>
      <p>
        Med Bed Healing Center provides information, products, and services
        related to holistic healing and wellness. We may modify or discontinue
        our services at any time without notice.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        User Conduct
      </h3>
      <p>
        You agree to use our website only for lawful purposes and in a manner
        that does not violate the rights of others or interfere with their use
        of the website. Prohibited activities include:
      </p>
      <ul>
        <li>Violating any applicable laws or regulations.</li>
        <li>Infringing on the intellectual property rights of others.</li>
        <li>Transmitting any harmful or malicious code.</li>
        <li>Interfering with the operation of our website.</li>
      </ul>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Intellectual Property
      </h3>
      <p>
        The content on our website, including text, graphics, logos, and images,
        is protected by copyright and other intellectual property laws. You may
        not reproduce, modify, or distribute our content without our prior
        written consent.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Disclaimer of Warranties
      </h3>
      <p>
        Our website and services are provided on an "as is" and "as available"
        basis. We make no warranties, express or implied, regarding the
        operation of our website or the accuracy, completeness, or reliability
        of any content.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Limitation of Liability
      </h3>
      <p>
        To the fullest extent permitted by law, Med Bed Healing Center shall not
        be liable for any direct, indirect, incidental, special, or
        consequential damages arising out of or in connection with your use of
        our website or services.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Indemnification
      </h3>
      <p>
        You agree to indemnify and hold harmless Med Bed Healing Center from any
        claims, losses, or damages, including reasonable attorneys' fees,
        arising out of your use of our website or your violation of these Terms
        of Service.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Governing Law
      </h3>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of your country or state.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Changes to These Terms
      </h3>
      <p>
        We may update these Terms of Service from time to time. We will notify
        you of any material changes by posting the updated terms on our website
        and updating the "Last Updated" date below. Your continued use of our
        website after the changes constitutes your acceptance of the new Terms
        of Service.
      </p>

      <h3
        className="font-medium text-2xl mt-6 mb-4"
        style={{ color: "#6c757d" }}
      >
        Contact Us
      </h3>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at <a className="underline text-[#0d6efd]" href="mailto:medbedteam@gmail.com">medbedteam@gmail.com</a>.
      </p>

      <p style={{ fontSize: "0.95em", color: "#555" }}>
        <b>Last Updated:</b> 04-2025
      </p>
    </div>
    <Footer />
  </div>
);

export default Terms;
