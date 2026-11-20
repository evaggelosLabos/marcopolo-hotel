export type RoomDetail = {
  id: "double" | "triple" | "courtyard";
  number: string;
  badge: string;
  title: string;
  reserveLabel: string;
  image: string;
  shortDesc: string;
  summary: string;
  specs: [string, string][];
  amenities: string[];
};

export type WhyChapter = {
  num: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  progress: number;
};

export type ExperienceItem = {
  num: string;
  pace: string;
  title: string;
  description: string;
  image: string;
  credit?: { author: string; source: string; license: string; licenseUrl: string };
};

export type GalleryPhoto = {
  src: string;
  title: string;
};

export type ReviewItem = {
  quote: string;
  author: string;
  origin: string;
  initials: string;
};

export const CONTACT_INFO = {
  address: "Gouvia, Corfu 49100, Greece",
  phone: "+30 693 904 1035",
  phoneHref: "tel:+306939041035",
  email: "office@marcopolocorfu.com",
  emailHref: "mailto:office@marcopolocorfu.com",
  coordinates: "39.6506° N, 19.8443° E",
  mapEmbedUrl:
    "https://www.google.com/maps?q=39.6505938,19.8442759&z=16&output=embed",
};

const FULL_ROOM_AMENITIES = [
  "Balcony",
  "Air Conditioning",
  "Patio",
  "Private Bathroom",
  "Flat-screen TV",
  "Minibar",
  "Free WiFi",
  "Free Toiletries",
  "Safety Deposit Box",
  "Toilet",
  "Bath or Shower",
  "Wooden / Parquet Floor",
  "Towels",
  "Linens",
  "Cleaning Products",
  "Hypoallergenic",
  "Desk",
  "Outdoor Furniture",
  "Wardrobe",
  "Upper Floors Accessible by Elevator",
  "Clothes Rack",
  "Fold-up Bed",
  "Toilet Paper",
];

export const ROOMS: RoomDetail[] = [
  {
    id: "double",
    number: "01 / 03",
    badge: "01 / 03 • Up to 2 Guests",
    title: "Double Room",
    reserveLabel: "Double Room",
    image: "/hotel/photo_024.jpg",
    shortDesc:
      "Bright 17 m² twin room with two separate single beds, private balcony, air conditioning, and calming garden, pool, or Gouvia views.",
    summary:
      "A practical and welcoming room with two separate single beds, designed for guests who value brightness, simplicity, and a quiet 17 m² retreat.",
    specs: [
      ["Square footage", "17 m²"],
      ["Capacity", "Up to 2 guests"],
      ["Bed setup", "2 Single Beds"],
      ["Balcony / Patio", "Available"],
      ["Air Conditioning", "Available"],
      ["Free WiFi", "Available"],
      ["Views", "Garden, Pool & City"],
    ],
    amenities: FULL_ROOM_AMENITIES,
  },
  {
    id: "triple",
    number: "02 / 03",
    badge: "02 / 03 • Up to 3 Guests",
    title: "Triple Room",
    reserveLabel: "Triple Room",
    image: "/hotel/photo_022.jpg",
    shortDesc:
      "Designed for small groups or families with two single beds and one bunk bed in a practical 17 m² layout with private balcony.",
    summary:
      "Smartly arranged for small groups or families with two single beds and one bunk bed in a bright 17 m² layout with private balcony.",
    specs: [
      ["Square footage", "17 m²"],
      ["Capacity", "Up to 3 guests"],
      ["Bed setup", "2 Single Beds + 1 Bunk Bed"],
      ["Balcony / Patio", "Available"],
      ["Air Conditioning", "Available"],
      ["Free WiFi", "Available"],
      ["Views", "Garden, Pool & City"],
    ],
    amenities: FULL_ROOM_AMENITIES,
  },
  {
    id: "courtyard",
    number: "03 / 03",
    badge: "03 / 03 • Shared Retreat",
    title: "Pool Courtyard",
    reserveLabel: "Double Room",
    image: "/hotel/photo_079.jpg",
    shortDesc:
      "Every stay includes our outdoor swimming pool, shaded garden lounge, open-air breakfast terrace, and warm illuminated evening patio.",
    summary:
      "Open to every guest at Marcopolo Hotel — featuring our crystal-clear outdoor pool, sun loungers, shaded garden seating, and breakfast dining hall.",
    specs: [
      ["Outdoor Pool", "Open Daily"],
      ["Sun Loungers & Parasols", "Complimentary"],
      ["Breakfast & Restaurant", "On-Site"],
      ["Garden Patio", "Day & Evening"],
      ["Distance to Beach", "5 min walk"],
      ["Free WiFi", "All Common Areas"],
    ],
    amenities: [
      "Outdoor Swimming Pool",
      "Poolside Sunbeds",
      "Shaded Parasols",
      "Breakfast Lounge",
      "Garden Seating",
      "Evening Lighting",
      "Reception Desk",
      "Elevator Access",
    ],
  },
];

