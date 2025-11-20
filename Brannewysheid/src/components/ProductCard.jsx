import React from "react";

export default function ProductCard({ product, onClick }) {
  const mainVariant = product.variants[0];
  return (
    <article className="product-card" onClick={onClick}>
      <div className="product-card-image-wrap">
        <img
          src={mainVariant.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.basePrice > 0 ? `R${product.basePrice}` : "Custom quote"}
        </p>
        {product.extraPricing && (
          <p className="product-extra">{product.extraPricing}</p>
        )}
      </div>
    </article>
  );
}


