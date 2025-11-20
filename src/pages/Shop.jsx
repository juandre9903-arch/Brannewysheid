// src/pages/Shop.jsx
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data";
import ProductCard from "../components/ProductCard";

// Build category tiles: one representative image per category
const CATEGORY_TILES = CATEGORIES.map((cat) => {
  const slug = cat.toLowerCase().replace(/\s+/g, "-");
  const firstProduct = PRODUCTS.find((p) => p.tag === cat);
  const count = PRODUCTS.filter((p) => p.tag === cat).length;

  return {
    name: cat,
    slug,
    img: firstProduct ? firstProduct.img : null,
    count,
  };
});

export default function Shop({ onQuickView, onAdd }) {
  const { categorySlug } = useParams();

  // If there is NO :categorySlug in the URL → show categories grid
  if (!categorySlug) {
    return <ShopCategoriesView />;
  }

  // If /shop/:categorySlug → show only that category's products
  return (
    <ShopCategoryDetailView
      categorySlug={categorySlug}
      onQuickView={onQuickView}
      onAdd={onAdd}
    />
  );
}

// ===============================
// 1) /shop  → Category grid
// ===============================
function ShopCategoriesView() {
  return (
    <div className="page">
      <h1>Shop</h1>

      <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 16 }}>
        Kies jou vibe – begin deur ’n kategorie te kies. Caps, hoodies, tees,
        sweat pants, long sleeves en drinking glasses.
      </p>

      <div
        className="product-grid"
        style={{
          marginTop: 10,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {CATEGORY_TILES.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop/${cat.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article className="product-card">
              <div
                className="product-card-image"
                style={{
                  display: "grid",
                  placeItems: "center",
                  background: "#020617",
                }}
              >
                {cat.img ? (
                  <img
                    src={encodeURI(cat.img)}
                    alt={cat.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      padding: 10,
                      color: "#9ca3af",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    No image set yet
                  </div>
                )}
              </div>
              <div className="product-card-body">
                <div className="product-card-title">{cat.name}</div>
                <div className="product-card-meta">
                  <span>{cat.count} items</span>
                  <span style={{ fontSize: 11 }}>View</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ===============================
// 2) /shop/:categorySlug → Products grid for that category only
// ===============================
function ShopCategoryDetailView({ categorySlug, onQuickView, onAdd }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const catTile = CATEGORY_TILES.find((c) => c.slug === categorySlug);

  if (!catTile) {
    // Unknown category slug
    return (
      <div className="page">
        <h1>Category not found</h1>
        <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 12 }}>
          This category doesn’t exist. Go back to the shop overview.
        </p>
        <button className="btn btn-outline" onClick={() => navigate("/shop")}>
          Back to categories
        </button>
      </div>
    );
  }

  const products = PRODUCTS.filter(
    (p) =>
      p.tag === catTile.name &&
      p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="page">
      <button
        className="btn btn-outline"
        onClick={() => navigate("/shop")}
        style={{ marginBottom: 14 }}
      >
        ← Back to categories
      </button>

      <h1>{catTile.name}</h1>

      <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 14 }}>
        Showing all {catTile.name.toLowerCase()} items. Search within this
        category below.
      </p>

      <input
        className="input"
        placeholder={`Search ${catTile.name.toLowerCase()}…`}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ minWidth: 220, marginBottom: 16 }}
      />

      <div
        className="product-grid"
        style={{
          marginTop: 10,
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        }}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickView={onQuickView}
            onAdd={onAdd}
          />
        ))}

        {products.length === 0 && (
          <p style={{ color: "#9ca3af", fontSize: 13 }}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
