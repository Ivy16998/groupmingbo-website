/**
 * SilicOne - Product Data
 * 20 B2B SKUs structured for catalog display
 */
const products = [
  // --- Category: Nose Pads ---
  {
    id: "NP-001",
    category: "nose",
    name: "Adhesive Silicone Heightening Nose Pads",
    nameCN: "自粘式硅胶增高鼻托",
    image: "images/products/np001.jpg",
    specs: {
      material: "Food-grade silicone (FDA)",
      size: "11×7mm, 3 heights (1.5/2.5/3.5mm)",
      color: "Transparent, Black, Beige",
      packaging: "OPP bag + card, 10/20/50 pairs per pack"
    },
    pricing: [
      { qty: "100-500", price: "$0.12/pair" },
      { qty: "500-2000", price: "$0.08/pair" },
      { qty: "2000-10000", price: "$0.05/pair" },
      { qty: "10000+", price: "$0.03/pair" }
    ],
    moq: 100,
    leadtime: "3-7 days (stock) / 10-15 days (custom)",
    certifications: "FDA, REACH, LFGB",
    customOptions: "Color, hardness (30-70 Shore A), logo printing, retail packaging",
    targetBuyers: "Optical chains, Amazon sellers, eyewear brands",
    description: "Premium adhesive silicone nose pads designed for Asian fit and low-bridge nose types. Self-adhesive backing for easy application. Available in 3 thicknesses for customized comfort.",
    tags: ["bestseller", "high-margin"]
  },
  {
    id: "NP-002",
    category: "nose",
    name: "Screw-Type Silicone Nose Pads (Oval)",
    nameCN: "螺丝固定式硅胶鼻托（椭圆型）",
    image: "images/products/np002.jpg",
    specs: {
      material: "Silicone with stainless steel core",
      size: "13×7mm oval, 10×6mm teardrop",
      color: "Clear, Black, Brown"
    },
    pricing: [
      { qty: "100-500", price: "$0.15/pair" },
      { qty: "500-2000", price: "$0.10/pair" },
      { qty: "2000-10000", price: "$0.07/pair" }
    ],
    moq: 100,
    leadtime: "3-7 days",
    certifications: "FDA, RoHS",
    customOptions: "Size, shape, material hardness, screw type",
    targetBuyers: "Optical repair shops, frame manufacturers",
    description: "Professional-grade screw-mounted nose pads with reinforced metal core. Compatible with most metal and acetate frames.",
    tags: []
  },
  {
    id: "NP-003",
    category: "nose",
    name: "Air Chamber Silicone Nose Pads (Push-In)",
    nameCN: "空气室硅胶鼻托（卡式）",
    image: "images/products/np003.jpg",
    specs: {
      material: "Medical-grade silicone (ISO 10993)",
      size: "13×7mm with air cushion",
      color: "Clear, Smoke Gray"
    },
    pricing: [
      { qty: "100-500", price: "$0.18/pair" },
      { qty: "500-2000", price: "$0.12/pair" },
      { qty: "2000-10000", price: "$0.08/pair" }
    ],
    moq: 100,
    leadtime: "5-10 days",
    certifications: "FDA, ISO 10993, REACH",
    customOptions: "Cushion firmness, color, size variants",
    targetBuyers: "Medical optical suppliers, premium eyewear brands",
    description: "Air chamber design provides superior shock absorption and all-day comfort. Medical-grade silicone for sensitive skin.",
    tags: ["premium"]
  },
  {
    id: "NP-004",
    category: "nose",
    name: "U-Shape Integrated Silicone Nose Pad for Kids",
    nameCN: "U型一体式儿童眼镜硅胶鼻托",
    image: "images/products/np004.jpg",
    specs: {
      material: "Food-grade silicone, BPA-free",
      size: "Universal fit for kids frames (40-48mm)",
      color: "Transparent, Pink, Blue, Green"
    },
    pricing: [
      { qty: "100-500", price: "$0.60/pc" },
      { qty: "500-2000", price: "$0.45/pc" },
      { qty: "2000-10000", price: "$0.35/pc" }
    ],
    moq: 100,
    leadtime: "7-12 days",
    certifications: "FDA, LFGB, BPA-free",
    customOptions: "Color, animal shapes, cartoon designs",
    targetBuyers: "Children's eyewear brands, mom & baby retailers",
    description: "One-piece U-shape bridge pad designed specifically for children's frames. Soft, safe, and comfortable for extended wear.",
    tags: ["kids", "high-margin"]
  },

  // --- Category: Ear Hooks ---
  {
    id: "EH-001",
    category: "ear",
    name: "Round Anti-Slip Silicone Ear Hooks",
    nameCN: "圆形硅胶防滑耳钩",
    image: "images/products/eh001.jpg",
    specs: {
      material: "Food-grade silicone",
      size: "Φ6mm inner hole, fits 3-10mm temple arms",
      color: "Clear, Black, Mixed colors"
    },
    pricing: [
      { qty: "100-500", price: "$0.10/pair" },
      { qty: "500-2000", price: "$0.06/pair" },
      { qty: "2000-10000", price: "$0.04/pair" },
      { qty: "10000+", price: "$0.03/pair" }
    ],
    moq: 100,
    leadtime: "3-7 days (stock)",
    certifications: "FDA, REACH",
    customOptions: "Color, durometer (30-60 Shore A), logo embossing",
    targetBuyers: "Amazon sellers, optical distributors, sports brands",
    description: "Best-selling universal ear hooks. Simple slip-on design, fits virtually all glasses temple arms. Top seller with 35%+ repurchase rate.",
    tags: ["bestseller", "high-margin"]
  },
  {
    id: "EH-002",
    category: "ear",
    name: "Ergonomic Curved Silicone Ear Grips",
    nameCN: "人体工学弧形硅胶耳托",
    image: "images/products/eh002.jpg",
    specs: {
      material: "Soft silicone (40 Shore A)",
      size: "42×11×2.5mm, curved ergonomic",
      color: "Clear, Black, Gray"
    },
    pricing: [
      { qty: "100-500", price: "$0.15/pair" },
      { qty: "500-2000", price: "$0.10/pair" },
      { qty: "2000-10000", price: "$0.07/pair" }
    ],
    moq: 100,
    leadtime: "5-10 days",
    certifications: "FDA, LFGB",
    customOptions: "3 sizes (S/M/L), color, logo laser engraving",
    targetBuyers: "Premium eyewear brands, sports optics",
    description: "Anatomically curved design hugs the ear for superior grip during active use. Ideal for sports and safety glasses.",
    tags: ["premium"]
  },
  {
    id: "EH-003",
    category: "ear",
    name: "Heart-Shape Silicone Anti-Slip Ear Grips",
    nameCN: "心形硅胶防滑耳托",
    image: "images/products/eh003.jpg",
    specs: {
      material: "Premium silicone",
      size: "15×13mm heart shape",
      color: "Clear, Pink, Red, Mixed"
    },
    pricing: [
      { qty: "100-500", price: "$0.40/pair" },
      { qty: "500-2000", price: "$0.30/pair" },
      { qty: "2000-10000", price: "$0.22/pair" }
    ],
    moq: 100,
    leadtime: "7-10 days",
    certifications: "FDA",
    customOptions: "Custom shapes (star, flower, brand icon), colors",
    targetBuyers: "Fashion eyewear brands, gift/promotional buyers",
    description: "Stylish heart-shaped ear grips that combine fashion with function. Popular for women's and fashion eyewear lines.",
    tags: ["fashion"]
  },

  // --- Category: Temple Tips ---
  {
    id: "TT-001",
    category: "temple",
    name: "Tubular Silicone Temple Tip Sleeves",
    nameCN: "管状硅胶腿套",
    image: "images/products/tt001.jpg",
    specs: {
      material: "Soft silicone (35-45 Shore A)",
      size: "35mm length, fits 2.5-4mm temple cores",
      color: "Clear, Black, Brown, Gray"
    },
    pricing: [
      { qty: "100-500", price: "$0.12/pair" },
      { qty: "500-2000", price: "$0.08/pair" },
      { qty: "2000-10000", price: "$0.05/pair" }
    ],
    moq: 100,
    leadtime: "3-7 days",
    certifications: "FDA, REACH",
    customOptions: "Length, inner diameter, color, anti-slip texture",
    targetBuyers: "Frame manufacturers, optical chains",
    description: "Replacement temple tip sleeves with anti-slip ribbed interior. Fits metal and thin acetate temple cores.",
    tags: ["bestseller"]
  },
  {
    id: "TT-002",
    category: "temple",
    name: "Extended Anti-Slip Silicone Temple Covers",
    nameCN: "加长型硅胶防滑腿套",
    image: "images/products/tt002.jpg",
    specs: {
      material: "High-friction silicone",
      size: "55mm length, universal fit",
      color: "Clear, Black, Blue, Red"
    },
    pricing: [
      { qty: "100-500", price: "$0.18/pair" },
      { qty: "500-2000", price: "$0.12/pair" },
      { qty: "2000+", price: "$0.08/pair" }
    ],
    moq: 100,
    leadtime: "5-10 days",
    certifications: "FDA",
    customOptions: "Color, length, surface grip pattern",
    targetBuyers: "Safety glasses manufacturers, sports brands",
    description: "Extended coverage temple sleeves for maximum grip. Designed for safety glasses and active sports eyewear.",
    tags: ["sports"]
  },

  // --- Category: Straps & Cords ---
  {
    id: "ST-001",
    category: "strap",
    name: "Adjustable Silicone Eyeglass Strap",
    nameCN: "可调节硅胶眼镜绳",
    image: "images/products/st001.jpg",
    specs: {
      material: "Silicone cord + plastic adjuster",
      size: "Φ3mm × 650mm adjustable",
      color: "Black, Gray, Blue, Red, Custom"
    },
    pricing: [
      { qty: "100-500", price: "$0.35/pc" },
      { qty: "500-2000", price: "$0.22/pc" },
      { qty: "2000-10000", price: "$0.15/pc" }
    ],
    moq: 100,
    leadtime: "5-10 days",
    certifications: "FDA, REACH",
    customOptions: "Color, length, logo printing on adjuster, packaging",
    targetBuyers: "Outdoor brands, promotional product buyers, sports retailers",
    description: "Lightweight, adjustable silicone eyeglass strap. Perfect for outdoor activities, sports, and daily use. High repurchase rate for promotional orders.",
    tags: ["bestseller", "high-margin"]
  },
  {
    id: "ST-002",
    category: "strap",
    name: "Silicone + Metal Beaded Eyeglass Chain",
    nameCN: "硅胶金属珠眼镜链",
    image: "images/products/st002.jpg",
    specs: {
      material: "Silicone cord + zinc alloy beads",
      size: "700mm total length",
      color: "Gold, Silver, Rose Gold beads"
    },
    pricing: [
      { qty: "50-200", price: "$1.80/pc" },
      { qty: "200-1000", price: "$1.20/pc" },
      { qty: "1000+", price: "$0.85/pc" }
    ],
    moq: 50,
    leadtime: "10-15 days",
    certifications: "RoHS, REACH",
    customOptions: "Bead design, metal finish, cord color, brand charm",
    targetBuyers: "Fashion accessory brands, boutique optical shops",
    description: "Fashion-forward eyeglass chain combining silicone comfort with metallic elegance. High perceived value for retail markups.",
    tags: ["fashion", "premium"]
  },
  {
    id: "ST-003",
    category: "strap",
    name: "Neoprene + Silicone Sports Eyeglass Strap",
    nameCN: "潜水料+硅胶运动眼镜绑带",
    image: "images/products/st003.jpg",
    specs: {
      material: "Neoprene strap + silicone grips",
      size: "Adjustable 300-500mm",
      color: "Black, Navy, Camo, Custom print"
    },
    pricing: [
      { qty: "100-500", price: "$0.65/pc" },
      { qty: "500-2000", price: "$0.45/pc" },
      { qty: "2000+", price: "$0.30/pc" }
    ],
    moq: 100,
    leadtime: "10-15 days",
    certifications: "REACH",
    customOptions: "Width, print design, silicone grip color, logo",
    targetBuyers: "Water sports brands, outdoor gear companies",
    description: "Heavy-duty neoprene strap with silicone end grips. Floats in water. Ideal for surfing, kayaking, and extreme sports.",
    tags: ["sports", "premium"]
  },

  // --- Category: Smart Glasses Accessories ---
  {
    id: "SG-001",
    category: "smart",
    name: "Meta Ray-Ban Wayfarer Silicone Nose Pads (10 Pairs)",
    nameCN: "Meta Ray-Ban Wayfarer 硅胶鼻托（10对装）",
    image: "images/products/sg001.jpg",
    specs: {
      material: "Soft silicone (35 Shore A)",
      compat: "Meta Ray-Ban Wayfarer Gen 1 & Gen 2",
      size: "Custom-fit, self-adhesive",
      color: "Black, Clear"
    },
    pricing: [
      { qty: "50-200", price: "$0.35/pair" },
      { qty: "200-1000", price: "$0.22/pair" },
      { qty: "1000-5000", price: "$0.15/pair" },
      { qty: "5000+", price: "$0.10/pair" }
    ],
    moq: 50,
    leadtime: "5-10 days",
    certifications: "FDA",
    customOptions: "Packaging (10/20 pack retail box), branding",
    targetBuyers: "Smart glasses accessory brands, Amazon sellers",
    description: "Precision-cut replacement nose pads for Meta Ray-Ban Wayfarer smart glasses. Self-adhesive, exact fit. Best-selling smart glasses accessory with 300% YoY growth.",
    tags: ["bestseller", "high-margin", "trending"]
  },
  {
    id: "SG-002",
    category: "smart",
    name: "Meta Ray-Ban Headliner Silicone Nose Pads (10 Pairs)",
    nameCN: "Meta Ray-Ban Headliner 硅胶鼻托（10对装）",
    image: "images/products/sg002.jpg",
    specs: {
      material: "Soft silicone (35 Shore A)",
      compat: "Meta Ray-Ban Headliner Gen 1 & Gen 2",
      size: "Custom-fit, self-adhesive",
      color: "Black, Clear"
    },
    pricing: [
      { qty: "50-200", price: "$0.35/pair" },
      { qty: "200-1000", price: "$0.22/pair" },
      { qty: "1000-5000", price: "$0.15/pair" }
    ],
    moq: 50,
    leadtime: "5-10 days",
    certifications: "FDA",
    customOptions: "Packaging, branding",
    targetBuyers: "Smart glasses accessory brands",
    description: "Precision-cut nose pads for Meta Ray-Ban Headliner model. Same premium quality as Wayfarer version.",
    tags: ["high-margin", "trending"]
  },
  {
    id: "SG-003",
    category: "smart",
    name: "Meta Ray-Ban Anti-Slip Silicone Ear Hooks",
    nameCN: "Meta Ray-Ban 防滑硅胶耳钩",
    image: "images/products/sg003.jpg",
    specs: {
      material: "Ergonomic silicone (40 Shore A)",
      compat: "Meta Ray-Ban Wayfarer & Headliner Gen 1/2",
      size: "Curved hook, slip-on design",
      color: "Black, Clear"
    },
    pricing: [
      { qty: "50-200", price: "$0.55/pair" },
      { qty: "200-1000", price: "$0.38/pair" },
      { qty: "1000-5000", price: "$0.25/pair" }
    ],
    moq: 50,
    leadtime: "7-12 days",
    certifications: "FDA",
    customOptions: "Color, packaging",
    targetBuyers: "Smart glasses accessory brands, 3C accessory sellers",
    description: "Ergonomic ear hooks designed specifically for Meta Ray-Ban smart glasses. Curved shape locks glasses in place without interfering with touch controls or speakers.",
    tags: ["high-margin", "trending"]
  },
  {
    id: "SG-004",
    category: "smart",
    name: "Universal AR Glasses Silicone Nose Pad Kit",
    nameCN: "通用AR眼镜硅胶鼻托套装（3种高度）",
    image: "images/products/sg004.jpg",
    specs: {
      material: "Soft silicone",
      compat: "XREAL Air, Rokid, Nreal, Viture, and more",
      size: "3 heights (S/M/L) included",
      color: "Black"
    },
    pricing: [
      { qty: "50-300", price: "$0.60/set" },
      { qty: "300-1000", price: "$0.42/set" },
      { qty: "1000+", price: "$0.30/set" }
    ],
    moq: 50,
    leadtime: "7-12 days",
    certifications: "FDA",
    customOptions: "Brand-specific kits, retail packaging",
    targetBuyers: "AR glasses accessory brands, tech accessory sellers",
    description: "Universal 3-height nose pad kit compatible with major AR glasses brands. Allows users to find their perfect fit and viewing angle.",
    tags: ["trending"]
  },

  // --- Category: Kits & Sets ---
  {
    id: "KT-001",
    category: "kit",
    name: "Eyeglass Care Kit (Nose Pads + Ear Hooks + Cloth + Screwdriver)",
    nameCN: "眼镜护理套装（鼻托+耳钩+清洁布+螺丝刀）",
    image: "images/products/kt001.jpg",
    specs: {
      contents: "5 pairs nose pads + 5 pairs ear hooks + microfiber cloth + mini screwdriver",
      packaging: "Custom box or tin case",
      material: "All silicone parts food-grade"
    },
    pricing: [
      { qty: "200-500", price: "$1.20/set" },
      { qty: "500-2000", price: "$0.85/set" },
      { qty: "2000-10000", price: "$0.60/set" }
    ],
    moq: 200,
    leadtime: "10-15 days",
    certifications: "FDA, LFGB",
    customOptions: "Box design, logo, color scheme, contents mix",
    targetBuyers: "Optical chains, eyewear brands for retail or gift-with-purchase",
    description: "Complete eyeglass care kit in branded packaging. High perceived value for retail or promotional use. Average order: 5,000-20,000 units.",
    tags: ["premium", "high-margin"]
  },
  {
    id: "KT-002",
    category: "kit",
    name: "Children's Eyewear Anti-Slip Bundle",
    nameCN: "儿童眼镜防滑套装",
    image: "images/products/kt002.jpg",
    specs: {
      contents: "U-shape nose pad + 2 pairs ear hooks + adjustable strap",
      packaging: "Colorful hang-sell card",
      material: "BPA-free silicone, food-grade"
    },
    pricing: [
      { qty: "100-500", price: "$0.55/set" },
      { qty: "500-2000", price: "$0.38/set" },
      { qty: "2000+", price: "$0.28/set" }
    ],
    moq: 100,
    leadtime: "7-12 days",
    certifications: "FDA, LFGB, BPA-free",
    customOptions: "Character designs, colors, packaging theme",
    targetBuyers: "Children's eyewear brands, parent-focused retailers",
    description: "All-in-one anti-slip solution for kids' glasses. Fun, safe, and parent-approved. 42%+ repurchase rate.",
    tags: ["kids", "high-margin"]
  },
  {
    id: "KT-003",
    category: "kit",
    name: "Professional Optical Repair Kit",
    nameCN: "专业眼镜维修配件包",
    image: "images/products/kt003.jpg",
    specs: {
      contents: "20 pairs assorted nose pads + 10 pairs ear hooks + screwdriver + screws set",
      packaging: "Plastic organizer box",
      material: "Silicone + metal"
    },
    pricing: [
      { qty: "100-500", price: "$1.80/set" },
      { qty: "500-2000", price: "$1.25/set" },
      { qty: "2000+", price: "$0.90/set" }
    ],
    moq: 100,
    leadtime: "10-15 days",
    certifications: "FDA, RoHS",
    customOptions: "Box branding, assortment mix",
    targetBuyers: "Optical repair shops, optometrist practices",
    description: "Comprehensive repair kit for optical professionals. Includes the most common replacement parts in one organized case.",
    tags: ["professional"]
  }
];

