export type Category = {
  id: string;
  label: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  cat: string;
  price: number;
  image: string;
};

const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

const CAT_IMG: Record<string, string> = {
  "soft-drinks": IMG("1554866585-cd94860890b7"),
  "wines-spirits": IMG("1569529465841-dfecdab7503b"),
  "bread-pastries": IMG("1509440159596-0249088772ff"),
  "baby-care": IMG("1515488042361-ee00e0ddd4e4"),
  "dairy-butter": IMG("1550583724-b2692b85b150"),
  snacks: IMG("1621939514649-280e2ee25f60"),
  provisions: IMG("1586201375761-83865001e31c"),
  household: IMG("1583947215259-38e31be8751f"),
};

export const CATEGORIES: Category[] = [
  { id: "soft-drinks", label: "Soft Drinks & Juices", image: CAT_IMG["soft-drinks"] },
  { id: "wines-spirits", label: "Wines & Spirits", image: CAT_IMG["wines-spirits"] },
  { id: "bread-pastries", label: "Bread & Pastries", image: CAT_IMG["bread-pastries"] },
  { id: "baby-care", label: "Baby Care & Essentials", image: CAT_IMG["baby-care"] },
  { id: "dairy-butter", label: "Dairy & Butter", image: CAT_IMG["dairy-butter"] },
  { id: "snacks", label: "Snacks & Confectionery", image: CAT_IMG["snacks"] },
  { id: "provisions", label: "Provisions & Groceries", image: CAT_IMG["provisions"] },
  { id: "household", label: "Household & Cleaning", image: CAT_IMG["household"] },
];

