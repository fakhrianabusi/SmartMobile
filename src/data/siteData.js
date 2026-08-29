// ============================================================
// Central site data — edit this file to update content easily.
// ============================================================

// Google Form — all "Order Now" / "Request a Price" / "Claim Offer" buttons
// open this link in a new browser tab.
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSddDJOCUjQJ3Pw3ZyZcswJ-aR-y6orNnSJ-sZN9rsnqXMUNwA/viewform?usp=header";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Offers", href: "#offers" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Smart Mobile Apex Pro",
    tagline: "Flagship 5G powerhouse",
    description:
      "6.8\" AMOLED 120Hz display, triple 108MP camera system, and all-day 5000mAh battery with 65W fast charging.",
    price: "$999",
    oldPrice: "$1,099",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Mobile Nova X",
    tagline: "Photography redefined",
    description:
      "Periscope zoom lens, AI night mode, and cinema-grade 4K video recording in a sleek glass body.",
    price: "$799",
    oldPrice: null,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Smart Mobile Pulse Lite",
    tagline: "Style on a budget",
    description:
      "Slim design, vibrant 6.4\" display, and a 48MP camera — flagship feel without the flagship price.",
    price: "$349",
    oldPrice: "$399",
    badge: "Best Value",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Smart Mobile Titan Ultra",
    tagline: "Built for the extreme",
    description:
      "Rugged IP68 body, 6000mAh battery, and military-grade durability for adventurers and field pros.",
    price: "$649",
    oldPrice: null,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Smart Mobile Aura Fold",
    tagline: "The future unfolds",
    description:
      "Foldable 7.6\" inner display with Flex Mode multitasking — a tablet and a phone in your pocket.",
    price: "$1,499",
    oldPrice: "$1,699",
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Smart Mobile Buds Sync",
    tagline: "Hear every detail",
    description:
      "Active noise cancellation, 36-hour total battery life, and spatial audio that adapts to your ears.",
    price: "$129",
    oldPrice: "$159",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
  },
];

export const OFFERS = [
  {
    id: 1,
    title: "Trade-In Bonus",
    discount: "Up to $300 off",
    description:
      "Trade in your old phone — any brand, any condition — and get up to $300 off any Smart Mobile Apex Pro or Aura Fold.",
    code: "TRADE300",
    accent: "from-brand-600 to-brand-800",
  },
  {
    id: 2,
    title: "Family Bundle",
    discount: "Save 25%",
    description:
      "Buy any 2 Smart Mobile phones together and get 25% off the second device, plus free premium cases for both.",
    code: "FAMILY25",
    accent: "from-emerald-600 to-teal-800",
  },
  {
    id: 3,
    title: "Starter Pack",
    discount: "Free Buds",
    description:
      "Every Pulse Lite purchase comes with a free pair of Smart Mobile Buds Sync — no extra code needed this month.",
    code: "AUTO",
    accent: "from-orange-500 to-rose-700",
  },
  {
    id: 4,
    title: "Student Discount",
    discount: "15% off",
    description:
      "Students and educators get 15% off all devices all year long. Verify your status and unlock instant savings.",
    code: "CAMPUS15",
    accent: "from-violet-600 to-indigo-800",
  },
];

export const CONTACT_INFO = {
  email: "support@smartmobile.example.com",
  phone: "+1 (555) 012-3456",
  address: "123 Tech Avenue, Suite 400, Innovation City, ST 10001",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
};
