// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { HERO_SLIDES, PRODUCTS, CATEGORIES } from "../data";
import ProductCard from "../components/ProductCard";

export default function Home({ onQuickView, onAdd }) {
  const featured = PRODUCTS.slice(0, 6); // show more options now

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-tag">New drop · Limited run</div>
          <h1 className="hero-title">Streetwear met Afrikaans attitude.</h1>
          <p className="hero-text">
            Caps, hoodies, tees, sweat pants, long sleeves en drinking glasses –
            alles met Brannewysheid flair.
          </p>
          <div className="hero-actions">
            <a href="/shop" className="btn btn-primary">
              Shop now
            </a>
            <a href="/custom" className="btn btn-outline">
              Custom design
            </a>
          </div>
        </div>
        <div>
          <HeroImageCarousel images={HERO_SLIDES} />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Shop by category</h2>
        <p style={{ color: "#9ca3af", fontSize: 13, marginTop: 4 }}>
          Kies jou vibe – van caps tot drinking glasses.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
          }}
        >
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href="/shop"
              className="chip"
              style={{ textDecoration: "none", fontSize: 12 }}
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ marginTop: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 18 }}>Featured products</h2>
          <a href="/shop" className="link">
            View full shop
          </a>
        </div>
        <div className="product-grid" style={{ marginTop: 12 }}>
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onQuickView={onQuickView}
              onAdd={onAdd}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function HeroImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const safe = images.map((u) => encodeURI(u));

  useEffect(() => {
    if (!safe.length) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % safe.length),
      3500
    );
    return () => clearInterval(id);
  }, [safe.length]);

  if (!safe.length) return null;

  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(148,163,184,0.5)",
        background: "#020617",
      }}
    >
      <img
        src={safe[index]}
        alt="hero"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