// Product categories for filtering
const categories = [
  { id: "all", icon: "⊞" },
  { id: "nose", icon: "◉" },
  { id: "ear", icon: "↻" },
  { id: "temple", icon: "▬" },
  { id: "strap", icon: "～" },
  { id: "smart", icon: "◆" },
  { id: "kit", icon: "⊡" }
];

// Case studies data
const caseStudies = [
  {
    id: "CS-001",
    titleKey: "case1_title",
    descKey: "case1_desc",
    industry: "Optical Retail Chain",
    location: "United States",
    orderSize: "50,000 pairs/month",
    results: "35% cost reduction, 98% quality acceptance rate"
  },
  {
    id: "CS-002",
    titleKey: "case2_title",
    descKey: "case2_desc",
    industry: "DTC Eyewear Brand",
    location: "Germany",
    orderSize: "30,000 units initial, 15,000/month recurring",
    results: "60% margin on accessory kits, 4.8★ customer rating"
  },
  {
    id: "CS-003",
    titleKey: "case3_title",
    descKey: "case3_desc",
    industry: "Smart Glasses Accessories",
    location: "United States / Global",
    orderSize: "20,000+ units/month across 5 SKUs",
    results: "10-day time-to-market, #1 Amazon BSR in category"
  }
];

// Supplier comparison data
const suppliers = [
  {
    name: "Xiamen Xinhuabao Silicone",
    years: 21,
    location: "Xiamen, Fujian",
    moq: "500 (stock) / 1000 (custom)",
    sampleDays: "5-7 days",
    deliveryDays: "10-15 days",
    certs: "ISO 9001",
    rating: 5
  },
  {
    name: "Quanzhou Shengda Rubber",
    years: 12,
    location: "Quanzhou, Fujian",
    moq: "100 (stock) / 500 (custom)",
    sampleDays: "3-5 days",
    deliveryDays: "7-12 days",
    certs: "ISO 9001",
    rating: 4
  },
  {
    name: "Dongguan Yongcheng New Material",
    years: 10,
    location: "Dongguan, Guangdong",
    moq: "200 (stock) / 1000 (custom)",
    sampleDays: "7-10 days",
    deliveryDays: "10-15 days",
    certs: "FDA, LFGB, REACH",
    rating: 5
  }
];
