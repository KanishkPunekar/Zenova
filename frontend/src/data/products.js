// The 14-product portfolio from page 8 of the company profile.
//
// HOW TO COMPLETE A PRODUCT
// -------------------------
// `code`, `technical` and `packing` are intentionally empty. Nothing invents
// numbers for you: until you fill them in from the product's real technical data
// sheet, the product page shows a "technical data on request" panel instead of a
// spec table. Fill them in like this:
//
//   code: "ZTA-101",
//   standard: "IS 15477 : 2019 — Type 1",
//   technical: {
//     appearance: "Grey free-flowing powder",
//     coverage: "30–35 sq ft per 20 kg bag at 3 mm",
//     mixingRatio: "26–28% water by weight of powder",
//     potLife: "2–3 hours",
//     openTime: "20–30 minutes",
//     adjustability: "Up to 20 minutes",
//     bondStrength: "≥ 0.5 N/mm² (28 days)",
//   },
//   packing: { sizes: ["20 kg bag", "40 kg bag"], shelfLife: "6 months" },
//
// Every key is optional — whatever you provide is rendered, the rest is skipped.

export const categories = [
  { id: "all", label: "All Products" },
  { id: "grey", label: "Grey Range" },
  { id: "white", label: "White Range" },
  { id: "mortar", label: "Mortars & Plaster" },
  { id: "repair", label: "Repair & Grouts" },
  { id: "liquid", label: "Liquid Chemicals" },
];

/** Universally true of cement-based site products — shown on every product page. */
export const generalSafety = [
  "Cement-based products are alkaline. Wear gloves and eye protection while mixing.",
  "Avoid inhaling dust; mix in a ventilated area.",
  "Keep bags dry, off the floor, and away from water until use.",
  "Keep out of reach of children. In case of contact with eyes, rinse with clean water and seek medical advice.",
];