const raw: Array<Omit<Product, "image">> = [
  { id: "sd1", name: "Coca-Cola 50cl", cat: "soft-drinks", price: 500 },
  { id: "sd2", name: "Fanta Orange 50cl", cat: "soft-drinks", price: 500 },
  { id: "sd3", name: "Sprite 50cl", cat: "soft-drinks", price: 500 },
  { id: "sd4", name: "Chivita 100% Active Orange 1L", cat: "soft-drinks", price: 1800 },
  { id: "sd5", name: "Five Alive Pulpy Orange 1L", cat: "soft-drinks", price: 1700 },
  { id: "sd6", name: "Hollandia Yoghurt Drink 1L", cat: "soft-drinks", price: 1900 },
  { id: "sd7", name: "Bigi Cola 50cl", cat: "soft-drinks", price: 400 },
  { id: "sd8", name: "Malta Guinness 33cl", cat: "soft-drinks", price: 600 },
  { id: "sd9", name: "Eva Premium Table Water 75cl", cat: "soft-drinks", price: 300 },
  { id: "sd10", name: "Predator Energy Drink 33cl", cat: "soft-drinks", price: 450 },

  { id: "ws1", name: "Hennessy VS Cognac 70cl", cat: "wines-spirits", price: 45000 },
  { id: "ws2", name: "Jack Daniel's Whiskey 70cl", cat: "wines-spirits", price: 38000 },
  { id: "ws3", name: "Baileys Irish Cream 70cl", cat: "wines-spirits", price: 22000 },
  { id: "ws4", name: "Moët & Chandon Champagne 75cl", cat: "wines-spirits", price: 85000 },
  { id: "ws5", name: "Smirnoff Vodka 75cl", cat: "wines-spirits", price: 12500 },
  { id: "ws6", name: "Guinness Foreign Extra Stout 60cl", cat: "wines-spirits", price: 900 },
  { id: "ws7", name: "Heineken Lager Beer 60cl", cat: "wines-spirits", price: 850 },
  { id: "ws8", name: "Star Lager Beer 60cl", cat: "wines-spirits", price: 750 },
  { id: "ws9", name: "Four Cousins Red Wine 75cl", cat: "wines-spirits", price: 8500 },
  { id: "ws10", name: "Orijin Bitters 20cl", cat: "wines-spirits", price: 700 },

  { id: "bp1", name: "Agege Sliced Bread (Large)", cat: "bread-pastries", price: 1500 },
  { id: "bp2", name: "Butter Bread Loaf", cat: "bread-pastries", price: 1300 },
  { id: "bp3", name: "Meat Pie (Pack of 4)", cat: "bread-pastries", price: 2000 },
  { id: "bp4", name: "Sausage Roll (Pack of 6)", cat: "bread-pastries", price: 2200 },
  { id: "bp5", name: "Chin Chin 500g", cat: "bread-pastries", price: 1800 },
  { id: "bp6", name: "Doughnut (Pack of 6)", cat: "bread-pastries", price: 1500 },
  { id: "bp7", name: "Puff Puff (Pack of 10)", cat: "bread-pastries", price: 1200 },
  { id: "bp8", name: "Banana Bread Loaf", cat: "bread-pastries", price: 2000 },
  { id: "bp9", name: "Meat Pie Family Pack (12pcs)", cat: "bread-pastries", price: 5500 },
  { id: "bp10", name: "Coconut Cookies 400g", cat: "bread-pastries", price: 1600 },

  { id: "bc1", name: "Pampers Baby Dry Diapers (Size 3, Pack)", cat: "baby-care", price: 8500 },
  { id: "bc2", name: "Pampers Baby Dry Diapers (Size 4, Pack)", cat: "baby-care", price: 9000 },
  { id: "bc3", name: "SMA Gold Infant Formula 900g", cat: "baby-care", price: 12500 },
  { id: "bc4", name: "NAN Optipro Infant Formula 900g", cat: "baby-care", price: 13000 },
  { id: "bc5", name: "Cerelac Infant Cereal 400g", cat: "baby-care", price: 4500 },
  { id: "bc6", name: "Johnson's Baby Powder 200g", cat: "baby-care", price: 2200 },
  { id: "bc7", name: "Johnson's Baby Oil 200ml", cat: "baby-care", price: 2000 },
  { id: "bc8", name: "Baby Wipes (80 count)", cat: "baby-care", price: 1800 },
  { id: "bc9", name: "Nivea Baby Lotion 200ml", cat: "baby-care", price: 2500 },
  { id: "bc10", name: "Huggies Diapers (Size 2, Pack)", cat: "baby-care", price: 8000 },

  { id: "db1", name: "Blueband Margarine 500g", cat: "dairy-butter", price: 2200 },
  { id: "db2", name: "Blueband Margarine 1kg", cat: "dairy-butter", price: 4200 },
  { id: "db3", name: "SanoButter Salted 250g", cat: "dairy-butter", price: 3000 },
  { id: "db4", name: "Peak Milk Powder 400g", cat: "dairy-butter", price: 3200 },
  { id: "db5", name: "Peak Evaporated Milk (170g Tin)", cat: "dairy-butter", price: 700 },
  { id: "db6", name: "Cowbell Milk Powder 400g", cat: "dairy-butter", price: 2900 },
  { id: "db7", name: "Ireland Cheese Spread 140g", cat: "dairy-butter", price: 1900 },
  { id: "db8", name: "Yoghurt Parfait Cup 150ml", cat: "dairy-butter", price: 900 },
  { id: "db9", name: "Fresh Eggs (Crate of 30)", cat: "dairy-butter", price: 3800 },
  { id: "db10", name: "President Unsalted Butter 200g", cat: "dairy-butter", price: 4500 },

  { id: "sn1", name: "Pringles Original 165g", cat: "snacks", price: 3200 },
  { id: "sn2", name: "Gala Sausage Roll", cat: "snacks", price: 300 },
  { id: "sn3", name: "Indomie Instant Noodles (Pack of 5)", cat: "snacks", price: 1300 },
  { id: "sn4", name: "Digestive Biscuits 250g", cat: "snacks", price: 1600 },
  { id: "sn5", name: "Cadbury Bournvita 500g", cat: "snacks", price: 4800 },
  { id: "sn6", name: "Golden Morn Cereal 900g", cat: "snacks", price: 3900 },
  { id: "sn7", name: "Pringles Sour Cream 165g", cat: "snacks", price: 3200 },
  { id: "sn8", name: "Roasted Peanuts 500g", cat: "snacks", price: 2000 },
  { id: "sn9", name: "Kit Kat Chocolate Bar", cat: "snacks", price: 1200 },
  { id: "sn10", name: "Plantain Chips 200g", cat: "snacks", price: 1500 },

  { id: "pv1", name: "Local Rice (5kg Bag)", cat: "provisions", price: 6500 },
  { id: "pv2", name: "Foreign Rice (10kg Bag)", cat: "provisions", price: 14500 },
  { id: "pv3", name: "Golden Penny Spaghetti 500g", cat: "provisions", price: 1100 },
  { id: "pv4", name: "Devon Kings Vegetable Oil 1L", cat: "provisions", price: 2800 },
  { id: "pv5", name: "Kings Groundnut Oil 1L", cat: "provisions", price: 3500 },
  { id: "pv6", name: "Maggi Star Seasoning Cubes (Pack)", cat: "provisions", price: 900 },
  { id: "pv7", name: "Dangote Sugar 1kg", cat: "provisions", price: 1700 },
  { id: "pv8", name: "Brown Beans 5kg", cat: "provisions", price: 8500 },
  { id: "pv9", name: "Semovita 1kg", cat: "provisions", price: 1400 },
  { id: "pv10", name: "Iodized Salt 500g", cat: "provisions", price: 400 },

  { id: "hh1", name: "Omo Detergent Powder 900g", cat: "household", price: 2900 },
  { id: "hh2", name: "Morning Fresh Dishwashing Liquid 900ml", cat: "household", price: 2200 },
  { id: "hh3", name: "Harpic Toilet Cleaner 500ml", cat: "household", price: 1900 },
  { id: "hh4", name: "Dettol Antiseptic 500ml", cat: "household", price: 2800 },
  { id: "hh5", name: "Ambipur Air Freshener", cat: "household", price: 3200 },
  { id: "hh6", name: "Kiwi Kleen Toilet Roll (Pack of 12)", cat: "household", price: 3500 },
  { id: "hh7", name: "Ariel Detergent Powder 1kg", cat: "household", price: 3600 },
  { id: "hh8", name: "Zip Bleach 1L", cat: "household", price: 900 },
  { id: "hh9", name: "Scouring Sponge Pack", cat: "household", price: 1000 },
  { id: "hh10", name: "Mortein Insecticide Spray", cat: "household", price: 2500 },
];

export const PRODUCTS: Product[] = raw.map((p) => ({
  ...p,
  image: CAT_IMG[p.cat],
}));

export const CONFIG = {
  whatsappNumber: "2348000000000",
  freeDeliveryThreshold: 25000,
  deliveryFee: 1500,
  instagram: "https://www.instagram.com/ozzyy_superstores",
  maps: "https://maps.app.goo.gl/78qetMpA7azy9Fwj9",
  phone: "+234 800 000 0000",
};

export const fmtNaira = (n: number) => "₦" + n.toLocaleString("en-NG");
