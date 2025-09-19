// 🎨 30 Color Palettes
export const COLOR_PALETTES = [
  { primary: "#A0522D", secondary: "#FFE4C4", name: "Sienna & Beige" },
  { primary: "#8B4513", secondary: "#F5DEB3", name: "Saddle Brown & Wheat" },
  { primary: "#556B2F", secondary: "#CDEAC0", name: "Dark Olive & Soft Green" },
  { primary: "#D2691E", secondary: "#FFE0B2", name: "Chocolate & Light Peach" },
  { primary: "#A0522D", secondary: "#F0E68C", name: "Sienna & Khaki" },
  { primary: "#6B4226", secondary: "#EEDFCC", name: "Coffee & Cream" },
  { primary: "#808000", secondary: "#F5F5DC", name: "Olive & Beige" },
  { primary: "#CD853F", secondary: "#FFF5E1", name: "Peru & Light Sand" },
  { primary: "#2E8B57", secondary: "#D0E8D0", name: "Sea Green & Mint" },
  { primary: "#8B4513", secondary: "#FFEFD5", name: "Saddle Brown & Papaya" },
  { primary: "#B8860B", secondary: "#FFF8DC", name: "Dark Goldenrod & Cornsilk" },
  { primary: "#A0522D", secondary: "#F5F5DC", name: "Sienna & Soft Beige" },
  { primary: "#CD853F", secondary: "#FAF0E6", name: "Peru & Linen" },
  { primary: "#556B2F", secondary: "#E6F2E6", name: "Dark Olive & Pale Green" },
  { primary: "#6B4226", secondary: "#FFEBCD", name: "Coffee & Blanched Almond" },
  { primary: "#8B4513", secondary: "#FFF5EE", name: "Saddle Brown & Seashell" },
  { primary: "#D2B48C", secondary: "#FFF8DC", name: "Tan & Cornsilk" },
  { primary: "#808000", secondary: "#FAFAD2", name: "Olive & Light Golden" },
  { primary: "#CD853F", secondary: "#FFF0E0", name: "Peru & Soft Peach" },
  { primary: "#2E8B57", secondary: "#E0F0E0", name: "Sea Green & Light Mint" }
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
