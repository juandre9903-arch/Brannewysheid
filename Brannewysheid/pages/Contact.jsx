// src/pages/Contact.jsx
import { WHATSAPP_NUMBER } from "../config";

export default function Contact() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <div className="page">
      <h1>Contact</h1>
      <p style={{ color: "#9ca3af", fontSize: 13 }}>
        Reach out for orders, collabs, or custom designs.
      </p>

      <ul style={{ marginTop: 12, fontSize: 13, lineHeight: 1.8 }}>
        <li>
          WhatsApp:{" "}
          <a href={waHref} target="_blank" rel="noreferrer" className="link">
            Chat on WhatsApp
          </a>
        </li>
        <li>
          Email:{" "}
          <a
            href="mailto:hello@brannewysheid.co.za"
            className="link"
          >
            hello@brannewysheid.co.za
          </a>
        </li>
      </ul>
    </div>
  );
}
