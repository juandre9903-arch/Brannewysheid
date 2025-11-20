import React, { useState, useEffect } from "react";

export default function ProductModal({ product, onClose }) {
  const [variantId, setVariantId] = useState(null);

  useEffect(() => {
    if (product) {
      setVariantId(product.variants[0]?.id || null);
    }
  }, [product]);

  if (!product) return null;

  const selectedVariant =
    product.variants.find((v) => v.id === variantId) || product.variants[0];

  const priceText =
    product.basePrice > 0 ? `R${product.basePrice}` : "Custom quote";

  const whatsappText = encodeURIComponent(
    `Hi, I'm interested in:\n` +
      `Product: ${product.name}\n` +
      `Category: ${product.category}\n` +
      `Variant/Colour: ${selectedVariant.label}\n` +
      `Price: ${priceText}\n\n` +
      `Please let me know size options and availability.`
  );

  const whatsappLink = `https://wa.me/27XXXXXXXXX?text=${whatsappText}`; // << put your number after country code

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">
          <div className="modal-image-wrap">
            <img
              src={selectedVariant.image}
              alt={product.name}
              className="modal-image"
            />
          </div>
          <div className="modal-details">
            <p className="product-category">{product.category}</p>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{priceText}</p>
            {product.extraPricing && (
              <p className="product-extra">{product.extraPricing}</p>
            )}
            {product.description && (
              <p className="product-description">{product.description}</p>
            )}

            {product.variants.length > 1 && (
              <div className="variant-selector">
                <p className="variant-label">Colour / style:</p>
                <div className="variant-buttons">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      className={
                        "variant-btn" +
                        (v.id === selectedVariant.id
                          ? " variant-btn--active"
                          : "")
                      }
                      onClick={() => setVariantId(v.id)}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
