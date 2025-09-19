// 🎨 30 Color Palettes
export const COLOR_PALETTES = [
  { primary: "#0F172A", secondary: "#38BDF8", name: "Dark Terminal & Cyan" },
  { primary: "#1E293B", secondary: "#FACC15", name: "Dark Slate & Yellow" },
  { primary: "#111827", secondary: "#34D399", name: "Night Mode & Green" },
  { primary: "#1E1E2F", secondary: "#C084FC", name: "Code Editor & Purple" },
  { primary: "#0F172A", secondary: "#F472B6", name: "Dark Terminal & Pink" },
  { primary: "#1E293B", secondary: "#F97316", name: "Slate & Orange" },
  { primary: "#111827", secondary: "#60A5FA", name: "Dark Mode & Blue" },
  { primary: "#1E1E2F", secondary: "#FACC15", name: "Editor Background & Yellow" },
  { primary: "#0F172A", secondary: "#22D3EE", name: "Terminal Cyan & Aqua" },
  { primary: "#1E293B", secondary: "#A78BFA", name: "Slate & Soft Violet" },
  { primary: "#111827", secondary: "#F87171", name: "Dark Mode & Coral" },
  { primary: "#1E1E2F", secondary: "#34D399", name: "Editor Background & Green" },
  { primary: "#0F172A", secondary: "#F472B6", name: "Terminal Pink & Magenta" },
  { primary: "#1E293B", secondary: "#38BDF8", name: "Slate & Cyan" },
  { primary: "#111827", secondary: "#FACC15", name: "Dark Mode & Yellow" },
  { primary: "#1E1E2F", secondary: "#C084FC", name: "Editor & Purple" },
  { primary: "#0F172A", secondary: "#60A5FA", name: "Terminal Blue & Sky" },
  { primary: "#1E293B", secondary: "#F97316", name: "Slate & Orange" },
  { primary: "#111827", secondary: "#22D3EE", name: "Dark Mode & Aqua" },
  { primary: "#1E1E2F", secondary: "#A78BFA", name: "Editor & Soft Violet" }
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
