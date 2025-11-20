// src/components/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phone = "27820000000"; // put your real number here, no + sign
  const msg = encodeURIComponent("Hi, I’m interested in Brannewysheid merch.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-floating"
    >
      Chat
    </a>
  );
};

export default WhatsAppButton;

