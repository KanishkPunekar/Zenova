// The 14-product portfolio from page 8 of the company profile.
// Application notes are indicative — always issue the current technical
// data sheet with a quotation.

export const categories = [
  { id: "all", label: "All Products" },
  { id: "grey", label: "Grey Range" },
  { id: "white", label: "White Range" },
  { id: "mortar", label: "Mortars & Plaster" },
  { id: "repair", label: "Repair & Grouts" },
  { id: "liquid", label: "Liquid Chemicals" },
];

export const products = [
  {
    slug: "tile-adhesive-grey-type-1",
    name: "Tile Adhesive — Grey Type 1",
    category: "grey",
    range: "Grey",
    summary:
      "Cement-based adhesive for fixing ceramic tiles on interior floors and walls.",
    applications: [
      "Interior floors and walls",
      "Ceramic and mosaic tiles",
      "Tile-on-concrete substrates",
    ],
  },
  {
    slug: "tile-adhesive-grey-type-2",
    name: "Tile Adhesive — Grey Type 2",
    category: "grey",
    range: "Grey",
    summary:
      "Higher-strength grey adhesive for vitrified tiles and moisture-exposed interiors.",
    applications: [
      "Vitrified and porcelain tiles",
      "Bathrooms, kitchens and wet areas",
      "Interior walls and floors",
    ],
  },
  {
    slug: "tile-adhesive-grey-type-3",
    name: "Tile Adhesive — Grey Type 3",
    category: "grey",
    range: "Grey",
    summary:
      "Heavy-duty adhesive for large-format tiles and exterior applications.",
    applications: [
      "Large-format and heavy tiles",
      "Exterior facades and walkways",
      "Natural stone on cement substrates",
    ],
  },
  {
    slug: "tile-adhesive-grey-type-4",
    name: "Tile Adhesive — Grey Type 4",
    category: "grey",
    range: "Grey",
    summary:
      "High-performance flexible adhesive for demanding and deflection-prone substrates.",
    applications: [
      "Tile-on-tile and cladding work",
      "Swimming pools and water-retaining structures",
      "Substrates subject to movement or vibration",
    ],
  },
  {
    slug: "tile-adhesive-white-type-1",
    name: "Tile Adhesive — White Type 1",
    category: "white",
    range: "White",
    summary:
      "White cement-based adhesive for interior tiling where joint colour matters.",
    applications: [
      "Interior walls and floors",
      "Light-coloured ceramic tiles",
      "Work finished with light grouts",
    ],
  },
  {
    slug: "tile-adhesive-white-type-2",
    name: "Tile Adhesive — White Type 2",
    category: "white",
    range: "White",
    summary:
      "White adhesive with improved bond strength for vitrified tiles and wet areas.",
    applications: [
      "Vitrified tiles and glazed surfaces",
      "Bathrooms and kitchens",
      "Interior feature walls",
    ],
  },
  {
    slug: "tile-adhesive-white-type-3",
    name: "Tile Adhesive — White Type 3",
    category: "white",
    range: "White",
    summary:
      "Heavy-duty white adhesive for large-format tiles, marble and light stone.",
    applications: [
      "Marble, granite and engineered stone",
      "Large-format tiles",
      "Exterior cladding with light finishes",
    ],
  },
  {
    slug: "tile-adhesive-white-type-4",
    name: "Tile Adhesive — White Type 4",
    category: "white",
    range: "White",
    summary:
      "Premium flexible white adhesive for glass mosaic, translucent and specialist tiles.",
    applications: [
      "Glass mosaic and translucent tiles",
      "Swimming pools and water features",
      "High-movement substrates",
    ],
  },
  {
    slug: "block-jointing-mortar",
    name: "Block Jointing Mortar",
    category: "mortar",
    range: "Grey",
    summary:
      "Thin-bed polymer-modified mortar for AAC, concrete and fly-ash blocks.",
    applications: [
      "AAC and CLC block masonry",
      "Thin 3-4 mm joints",
      "Faster masonry with less material waste",
    ],
  },
  {
    slug: "ready-mix-plaster",
    name: "Ready Mix Plaster",
    category: "mortar",
    range: "Grey",
    summary:
      "Factory-blended plaster of graded sand and cement — just add water on site.",
    applications: [
      "Internal and external plastering",
      "Block, brick and concrete surfaces",
      "Projects needing consistent, low-wastage plaster",
    ],
  },
  {
    slug: "basic-wall-putty",
    name: "Basic Wall Putty",
    category: "white",
    range: "White",
    summary:
      "White cement-based putty that levels walls and prepares them for paint.",
    applications: [
      "Interior and exterior wall finishing",
      "Filling minor undulations before painting",
      "Improving paint coverage and life",
    ],
  },
  {
    slug: "micro-concrete",
    name: "Micro Concrete",
    category: "repair",
    range: "Grey",
    summary:
      "Free-flowing, shrinkage-compensated concrete for structural repair and rehabilitation.",
    applications: [
      "Repair of columns, beams and slabs",
      "Congested reinforcement and thin sections",
      "Pour-in repairs where vibration is impractical",
    ],
  },
  {
    slug: "grouts",
    name: "Grouts",
    category: "repair",
    range: "Grey & White",
    summary:
      "Cementitious grouts for tile joints and non-shrink structural grouting.",
    applications: [
      "Tile and stone joint filling",
      "Base plates, anchors and machine foundations",
      "Filling voids and gaps in concrete",
    ],
  },
  {
    slug: "liquid-construction-chemicals",
    name: "Liquid Construction Chemicals",
    category: "liquid",
    range: "Liquid",
    summary:
      "In-house liquid range produced at 1,000 litres per day to support the powder products.",
    applications: [
      "Waterproofing and bonding agents",
      "Curing compounds and admixtures",
      "Site-specific formulations on request",
    ],
  },
];

export const productNames = products.map((p) => p.name);
