import { useState } from "react";
import "./App.css";
import products from "./productsData";

const WHATSAPP_NUMBER = "27678204042"; // no "+" for wa.me

const SHOP_TABS = [
  { id: "all", label: "All" },
  { id: "golfshirts", label: "Golf Shirts" },
  { id: "tshirts", label: "T-Shirts" },
  { id: "hoodies", label: "Hoodies" },
  { id: "sweaters", label: "Sweaters" },
  { id: "pants", label: "Sweatpants" },
  { id: "sets", label: "Full Sets" },
  { id: "caps", label: "Caps" },
  { id: "glasses", label: "Glasses" },
];

const SIZES = ["S", "M", "L", "XL"];

// Glass options
const GLASS_VOLUMES = ["370ml", "600ml"];
const GLASS_PACKS = [
  "Single glass",
  "Set of 2 (one of each design)",
  "Set of 6",
];

// group items by base (e.g. T-Shirt, Golf Shirt, Brannas Glass)
const groupByBase = (items) => {
  return items.reduce((groups, p) => {
    if (!groups[p.base]) groups[p.base] = [];
    groups[p.base].push(p);
    return groups;
  }, {});
};

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [shopFilter, setShopFilter] = useState("all");
  const [variantIndex, setVariantIndex] = useState({}); // base -> colour index
  const [sizeSelection, setSizeSelection] = useState({}); // base -> clothing size
  const [glassVolumeSelection, setGlassVolumeSelection] = useState({}); // base -> volume
  const [glassPackSelection, setGlassPackSelection] = useState({}); // base -> pack

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const addToCart = (product, sizeLabel) => {
    const sizeToUse = sizeLabel || "M";

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === sizeToUse
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === sizeToUse
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          size: sizeToUse,
        },
      ];
    });
  };

  const changeQuantity = (id, size, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    const lines = cart.map(
      (item) =>
        `• ${item.name} (${item.color}, ${item.size}) x${item.quantity} - R${item.price}`
    );
    const message =
      "Hi, I would like to order from BRANNEWYSHEID:\n\n" +
      lines.join("\n") +
      `\n\nTotal: R ${cartTotal.toFixed(2)}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // helper: flip colour variant for a base
  const changeVariant = (base, variants, direction) => {
    if (!variants.length) return;
    setVariantIndex((prev) => {
      const current = prev[base] ?? 0;
      const next =
        (current + direction + variants.length) % variants.length;
      return { ...prev, [base]: next };
    });
  };

  const renderShop = () => {
    const filtered =
      shopFilter === "all"
        ? products
        : products.filter((p) => p.type === shopFilter);

    const groups = groupByBase(filtered); // one card per base

    return (
      <section className="shop-section fade-in">
        <div className="shop-filters">
          {SHOP_TABS.map((tab) => (
            <button
              key={tab.id}
              className={
                "shop-tab" + (shopFilter === tab.id ? " active" : "")
              }
              onClick={() => setShopFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {Object.entries(groups).map(([base, variants]) => {
            const sorted = [...variants].sort((a, b) =>
              a.color.localeCompare(b.color)
            );
            const idx = variantIndex[base] ?? 0;
            const selected = sorted[idx] || sorted[0];

            const isGlasses = selected.type === "glasses";

            const selectedSize = sizeSelection[base] || "M";
            const selectedVolume =
              glassVolumeSelection[base] || "370ml";
            const selectedPack =
              glassPackSelection[base] ||
              "Single glass";

            return (
              <article key={base} className="card">
                <div className="card-image">
                  <img src={selected.img} alt={selected.name} />
                </div>
                <div className="card-body">
                  <h3>{base}</h3>
                  <p className="category">
                    {selected.type === "tshirts" ||
                    selected.type === "golfshirts"
                      ? `${selected.base.toUpperCase()} – ${selected.color}`
                      : selected.type === "glasses"
                      ? `Glass – ${selected.color}`
                      : `Colour: ${selected.color}`}
                  </p>
                  <p className="price">R {selected.price}</p>

                  {/* Colour selector (also for glasses) */}
                  <div className="color-row">
                    <button
                      className="color-nav"
                      onClick={() =>
                        changeVariant(base, sorted, -1)
                      }
                    >
                      ‹
                    </button>
                    {sorted.map((v, index) => (
                      <button
                        key={v.id}
                        className={
                          "color-dot" +
                          (index === idx ? " active" : "")
                        }
                        onClick={() =>
                          setVariantIndex((prev) => ({
                            ...prev,
                            [base]: index,
                          }))
                        }
                      >
                        {v.type === "glasses"
                          ? index + 1 // just 1, 2, 3 for designs
                          : v.color}
                      </button>
                    ))}
                    <button
                      className="color-nav"
                      onClick={() =>
                        changeVariant(base, sorted, 1)
                      }
                    >
                      ›
                    </button>
                  </div>

                  {/* OPTIONS */}
                  {isGlasses ? (
                    <>
                      {/* Volume options */}
                      <p className="glass-subtitle">Volume</p>
                      <div className="size-row">
                        {GLASS_VOLUMES.map((vol) => (
                          <button
                            key={vol}
                            className={
                              "size-pill" +
                              (vol === selectedVolume
                                ? " active"
                                : "")
                            }
                            onClick={() =>
                              setGlassVolumeSelection(
                                (prev) => ({
                                  ...prev,
                                  [base]: vol,
                                })
                              )
                            }
                          >
                            {vol}
                          </button>
                        ))}
                      </div>

                      {/* Pack options */}
                      <p className="glass-subtitle">Set option</p>
                      <div className="size-row">
                        {GLASS_PACKS.map((pack) => (
                          <button
                            key={pack}
                            className={
                              "size-pill" +
                              (pack === selectedPack
                                ? " active"
                                : "")
                            }
                            onClick={() =>
                              setGlassPackSelection((prev) => ({
                                ...prev,
                                [base]: pack,
                              }))
                            }
                          >
                            {pack}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    // Normal clothing sizes
                    <div className="size-row">
                      {SIZES.map((s) => (
                        <button
                          key={s}
                          className={
                            "size-pill" +
                            (s === selectedSize ? " active" : "")
                          }
                          onClick={() =>
                            setSizeSelection((prev) => ({
                              ...prev,
                              [base]: s,
                            }))
                          }
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Add to cart */}
                  <button
                    className="add-btn"
                    onClick={() => {
                      if (isGlasses) {
                        const label = `${selectedVolume} - ${selectedPack}`;
                        addToCart(selected, label);
                      } else {
                        addToCart(selected, selectedSize);
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <section className="home fade-in">
            <h1>BRANNEWYSHEID</h1>
            <p>Late night drives. New friends. New opportunities.</p>
            <p>Wear the lifestyle. Live the wysheid.</p>
          </section>
        );

      case "shop":
        return renderShop();

      case "custom":
        return (
          <section className="about fade-in">
            <h2>Custom Orders</h2>
            <p>
              Want something uniek? BRANNEWYSHEID offers custom colourways,
              bulk event drops, and branded merch collabs.
            </p>
            <p>
              Send us your idea on WhatsApp and we’ll help you build your own
              wysheid drop.
            </p>
          </section>
        );

      case "contact":
        return (
          <section className="about fade-in">
            <h2>Contact Us</h2>

            {/* WhatsApp */}
            <p>
              <span
                role="img"
                aria-label="phone"
                style={{ marginRight: "0.4rem" }}
              >
                📱
              </span>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "gold" }}
              >
                +27 67 820 4042
              </a>
            </p>

            {/* Email */}
            <p>
              <span
                role="img"
                aria-label="email"
                style={{ marginRight: "0.4rem" }}
              >
                📧
              </span>
              Email:{" "}
              <a
                href="mailto:brannewysheid@gmail.com"
                style={{ color: "gold" }}
              >
                brannewysheid@gmail.com
              </a>
            </p>

            {/* Instagram */}
            <p>
              <span
                role="img"
                aria-label="instagram"
                style={{ marginRight: "0.4rem" }}
              >
                📷
              </span>
              Instagram:{" "}
              <a
                href="https://instagram.com/brannewysheid"
                target="_blank"
                rel="noreferrer"
                style={{ color: "gold" }}
              >
                @brannewysheid
              </a>
            </p>
          </section>
        );

      case "about":
        return (
          <section className="about fade-in">
            <h2>About BRANNEWYSHEID</h2>
            <p>
              “BRANNEWYSHEID” — a saying that started as a joke between a group
              of friends quickly turned into a lifestyle filled with late night
              drives, new friends and new opportunities.
            </p>
            <p>
              Every piece of apparel — from caps to hoodies all the way through
              to the drinking glasses — comes with a touch of wysheid.
            </p>
          </section>
        );

      case "cart":
        return (
          <section className="about fade-in">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty. Go add some wysheid in the Shop tab.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li
                      key={`${item.id}-${item.size}`}
                      className="cart-item"
                    >
                      <div className="cart-info">
                        <span className="cart-name">
                          {item.name} ({item.color}, {item.size})
                        </span>
                        <span className="cart-price">
                          R {item.price} x {item.quantity}
                        </span>
                      </div>
                      <div className="cart-actions">
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.size, -1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.size, 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeFromCart(item.id, item.size)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-summary">
                  <p>
                    <b>Total items:</b> {cartCount}
                  </p>
                  <p>
                    <b>Total:</b> R {cartTotal.toFixed(2)}
                  </p>
                  <button
                    className="checkout-btn"
                    onClick={checkoutWhatsApp}
                  >
                    Checkout via WhatsApp
                  </button>
                </div>
              </>
            )}
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <button
          onClick={() => setPage("home")}
          className={page === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          onClick={() => setPage("shop")}
          className={page === "shop" ? "active" : ""}
        >
          Shop
        </button>
        <button
          onClick={() => setPage("custom")}
          className={page === "custom" ? "active" : ""}
        >
          Custom
        </button>
        <button
          onClick={() => setPage("contact")}
          className={page === "contact" ? "active" : ""}
        >
          Contact
        </button>
        <button
          onClick={() => setPage("about")}
          className={page === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          onClick={() => setPage("cart")}
          className={page === "cart" ? "active" : ""}
        >
          Cart ({cartCount})
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="content">{renderPage()}</main>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hi, I want to chat about BRANNEWYSHEID merch 👋"
        )}`}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Chat
      </a>

      <footer className="footer">
        <span>© {new Date().getFullYear()} BRANNEWYSHEID</span>
      </footer>
    </div>
  );
}

export default App;







