// 🎨 Premier League Inspired Color Palettes
export const COLOR_PALETTES = [
  { primary: "#360D3A", secondary: "#FF2882", name: "Premier League Purple" },
  { primary: "#00FF85", secondary: "#360D3A", name: "Neon Green & Deep Purple" },
  { primary: "#95C11F", secondary: "#512D6D", name: "Lime Green & Royal Purple" },
  { primary: "#05F0FF", secondary: "#29003D", name: "Cyan & Dark Violet" },
  { primary: "#FF005C", secondary: "#2E0057", name: "Magenta & Indigo" },
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
