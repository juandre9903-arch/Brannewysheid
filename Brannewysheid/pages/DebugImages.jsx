// src/pages/DebugImages.jsx
import { useState } from "react";
import { PRODUCTS, HERO_SLIDES } from "../data";

export default function DebugImages() {
  return (
    <div className="page">
      <h1>Image Debug</h1>
      <p style={{ color: "#9ca3af", fontSize: 13 }}>
        This page checks every product image (and hero images) to see which ones
        are broken. Any red card means the filename or path doesn’t match what’s
        in <code>public/images</code>.
      </p>

      {/* HERO IMAGES */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>Hero images</h2>
        <div className="product-grid">
          {HERO_SLIDES.map((src, i) => (
            <DebugImageBox
              key={`hero-${i}`}
              label={`Hero ${i + 1}`}
              src={src}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT IMAGES */}
      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>Product images</h2>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <DebugImageBox
              key={p.id}
              label={`${p.title} (${p.tag})`}
              src={p.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function DebugImageBox({ label, src }) {
  const [error, setError] = useState(false);
  const safe = encodeURI(src);

  return (
    <article
      className="product-card"
      style={{
        borderColor: error
          ? "rgba(248,113,113,0.8)"
          : "rgba(148,163,184,0.35)",
      }}
    >
      <div
        className="product-card-image"
        style={{
          display: "grid",
          placeItems: "center",
          background: "#020617",
        }}
      >
        {error ? (
          <div
            style={{
              padding: 10,
              color: "#fecaca",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            ❌ Failed to load
            <br />
            <span style={{ color: "#fee2e2", wordBreak: "break-all" }}>
              {src}
            </span>
          </div>
        ) : (
          <img
            src={safe}
            alt={label}
            onError={() => setError(true)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>
      <div className="product-card-body">
        <div
          className="product-card-title"
          style={{ fontSize: 12, marginBottom: 4 }}
        >
          {label}
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 11,
            wordBreak: "break-all",
          }}
        >
          {safe}
        </div>
      </div>
    </article>
  );
}

