// src/data.js

// ===========================
// CATEGORIES
// ===========================
export const CATEGORIES = [
  "Caps",
  "Hoodies",
  "T-Shirts",
  "Sweat Pants",
  "Long Sleeves",
  "Drinking Glasses",
];

// ===========================
// SIZE OPTIONS BY CATEGORY
// ===========================
export const SIZE_OPTIONS = {
  Caps: ["One Size"],
  Hoodies: ["S", "M", "L", "XL", "XXL"],
  "T-Shirts": ["S", "M", "L", "XL", "XXL"],
  "Sweat Pants": ["S", "M", "L", "XL"],
  "Long Sleeves": ["S", "M", "L", "XL", "XXL"],
  "Drinking Glasses": ["One Size"],
};

// ===========================
// COLOR OPTIONS BY CATEGORY
// ===========================
// (We keep colours that actually have meaning / images)
export const COLOR_OPTIONS = {
  Caps: ["Black", "White"],
  Hoodies: ["Black", "Grey", "Beige"],
  "T-Shirts": ["Black", "White"],
  "Sweat Pants": ["Black"],
  "Long Sleeves": ["Black", "White"],
  "Drinking Glasses": ["Clear"],
};

// ===========================
// DEFAULTS BY TAG (used for cart)
// ===========================
export const DEFAULTS_BY_TAG = {
  Caps: { size: "One Size", color: "Black" },
  Hoodies: { size: "M", color: "Black" },
  "T-Shirts": { size: "M", color: "Black" },
  "Sweat Pants": { size: "M", color: "Black" },
  "Long Sleeves": { size: "M", color: "Black" },
  "Drinking Glasses": { size: "One Size", color: "Clear" },
};

// ===========================
// PRODUCTS (UPDATED PRICES)
// with imagesByColor where useful
// ===========================
//
// Pricing rules:
// - Caps:               R80
// - Hoodies:            R350
// - T-Shirts:           R150
// - Long Sleeves:       R250
// - Sweat Pants:        R250
// - 370ml Glass:        R55 each, R300 set of 6
// - 600ml Glass:        R80 each, R380 set of 6
//
export const PRODUCTS = [
  // ===== CAPS (1 product, colour-based images) =====
  {
    id: "cap-main",
    title: "Brannewysheid Cap",
    price: 80,
    tag: "Caps",
    // default image when nothing else matches
    img: "/images/Screenshot 2025-11-11 155443.png",
    imagesByColor: {
      Black: "/images/Screenshot 2025-11-11 155443.png",
      White: "/images/Screenshot 2025-11-11 155534.png",
    },
  },

  // ===== HOODIES (1 product, colour-based images) =====
  {
    id: "hoodie-main",
    title: "Brannewysheid Hoodie",
    price: 350,
    tag: "Hoodies",
    img: "/images/Screenshot 2025-11-11 155556.png", // default: black
    imagesByColor: {
      Black: "/images/Screenshot 2025-11-11 155556.png",
      Grey: "/images/10-25-2022-06.24.54.203.PM.jpg",
      Beige: "/images/1649597663990.png",
      // If you want the Instagram one as a 4th colour later, we can add it.
    },
  },

  // ===== T-SHIRTS (1 product, colour-based images) =====
  {
    id: "tee-main",
    title: "Brannewysheid Tee",
    price: 150,
    tag: "T-Shirts",
    img: "/images/1000477141.jpg", // default: black
    imagesByColor: {
      Black: "/images/1000477141.jpg",
      White: "/images/1000477140.png",
    },
  },

  // ===== LONG SLEEVES (1 product, colour-based images) =====
  {
    id: "long-main",
    title: "Long Sleeve",
    price: 250,
    tag: "Long Sleeves",
    img: "/images/Picsart_23-06-01_18-21-47-026.jpg", // default: black
    imagesByColor: {
      Black: "/images/Picsart_23-06-01_18-21-47-026.jpg",
      White: "/images/Picsart_23-06-01_18-20-34-052.jpg",
    },
  },

  // ===== SWEAT PANTS (1 product, only black image for now) =====
  {
    id: "sweats-main",
    title: "Sweat Pants",
    price: 250,
    tag: "Sweat Pants",
    img: "/images/1649597739945.png",
    imagesByColor: {
      Black: "/images/1649597739945.png",
    },
  },

  // ===== DRINKING GLASSES – 370ml =====
  {
    id: "glass370-1",
    title: "370ml Glass – Wysheid/Brannas",
    price: 55, // each
    img: "/images/1000477153.png",
    tag: "Drinking Glasses",
    size: "370ml",
    imagesByColor: {
      Clear: "/images/1000477153.png",
    },
  },
  {
    id: "glass370-set6",
    title: "370ml Glass Set (6)",
    price: 300, // set of 6
    img: "/images/1000477153.png",
    tag: "Drinking Glasses",
    size: "370ml Set of 6",
    imagesByColor: {
      Clear: "/images/1000477153.png",
    },
  },

  // ===== DRINKING GLASSES – 600ml =====
  {
    id: "glass600-1",
    title: "600ml Glass – Levels",
    price: 80, // each
    img: "/images/1000477143 (1).png",
    tag: "Drinking Glasses",
    size: "600ml",
    imagesByColor: {
      Clear: "/images/1000477143 (1).png",
    },
  },
  {
    id: "glass600-set6",
    title: "600ml Glass Set (6)",
    price: 380, // set of 6
    img: "/images/1000477143 (1).png",
    tag: "Drinking Glasses",
    size: "600ml Set of 6",
    imagesByColor: {
      Clear: "/images/1000477143 (1).png",
    },
  },

  // ===== EXTRA GLASS SHOTS (PAIR / GALLERY) =====
  {
    id: "glass-pair",
    title: "Drinking Glasses – Pair / Lifestyle",
    price: 55,
    img: "/images/Screenshot_20251104_103621_Gallery.jpg",
    tag: "Drinking Glasses",
    size: "Lifestyle",
    imagesByColor: {
      Clear: "/images/Screenshot_20251104_103621_Gallery.jpg",
    },
  },
  {
    id: "glass-fire",
    title: "Drinking Glass – Fireplace Shot",
    price: 55,
    img: "/images/Screenshot 2025-11-11 155617.png",
    tag: "Drinking Glasses",
    size: "370ml",
    imagesByColor: {
      Clear: "/images/Screenshot 2025-11-11 155617.png",
    },
  },
];

// ===========================
// HERO SLIDES (for home hero)
// ===========================
export const HERO_SLIDES = [
  "/images/1000477156.png",
  "/images/1741962134321.png",
  "/images/Screenshot 2025-11-11 155534.png",
  "/images/10-25-2022-06.24.54.203.PM.jpg",
  "/images/1000477153.png",
];