export const products = [
  {
    slug: "tile-adhesive-grey-type-1",
    name: "Tile Adhesive — Grey Type 1",
    code: "",
    category: "grey",
    range: "Grey",
    standard: "",
    summary:
      "Cement-based adhesive for fixing ceramic tiles on interior floors and walls.",
    description:
      "A grey cement-based thin-bed adhesive made from graded silica sand, cement and polymer additives, for everyday interior tiling. It replaces the traditional thick cement-sand bed with a 3–5 mm layer, which means less material on site, lighter dead load and faster laying.",
    features: [
      "Thin-bed application in place of a thick cement-sand bed",
      "Ready to use — mix with water only, no site batching",
      "Polymer modified for improved bond to the substrate",
      "Consistent factory-graded sand for repeatable workability",
    ],
    applications: [
      "Interior floors and walls",
      "Ceramic and mosaic tiles",
      "Tile-on-concrete substrates",
    ],
    substrates: ["Concrete", "Cement plaster", "Cement screed", "Masonry"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-grey-type-2",
    name: "Tile Adhesive — Grey Type 2",
    code: "",
    category: "grey",
    range: "Grey",
    standard: "",
    summary:
      "Higher-strength grey adhesive for vitrified tiles and moisture-exposed interiors.",
    description:
      "A polymer-modified grey adhesive formulated for low-porosity tiles such as vitrified and porcelain, which do not absorb water and therefore need the adhesive to do more of the bonding work. Suited to interiors that stay damp, including bathrooms and kitchens.",
    features: [
      "Higher polymer content for bonding low-absorption tiles",
      "Holds up in continuously damp interior areas",
      "Good slip resistance on vertical surfaces",
      "Suitable for both floors and walls",
    ],
    applications: [
      "Vitrified and porcelain tiles",
      "Bathrooms, kitchens and wet areas",
      "Interior walls and floors",
    ],
    substrates: ["Concrete", "Cement plaster", "Cement screed", "Waterproofed beds"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-grey-type-3",
    name: "Tile Adhesive — Grey Type 3",
    code: "",
    category: "grey",
    range: "Grey",
    standard: "",
    summary:
      "Heavy-duty adhesive for large-format tiles and exterior applications.",
    description:
      "A high-strength grey adhesive for heavy and large-format tiles, and for exterior work where the finish has to cope with sun, rain and thermal movement. Its higher bond strength and body support bigger tiles without slip during setting.",
    features: [
      "Supports heavy and large-format tiles without slip",
      "Formulated for exterior exposure and thermal movement",
      "Higher bond strength than general-purpose grades",
      "Suitable for natural stone on cement substrates",
    ],
    applications: [
      "Large-format and heavy tiles",
      "Exterior facades and walkways",
      "Natural stone on cement substrates",
    ],
    substrates: ["Concrete", "Cement plaster", "Cement screed", "Existing sound tiling"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-grey-type-4",
    name: "Tile Adhesive — Grey Type 4",
    code: "",
    category: "grey",
    range: "Grey",
    standard: "",
    summary:
      "High-performance flexible adhesive for demanding and deflection-prone substrates.",
    description:
      "The most flexible grade in the grey range, for situations where the substrate moves, vibrates or stays submerged — tile-on-tile work, cladding, and water-retaining structures. The added flexibility absorbs movement that would crack a rigid bed.",
    features: [
      "Flexible film accommodates substrate movement and vibration",
      "Suitable for tile-on-tile work without removing the old surface",
      "Performs in permanently wet and submerged conditions",
      "High bond strength on difficult, low-absorption surfaces",
    ],
    applications: [
      "Tile-on-tile and cladding work",
      "Swimming pools and water-retaining structures",
      "Substrates subject to movement or vibration",
    ],
    substrates: [
      "Existing sound tiling",
      "Concrete",
      "Waterproofed structures",
      "Cement plaster",
    ],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-white-type-1",
    name: "Tile Adhesive — White Type 1",
    code: "",
    category: "white",
    range: "White",
    standard: "",
    summary:
      "White cement-based adhesive for interior tiling where joint colour matters.",
    description:
      "A white cement-based thin-bed adhesive for interior tiling finished with light-coloured tiles or pale grouts, where a grey bed would shadow through the joint or the tile itself. Produced on our dedicated white line to protect its colour.",
    features: [
      "White base keeps light grouts and pale tiles true in colour",
      "Made on a separate white-products line to avoid grey contamination",
      "Thin-bed application, mix with water only",
      "Smooth, easily trowelled consistency",
    ],
    applications: [
      "Interior walls and floors",
      "Light-coloured ceramic tiles",
      "Work finished with light grouts",
    ],
    substrates: ["Cement plaster", "Concrete", "Cement screed", "Masonry"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-white-type-2",
    name: "Tile Adhesive — White Type 2",
    code: "",
    category: "white",
    range: "White",
    standard: "",
    summary:
      "White adhesive with improved bond strength for vitrified tiles and wet areas.",
    description:
      "A polymer-modified white adhesive for low-absorption tiles — vitrified, porcelain and glazed — in interiors that stay damp. Combines the higher bond strength needed for non-porous tiles with a white base for clean joint lines.",
    features: [
      "Higher polymer content for glazed and vitrified surfaces",
      "White base for light grouts and translucent tiles",
      "Suited to continuously damp interior areas",
      "Good slip resistance on walls",
    ],
    applications: [
      "Vitrified tiles and glazed surfaces",
      "Bathrooms and kitchens",
      "Interior feature walls",
    ],
    substrates: ["Cement plaster", "Concrete", "Waterproofed beds", "Cement screed"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-white-type-3",
    name: "Tile Adhesive — White Type 3",
    code: "",
    category: "white",
    range: "White",
    standard: "",
    summary:
      "Heavy-duty white adhesive for large-format tiles, marble and light stone.",
    description:
      "A high-strength white adhesive for marble, granite, engineered stone and large-format tiles, where a grey bed can stain through a translucent or light-coloured slab. Built to carry the weight of big units without slip.",
    features: [
      "White base prevents shadowing through marble and light stone",
      "Carries large-format and heavy units without slip",
      "Higher bond strength for exterior cladding with light finishes",
      "Low-staining formulation for porous natural stone",
    ],
    applications: [
      "Marble, granite and engineered stone",
      "Large-format tiles",
      "Exterior cladding with light finishes",
    ],
    substrates: ["Concrete", "Cement plaster", "Cement screed", "Existing sound tiling"],
    technical: {},
    packing: {},
  },
  {
    slug: "tile-adhesive-white-type-4",
    name: "Tile Adhesive — White Type 4",
    code: "",
    category: "white",
    range: "White",
    standard: "",
    summary:
      "Premium flexible white adhesive for glass mosaic, translucent and specialist tiles.",
    description:
      "The top of the white range — a highly flexible white adhesive for glass mosaic, translucent tiles and pools, where both colour and movement matter. The white base keeps glass and translucent units looking as intended and the flexibility handles thermal and structural movement.",
    features: [
      "White base essential for glass mosaic and translucent tiles",
      "Highly flexible for high-movement and submerged conditions",
      "Suitable for swimming pools and water features",
      "Strong bond on non-absorbent specialist tiles",
    ],
    applications: [
      "Glass mosaic and translucent tiles",
      "Swimming pools and water features",
      "High-movement substrates",
    ],
    substrates: [
      "Waterproofed concrete",
      "Existing sound tiling",
      "Cement plaster",
      "Pool shells",
    ],
    technical: {},
    packing: {},
  },
  {
    slug: "block-jointing-mortar",
    name: "Block Jointing Mortar",
    code: "",
    category: "mortar",
    range: "Grey",
    standard: "",
    summary:
      "Thin-bed polymer-modified mortar for AAC, concrete and fly-ash blocks.",
    description:
      "A ready-mixed thin-bed mortar for laying AAC, CLC, concrete and fly-ash blocks. It replaces the 12–15 mm cement-sand joint with a 3–4 mm bed, so masonry goes up faster, uses far less material and produces a straighter wall that needs less plaster to correct.",
    features: [
      "3–4 mm joints in place of a 12–15 mm cement-sand bed",
      "Significantly less material per square metre of wall",
      "Faster block laying with less site wastage",
      "Straighter walls, reducing plaster thickness needed",
    ],
    applications: [
      "AAC and CLC block masonry",
      "Thin 3-4 mm joints",
      "Faster masonry with less material waste",
    ],
    substrates: ["AAC blocks", "CLC blocks", "Concrete blocks", "Fly-ash bricks"],
    technical: {},
    packing: {},
  },
  {
    slug: "ready-mix-plaster",
    name: "Ready Mix Plaster",
    code: "",
    category: "mortar",
    range: "Grey",
    standard: "",
    summary:
      "Factory-blended plaster of graded sand and cement — just add water on site.",
    description:
      "A factory-blended plaster of graded sand, cement and additives that only needs water on site. Because the mix is controlled in the plant rather than by a site mason, the strength and finish stay the same from wall to wall, and there is no sand stacking, screening or measuring to manage.",
    features: [
      "Consistent factory mix — no site batching or sand screening",
      "Graded silica sand from our own washing and drying unit",
      "Lower wastage and less rebound than site-mixed plaster",
      "Suitable for internal and external surfaces",
    ],
    applications: [
      "Internal and external plastering",
      "Block, brick and concrete surfaces",
      "Projects needing consistent, low-wastage plaster",
    ],
    substrates: ["Concrete", "Brick masonry", "AAC and concrete blocks", "RCC surfaces"],
    technical: {},
    packing: {},
  },
  {
    slug: "basic-wall-putty",
    name: "Basic Wall Putty",
    code: "",
    category: "white",
    range: "White",
    standard: "",
    summary:
      "White cement-based putty that levels walls and prepares them for paint.",
    description:
      "A white cement-based putty applied over plaster to fill minor undulations and pinholes and leave a smooth, uniform surface for painting. A properly puttied wall takes less paint and holds the finish longer than bare plaster.",
    features: [
      "Levels minor undulations and fills pinholes in plaster",
      "Reduces paint consumption by giving a uniform surface",
      "Good adhesion to cement plaster and concrete",
      "Suitable for interior and exterior walls",
    ],
    applications: [
      "Interior and exterior wall finishing",
      "Filling minor undulations before painting",
      "Improving paint coverage and life",
    ],
    substrates: ["Cement plaster", "Concrete", "RCC surfaces", "AAC block masonry"],
    technical: {},
    packing: {},
  },
  {
    slug: "micro-concrete",
    name: "Micro Concrete",
    code: "",
    category: "repair",
    range: "Grey",
    standard: "",
    summary:
      "Free-flowing, shrinkage-compensated concrete for structural repair and rehabilitation.",
    description:
      "A free-flowing, shrinkage-compensated repair concrete that is poured rather than vibrated into place. It reaches congested reinforcement and thin sections where conventional concrete cannot be compacted, which makes it the usual choice for repairing columns, beams and slabs.",
    features: [
      "Free-flowing — placed by pouring, no vibration needed",
      "Shrinkage compensated to stay bonded to the parent concrete",
      "Reaches congested reinforcement and thin sections",
      "Factory blended for consistent repair strength",
    ],
    applications: [
      "Repair of columns, beams and slabs",
      "Congested reinforcement and thin sections",
      "Pour-in repairs where vibration is impractical",
    ],
    substrates: ["Existing concrete", "RCC members", "Exposed reinforcement"],
    technical: {},
    packing: {},
  },
  {
    slug: "grouts",
    name: "Grouts",
    code: "",
    category: "repair",
    range: "Grey & White",
    standard: "",
    summary:
      "Cementitious grouts for tile joints and non-shrink structural grouting.",
    description:
      "Two families under one name: tile joint grouts that fill and seal the lines between tiles and stone, and non-shrink structural grouts for base plates, anchor bolts, machine foundations and voids in concrete. Tell us which application you have and we will point you to the right grade.",
    features: [
      "Tile joint grades in grey and white to match the finish",
      "Non-shrink structural grades for load-bearing gaps",
      "Free-flowing consistency fills voids completely",
      "Factory blended for predictable strength",
    ],
    applications: [
      "Tile and stone joint filling",
      "Base plates, anchors and machine foundations",
      "Filling voids and gaps in concrete",
    ],
    substrates: ["Tile and stone joints", "Concrete", "Steel base plates", "Anchor pockets"],
    technical: {},
    packing: {},
  },
  {
    slug: "liquid-construction-chemicals",
    name: "Liquid Construction Chemicals",
    code: "",
    category: "liquid",
    range: "Liquid",
    standard: "",
    summary:
      "In-house liquid range produced at 1,000 litres per day to support the powder products.",
    description:
      "Our liquid line at Karad produces 1,000 litres a day of waterproofing coatings, bonding agents, curing compounds and concrete admixtures. Because the line is ours, we also run site-specific formulations on request rather than only stock grades.",
    features: [
      "1,000 litres per day in-house capacity at Karad",
      "Waterproofing coatings, bonding agents and curing compounds",
      "Concrete admixtures to suit the mix design",
      "Site-specific formulations made to order",
    ],
    applications: [
      "Waterproofing and bonding agents",
      "Curing compounds and admixtures",
      "Site-specific formulations on request",
    ],
    substrates: ["Concrete", "Cement plaster", "Masonry", "Fresh concrete mixes"],
    technical: {},
    packing: {},
  },
];

export const productNames = products.map((p) => p.name);

export const getProduct = (slug) => products.find((p) => p.slug === slug);

/** Human labels for the optional `technical` keys, in display order. */
export const technicalLabels = {
  appearance: "Appearance",
  composition: "Composition",
  standard: "Conforms to",
  coverage: "Coverage",
  mixingRatio: "Mixing ratio",
  potLife: "Pot life",
  openTime: "Open time",
  adjustability: "Adjustability time",
  bondStrength: "Bond strength",
  compressiveStrength: "Compressive strength",
  application: "Application thickness",
  dryingTime: "Drying time",
};

export const hasTechnical = (product) =>
  Boolean(product.standard) || Object.keys(product.technical ?? {}).length > 0;

export const hasPacking = (product) =>
  Boolean(product.packing?.sizes?.length || product.packing?.shelfLife);
