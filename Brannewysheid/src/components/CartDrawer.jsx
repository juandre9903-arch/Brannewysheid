// src/components/CartDrawer.jsx
import { WHATSAPP_NUMBER } from "../config";

function shareCartMessage(items, totals) {
  if (!items.length) return "";
  const lines = [
    "Hi! I'd like to order the following from Brannewysheid:",
    ...items.map(
      (p, i) =>
        `${i + 1}. ${p.title} (${p.tag}) — ${p.size} / ${p.color} x${p.qty} = R${
          p.price * p.qty
        }`
    ),
    "",
    `Subtotal: R${totals.subtotal}`,
    `Shipping: R${totals.shipping}`,
    `Total: R${totals.total}`,
  ];
  return lines.join("\n");
}

export default function CartDrawer({
  open,
  onClose,
  items,
  totals,
  inc,
  dec,
  remove,
}) {
  const msg = shareCartMessage(items, totals);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    msg
  )}`;

  if (!open) return null;

  return (
    <div className="cart-drawer">
      <div
        style={{
          padding: "10px 14px",
          borderBottom: "1px solid rgba(148,163,184,0.6)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 14,
        }}
      >
        <span>Your bag</span>
        <button className="btn btn-outline" onClick={onClose}>
          Close
        </button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: 10 }}>
        {items.length === 0 && (
          <p style={{ color: "#9ca3af", fontSize: 13 }}>Your cart is empty.</p>
        )}

        {items.map((p) => (
          <div
            key={p.key}
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 10,
              padding: 8,
              borderRadius: 12,
              border: "1px solid rgba(148,163,184,0.5)",
            }}
          >
            <div style={{ width: 64, height: 64, overflow: "hidden", borderRadius: 10 }}>
              <img
                src={encodeURI(p.img)}
                alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1, fontSize: 13 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 4,
                }}
              >
                <div style={{ fontWeight: 600 }}>{p.title}</div>
                <div>R{p.price * p.qty}</div>
              </div>
              <div style={{ color: "#9ca3af", marginTop: 2, fontSize: 12 }}>
                {p.tag} · {p.size} · {p.color}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 6,
                }}
              >
                <button
                  className="btn btn-outline"
                  style={{ paddingInline: 10, paddingBlock: 4 }}
                  onClick={() => dec(p.key)}
                >
                  −
                </button>
                <span>{p.qty}</span>
                <button
                  className="btn btn-outline"
                  style={{ paddingInline: 10, paddingBlock: 4 }}
                  onClick={() => inc(p.key)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline"
                  style={{
                    marginLeft: "auto",
                    borderColor: "rgba(248,113,113,0.9)",
                    color: "#fca5a5",
                  }}
                  onClick={() => remove(p.key)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: 12,
          borderTop: "1px solid rgba(148,163,184,0.6)",
          fontSize: 13,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}
        >
          <span>Subtotal</span>
          <span>R{totals.subtotal}</span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}
        >
          <span>Shipping</span>
          <span>R{totals.shipping}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            fontWeight: 600,
          }}
        >
          <span>Total</span>
          <span>R{totals.total}</span>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button className="btn btn-primary" style={{ flex: 1 }}>
            Checkout (placeholder)
          </button>
          {items.length > 0 && (
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{
                flex: 1,
                borderColor: "#22c55e",
                color: "#22c55e",
                textAlign: "center",
              }}
            >
              WhatsApp cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

