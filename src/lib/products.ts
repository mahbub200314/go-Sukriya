export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
};

export const flashSaleProducts: Product[] = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", category: "Electronics", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80", price: 120, oldPrice: 160, discount: 25, rating: 5, reviews: 88, description: "A responsive wireless gamepad built for comfortable everyday gaming." },
  { id: 2, name: "AK-900 Wired Keyboard", category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80", price: 960, oldPrice: 1160, discount: 17, rating: 4, reviews: 75, description: "A reliable wired keyboard with a comfortable layout for work and play." },
  { id: 3, name: "IPS LCD Gaming Monitor", category: "Electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", price: 370, oldPrice: 400, discount: 8, rating: 5, reviews: 99, description: "Enjoy clear visuals and smooth gameplay on this IPS display." },
  { id: 4, name: "S-Series Comfort Chair", category: "Home & Lifestyle", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80", price: 375, oldPrice: 400, discount: 6, rating: 4, reviews: 99, description: "A supportive chair designed to bring comfort to your home or workspace." },
  { id: 5, name: "S-Series Comfortable Chair", category: "Home & Lifestyle", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80", price: 375, oldPrice: 490, discount: 23, rating: 4, reviews: 65, description: "A versatile chair with a clean look and a comfortable seat." },
  { id: 6, name: "Gaming Headset", category: "Electronics", image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80", price: 250, oldPrice: 350, discount: 29, rating: 5, reviews: 120, description: "Immersive sound and a comfortable fit for long gaming sessions." },
];

export const exploreProducts: Product[] = [
  { id: 1, name: "Wireless Gamepad", category: "Electronics", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80", price: 120, oldPrice: 160, discount: 25, rating: 5, reviews: 88, description: "A responsive wireless gamepad built for comfortable everyday gaming." },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80", price: 96, oldPrice: 120, discount: 20, rating: 4, reviews: 75, description: "A mechanical keyboard with satisfying feedback for gaming and productivity." },
  { id: 3, name: "Studio Headphones", category: "Electronics", image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80", price: 75, oldPrice: 100, discount: 25, rating: 5, reviews: 120, description: "Comfortable headphones for focused listening at home or on the go." },
  { id: 4, name: "Digital Camera", category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", price: 420, oldPrice: 500, discount: 16, rating: 4, reviews: 54, description: "Capture everyday moments with this versatile digital camera." },
  { id: 5, name: "Everyday Running Shoes", category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", price: 65, oldPrice: 85, discount: 24, rating: 5, reviews: 102, description: "Lightweight running shoes made for training and daily movement." },
  { id: 6, name: "Training Football", category: "Sports", image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0c1c?auto=format&fit=crop&w=800&q=80", price: 28, oldPrice: 35, discount: 20, rating: 4, reviews: 41, description: "A durable football for training sessions and casual matches." },
  { id: 7, name: "Active Sportswear", category: "Sports", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80", price: 48, oldPrice: 60, discount: 20, rating: 4, reviews: 63, description: "Comfortable activewear designed to move with you during a workout." },
  { id: 8, name: "Outdoor Backpack", category: "Sports & Outdoor", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", price: 55, oldPrice: 70, discount: 21, rating: 5, reviews: 87, description: "A practical backpack for day trips, commuting, and outdoor adventures." },
  { id: 9, name: "Daily Wellness Tablets", category: "Medicine", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", price: 18, oldPrice: 22, discount: 18, rating: 4, reviews: 39, description: "Everyday wellness tablets. Follow package directions and ask a qualified professional if you have questions." },
  { id: 10, name: "First Aid Kit", category: "Medicine", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80", price: 24, oldPrice: 30, discount: 20, rating: 5, reviews: 56, description: "A handy first aid kit for keeping basic care essentials together at home or on the go." },
  { id: 11, name: "Vitamin C Supplements", category: "Medicine", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80", price: 15, oldPrice: 19, discount: 21, rating: 4, reviews: 72, description: "Vitamin C supplements. Follow the label directions and seek professional advice when needed." },
  { id: 12, name: "Home Health Monitor", category: "Medicine & Health", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", price: 39, oldPrice: 49, discount: 20, rating: 5, reviews: 48, description: "A convenient home health monitor for everyday personal tracking." },
];