export const ROOM_PILLS = [
  "Private Balcony",
  "Air Conditioned",
  "Garden & Pool Views",
  "Free WiFi",
  "17 m² Bright Layout",
  "Elevator Access",
];

export const WHY_CHAPTERS: WhyChapter[] = [
  {
    num: "01",
    title: "Sun-drenched pool courtyard — surrounded by calm greenery",
    description:
      "Unwind on cushioned sun loungers beside our crystal-clear outdoor pool, framed by palms, stone terraces, and unhurried Ionian light.",
    image: "/hotel/photo_065.jpg",
    caption: "Outdoor Pool Courtyard",
    progress: 33,
  },
  {
    num: "02",
    title: "Private sunlit balconies — peaceful rest away from the rush",
    description:
      "Step outside each morning to fresh coastal air, tall cypress trees, and quiet Gouvia horizons right from your private balcony.",
    image: "/hotel/photo_031.jpg",
    caption: "Private Sunlit Balconies",
    progress: 66,
  },
  {
    num: "03",
    title: "Morning breakfast & welcoming restaurant lounge",
    description:
      "Start your day effortlessly in our airy, terrazzo-tiled dining room or open-air garden patio before heading out to explore Corfu.",
    image: "/hotel/photo_058.jpg",
    caption: "Breakfast & Restaurant Lounge",
    progress: 100,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    num: "01 / 04",
    pace: "Relaxed",
    title: "Gouvia Beach & Marina",
    description:
      "5 minutes on foot from Marcopolo® — swim in sheltered Ionian waters and dine along the sailboat-lined promenade.",
    image: "/experiences/gouvia-marina-sailboats.jpg",
    credit: { author: "Liilia Moroz", source: "https://commons.wikimedia.org/wiki/File:Guvia_marina.jpg", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
  },
  {
    num: "02 / 04",
    pace: "Half-Day",
    title: "Corfu Venetian Old Town",
    description:
      "10 minutes by car to UNESCO cobblestone lanes, Liston cafés, and golden-hour views from the Old Fortress.",
    image: "/experiences/corfu-liston.jpg",
    credit: { author: "Hajotthu", source: "https://commons.wikimedia.org/wiki/File:Liston_Korfu.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  },
  {
    num: "03 / 04",
    pace: "Half-Day",
    title: "Vlacherna Monastery & Kanoni",
    description:
      "Visit the little white monastery on the water and take in the views from Corfu’s Kanoni peninsula.",
    image: "/experiences/vlacherna-monastery.jpg",
    credit: { author: "Jocelyn Erskine-Kellie", source: "https://commons.wikimedia.org/wiki/File:Vlacherna_Monastery,_Corfu.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  },
  {
    num: "04 / 04",
    pace: "Full-Day",
    title: "Northern Coves & Paleokastritsa",
    description:
      "Gouvia sits at the ideal crossroads for day trips to emerald coves, hilltop monasteries, and Ionian boat charters.",
    image: "/experiences/paleokastritsa-bay.jpg",
    credit: { author: "Dr.K.", source: "https://commons.wikimedia.org/wiki/File:Palaiokastritsa_Bay_in_Corfu.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  },
];

export const GALLERY_CURATED: GalleryPhoto[] = [
  { src: "/enhanced/hotel-twilight.png", title: "Marcopolo Hotel at Twilight" },
  { src: "/hotel/photo_034.jpg", title: "Overhead Pool Courtyard" },
  { src: "/hotel/photo_079.jpg", title: "Illuminated Poolside Patio" },
  { src: "/hotel/photo_024.jpg", title: "Double Room — Morning Light" },
  { src: "/hotel/photo_022.jpg", title: "Triple Room — Family Layout" },
  { src: "/hotel/photo_065.jpg", title: "Outdoor Pool & Loungers" },
  { src: "/hotel/photo_033.jpg", title: "Gouvia Bay Panorama" },
  { src: "/hotel/photo_058.jpg", title: "Restaurant & Breakfast Hall" },
  { src: "/hotel/photo_031.jpg", title: "Private Balcony Views" },
  { src: "/hotel/photo_076.jpg", title: "Evening Entrance" },
  { src: "/hotel/photo_041.jpg", title: "Garden Terrace Seating" },
  { src: "/hotel/photo_056.jpg", title: "Reception & Lobby" },
  { src: "/hotel/photo_026.jpg", title: "Sunlit Dining Bar" },
];

export const REVIEWS: ReviewItem[] = [
  {
    quote:
      "“Staying at Marcopolo® in Gouvia made our Corfu week effortless — spotless rooms, a peaceful pool courtyard, and only a short stroll to the sea.”",
    author: "Elena & Nikos K.",
    origin: "Athens, Greece",
    initials: "EN",
  },
  {
    quote:
      "“Warm, welcoming staff and an unbeatable location between Corfu Town and the northern beaches. Morning coffee on the balcony was our favorite ritual.”",
    author: "Hannah Mitchell",
    origin: "London, United Kingdom",
    initials: "HM",
  },
  {
    quote:
      "“Simple, bright, and genuinely comfortable — everything we needed for a relaxed family stay without paying resort prices. We will definitely return.”",
    author: "Marco Bellini",
    origin: "Milan, Italy",
    initials: "MB",
  },
];

export const MENU_SECTIONS = [
  {
    num: "01",
    label: "Welcome",
    href: "/#welcome",
    img: "/enhanced/hotel-twilight.png",
    caption: "Meet Marcopolo® — sunlit Corfu stays, minutes from Gouvia Beach.",
  },
  {
    num: "02",
    label: "Introduction",
    href: "/#introduction",
    img: "/hotel/photo_034.jpg",
    caption:
      "Overhead quiet: poolside afternoons surrounded by Mediterranean greenery.",
  },
  {
    num: "03",
    label: "Rooms",
    href: "/#rooms",
    routeHref: "/rooms",
    img: "/hotel/photo_024.jpg",
    caption:
      "Sticky stacked Double Room®, Triple Room®, and Pool Courtyard® showcase.",
  },
  {
    num: "04",
    label: "Location",
    href: "/#location",
    routeHref: "/location",
    img: "/hotel/photo_035.jpg",
    caption: "Gouvia, Corfu — 5 min to the beach, 10 min to Corfu Town.",
  },
  {
    num: "05",
    label: "Why Marcopolo®",
    href: "/why-marcopolo",
    routeHref: "/why-marcopolo",
    img: "/hotel/photo_065.jpg",
    caption:
      "Pool courtyard, sunlit balconies, and welcoming morning breakfast lounge.",
  },
  {
    num: "06",
    label: "Experiences",
    href: "/#experiences",
    img: "/hotel/photo_033.jpg",
    caption: "Explore Gouvia Bay, Venetian Old Town, and Ionian coves.",
  },
  {
    num: "07",
    label: "Gallery",
    href: "/#gallery",
    routeHref: "/gallery",
    img: "/hotel/photo_079.jpg",
    caption: "Horizontal scroll gallery of the rooms, pool, and dining lounge.",
  },
  {
    num: "08",
    label: "Contact & Reserve",
    href: "/contact",
    routeHref: "/contact",
    img: "/hotel/photo_058.jpg",
    caption: "Reach our Gouvia reception directly for availability & questions.",
  },
];
