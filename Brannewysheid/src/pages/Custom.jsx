// src/pages/Custom.jsx
import { useState } from "react";
import { WHATSAPP_NUMBER } from "../config";

const BASE_ITEMS = [
  "Caps",
  "Hoodies",
  "T-Shirts",
  "Sweat Pants",
  "Long Sleeves",
  "Drinking Glasses",
  "Other",
];

export default function Custom() {
  const [item, setItem] = useState(BASE_ITEMS[0]);
  const [qty, setQty] = useState(10);
  const [notes, setNotes] = useState("");

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I want a custom Brannewysheid design."
  )}`;

  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `Custom request captured (local only):\nItem: ${item}\nQty: ${qty}\nNotes: ${
        notes || "—"
      }\n\nConnect this to email or backend later.`
    );
  };

  return (
    <div className="page">
      <h1>Custom Design</h1>
      <p style={{ color: "#9ca3af", fontSize: 13, maxWidth: 520 }}>
        We can put <strong>BRANNEWYSHEID</strong> (or your logo/slogan) on
        caps, hoodies, tees, sweat pants, long sleeves and drinking glasses.
        Use the form below or chat via WhatsApp.
      </p>

      <a href={waLink} className="btn btn-outline" style={{ marginTop: 10 }}>
        Chat on WhatsApp
      </a>

      <form
        onSubmit={onSubmit}
        style={{ marginTop: 18, display: "grid", gap: 12, maxWidth: 520 }}
      >
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1.2fr 0.8fr" }}>
          <div>
            <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
              Base item
            </label>
            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="input"
              style={{ width: "100%" }}
            >
              {BASE_ITEMS.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
              Quantity
            </label>
            <input
              type="number"
              min={1}
              className="input"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div>
          <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
            Notes / placement
          </label>
          <textarea
            className="textarea"
            rows={5}
            placeholder="Front chest print, sleeve print, glass etch, colours, sizes, deadlines…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-primary" type="submit">
            Request quote (local)
          </button>
          <a
            href="mailto:hello@brannewysheid.co.za"
            className="btn btn-outline"
          >
            Email us
          </a>
        </div>
      </form>
    </div>
  );
}

