// 🎨 30 Color Palettes
export const COLOR_PALETTES = [
  { primary: "#0EA5E9", secondary: "#A7F3D0", name: "Sky & Mint" },
  { primary: "#8B5CF6", secondary: "#E9D5FF", name: "Purple & Lavender" },
  { primary: "#F43F5E", secondary: "#FECDD3", name: "Rose & Pink" },
  { primary: "#10B981", secondary: "#D1FAE5", name: "Emerald & Green" },
  { primary: "#F97316", secondary: "#FED7AA", name: "Orange & Peach" },
  { primary: "#6366F1", secondary: "#C7D2FE", name: "Indigo & Blue" },
  { primary: "#14B8A6", secondary: "#B2F5EA", name: "Teal & Cyan" },
  { primary: "#F59E0B", secondary: "#FEF3C7", name: "Amber & Yellow" },
  { primary: "#EC4899", secondary: "#A78BFA", name: "Pink & Purple" },
  { primary: "#00D9FF", secondary: "#4FFFB0", name: "Neon Cyber" },
  { primary: "#1E40AF", secondary: "#F97316", name: "Deep Blue & Orange" },
  { primary: "#065F46", secondary: "#D9F99D", name: "Forest & Lime" },
  { primary: "#F87171", secondary: "#FFD6CC", name: "Coral & Peach" },
  { primary: "#8B5CF6", secondary: "#22D3EE", name: "Violet & Cyan" },
  { primary: "#4B5563", secondary: "#F3F4F6", name: "Gray & White" },
  { primary: "#FB923C", secondary: "#F9A8D4", name: "Sunset Orange & Pink" },
  { primary: "#2563EB", secondary: "#CFFAFE", name: "Ocean & Seafoam" },
  { primary: "#FBBF24", secondary: "#FEF3C7", name: "Golden & Sand" },
  { primary: "#7C3AED", secondary: "#6366F1", name: "Dark Purple & Indigo" },
  { primary: "#DB2777", secondary: "#F9A8D4", name: "Magenta & Pink" },
  { primary: "#FACC15", secondary: "#FEF9C3", name: "Sunshine Yellow" },
  { primary: "#EC4899", secondary: "#FBCFE8", name: "Hot Pink & Light Pink" },
  { primary: "#0D9488", secondary: "#A7F3D0", name: "Teal & Mint" },
  { primary: "#6366F1", secondary: "#E0E7FF", name: "Indigo & Soft Blue" },
  { primary: "#F97316", secondary: "#FFD8A8", name: "Tangerine & Peach" },
  { primary: "#14B8A6", secondary: "#CFFAFE", name: "Aqua & Light Cyan" },
  { primary: "#F43F5E", secondary: "#FECDD3", name: "Crimson & Pink" },
  { primary: "#8B5CF6", secondary: "#DDD6FE", name: "Violet & Lilac" },
  { primary: "#22D3EE", secondary: "#E0F2FE", name: "Cyan & Sky" },
  { primary: "#F59E0B", secondary: "#FEF3C7", name: "Amber & Light Yellow" }
];

// 🔄 Dynamic Color Selection Functions
export const getColorByTime = () => {
  const hour = new Date().getHours();
  const index = Math.floor((hour / 24) * COLOR_PALETTES.length);
  return COLOR_PALETTES[index];
};

export const getColorByDay = () => {
  const day = new Date().getDay(); // 0-6 (Sunday-Saturday)
  const index = day % COLOR_PALETTES.length;
  return COLOR_PALETTES[index];
};

export const getColorByMonth = () => {
  const month = new Date().getMonth(); // 0-11
  const index = month % COLOR_PALETTES.length;
  return COLOR_PALETTES[index];
};

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * COLOR_PALETTES.length);
  return COLOR_PALETTES[index];
};

export const getColorByVisit = () => {
  // Use localStorage to track visits (client-side only)
  if (typeof window !== 'undefined') {
    const visits = parseInt(localStorage.getItem('colorVisits') || '0');
    const newVisits = visits + 1;
    localStorage.setItem('colorVisits', newVisits.toString());
    const index = newVisits % COLOR_PALETTES.length;
    return COLOR_PALETTES[index];
  }
  return COLOR_PALETTES[0]; // Fallback for server-side
};

export const getColorByPath = (pathname: string) => {
  // Generate color based on path hash
  const hash = pathname.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  const index = Math.abs(hash) % COLOR_PALETTES.length;
  return COLOR_PALETTES[index];
};

// 🎯 Main Color Selection Strategy
export const getActiveColorPalette = (strategy: 'time' | 'day' | 'month' | 'random' | 'visit' | 'path' = 'day', pathname?: string) => {
  switch (strategy) {
    case 'time':
      return getColorByTime();
    case 'day':
      return getColorByDay();
    case 'month':
      return getColorByMonth();
    case 'random':
      return getRandomColor();
    case 'visit':
      return getColorByVisit();
    case 'path':
      return getColorByPath(pathname || '/');
    default:
      return getColorByDay();
  }
};

// 📱 Current Active Colors (Default: changes by day)
const currentPalette = getActiveColorPalette('random'); // Change strategy here!

export const PRIMARY_COLOR = currentPalette.primary;
export const SECONDARY_COLOR = currentPalette.secondary;
export const COLOR_SCHEME_NAME = currentPalette.name;
