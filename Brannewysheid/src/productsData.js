// ================================
// IMAGE PATHS (served from /public)
// ================================

// ----- CAPS -----
const BLCap   = "/images/BLCap.png";      // black cap
const WHCap   = "/images/WHCap.png";      // white cap
const OLCap   = "/images/OLCap.png";      // olive cap
const CamCap  = "/images/CamCap.png";     // camo cap

// ----- SHIRTS (TEES & GOLF) -----
const BGolf   = "/images/BGolf.jpg";      // black golf shirt
const TBlack  = "/images/TBlack.jpg";     // black t-shirt
const TGrey   = "/images/TGrey.jpg";      // grey t-shirt
const TWhite  = "/images/Twhite.jpg";     // white t-shirt

// ----- HOODIES -----
const BHoodie = "/images/BHoodie.jpg";    // black hoodie
const WHoodie = "/images/WHoodie.jpg";    // white hoodie

// ----- SWEATERS / CREWNECKS -----
const BSweat  = "/images/BSweat.jpg";     // black sweater
const GSweat  = "/images/GSweat.jpg";     // grey sweater
const WSweat  = "/images/WSweat.jpg";     // white sweater

// ----- SWEATPANTS -----
const BSweatP = "/images/BSweatP.jpg";    // black pants
const GSweatP = "/images/GSweatP.jpg";    // grey pants
const WSweatP = "/images/WSweatP.jpg";    // white pants

// ----- FULL SETS (HOODIE + PANTS) -----
const BSet    = "/images/Bset.jpg";       // black set
const GSet    = "/images/GSet.jpg";       // grey set
const WSet    = "/images/WSet.jpg";       // white set

// ----- GLASSES (NEW IMAGES) -----
const GlassGrysheid = "/images/Grysheid.jpg";      // WYSHEID KOM MET BRANNAS design
const GlassSkop     = "/images/Skop.jpg";          // BRANNEWYSHEID SKOP JOU... design
const GlassSetPromo = "/images/GlassesSet.jpg";    // promo image (set)

// ================================
// PRODUCT DATA (variants)
// ================================

export const products = [
  // ---------- GOLF SHIRTS ----------
  {
    id: 1,
    type: "golfshirts",
    base: "Golf Shirt",
    color: "Black",
    name: "Black Golf Shirt",
    price: 200,
    img: BGolf,
  },

  // ---------- T-SHIRTS ----------
  {
    id: 2,
    type: "tshirts",
    base: "T-Shirt",
    color: "Black",
    name: "Black T-Shirt",
    price: 160,
    img: TBlack,
  },
  {
    id: 3,
    type: "tshirts",
    base: "T-Shirt",
    color: "Grey",
    name: "Grey T-Shirt",
    price: 160,
    img: TGrey,
  },
  {
    id: 4,
    type: "tshirts",
    base: "T-Shirt",
    color: "White",
    name: "White T-Shirt",
    price: 160,
    img: TWhite,
  },

  // ---------- HOODIES ----------
  {
    id: 5,
    type: "hoodies",
    base: "Hoodie",
    color: "Black",
    name: "Black Hoodie",
    price: 350,
    img: BHoodie,
  },
  {
    id: 6,
    type: "hoodies",
    base: "Hoodie",
    color: "White",
    name: "White Hoodie",
    price: 350,
    img: WHoodie,
  },

  // ---------- SWEATERS ----------
  {
    id: 7,
    type: "sweaters",
    base: "Sweater",
    color: "Black",
    name: "Black Sweater",
    price: 350,
    img: BSweat,
  },
  {
    id: 8,
    type: "sweaters",
    base: "Sweater",
    color: "Grey",
    name: "Grey Sweater",
    price: 350,
    img: GSweat,
  },
  {
    id: 9,
    type: "sweaters",
    base: "Sweater",
    color: "White",
    name: "White Sweater",
    price: 350,
    img: WSweat,
  },

  // ---------- SWEATPANTS ----------
  {
    id: 10,
    type: "pants",
    base: "Sweatpants",
    color: "Black",
    name: "Black Sweatpants",
    price: 350,
    img: BSweatP,
  },
  {
    id: 11,
    type: "pants",
    base: "Sweatpants",
    color: "Grey",
    name: "Grey Sweatpants",
    price: 350,
    img: GSweatP,
  },
  {
    id: 12,
    type: "pants",
    base: "Sweatpants",
    color: "White",
    name: "White Sweatpants",
    price: 350,
    img: WSweatP,
  },

  // ---------- FULL SETS ----------
  {
    id: 13,
    type: "sets",
    base: "Tracksuit Set",
    color: "Black",
    name: "Black Hoodie + Sweatpants Set",
    price: 650,
    img: BSet,
  },
  {
    id: 14,
    type: "sets",
    base: "Tracksuit Set",
    color: "Grey",
    name: "Grey Hoodie + Sweatpants Set",
    price: 650,
    img: GSet,
  },
  {
    id: 15,
    type: "sets",
    base: "Tracksuit Set",
    color: "White",
    name: "White Hoodie + Sweatpants Set",
    price: 650,
    img: WSet,
  },

  // ---------- CAPS ----------
  {
    id: 16,
    type: "caps",
    base: "Cap",
    color: "Black",
    name: "Black Brannewysheid Cap",
    price: 120,
    img: BLCap,
  },
  {
    id: 17,
    type: "caps",
    base: "Cap",
    color: "White",
    name: "White Brannewysheid Cap",
    price: 120,
    img: WHCap,
  },
  {
    id: 18,
    type: "caps",
    base: "Cap",
    color: "Olive",
    name: "Olive Brannewysheid Cap",
    price: 120,
    img: OLCap,
  },
  {
    id: 19,
    type: "caps",
    base: "Cap",
    color: "Camo",
    name: "Camo Brannewysheid Cap",
    price: 120,
    img: CamCap,
  },

  // ---------- GLASSES (with 370/600ml + set options in App.jsx) ----------
  {
    id: 20,
    type: "glasses",
    base: "Brannas Glass",
    color: "Wysheid kom met Brannas",
    name: '"Wysheid Kom Met Brannas" Glass',
    price: 150,
    img: GlassGrysheid,
  },
  {
    id: 21,
    type: "glasses",
    base: "Brannas Glass",
    color: "Skop jou soms uit die huis uit",
    name: '"Skop Jou Soms Uit Die Huis Uit" Glass',
    price: 150,
    img: GlassSkop,
  },
  {
    id: 22,
    type: "glasses",
    base: "Brannas Glass",
    color: "Promo Set",
    name: "Brannas Glass Promo Set",
    price: 150,
    img: GlassSetPromo,
  },
];

export default products;



