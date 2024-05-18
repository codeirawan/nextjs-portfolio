import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants";

export const THEME_COLORS = [
  {
    title: "Light Background",
    subTitle: "#ffffff",
    colorClassName: "#ffffff",
  },
  {
    title: "Dark Background",
    subTitle: "#121212",
    colorClassName: "#121212",
  },
  {
    title: "Primary Dark",
    subTitle: "#f3f4f6",
    colorClassName: "#f3f4f6",
  },
  {
    title: "Secondary Dark",
    subTitle: "#e5e7eB",
    colorClassName: "#e5e7eB",
  },
  {
    title: "Primary Light",
    subTitle: "#1f2937",
    colorClassName: "#1f2937",
  },
  {
    title: "Secondary Light",
    subTitle: "#374151",
    colorClassName: "#374151",
  },
  {
    title: "Gradient",
    subTitle: `${PRIMARY_COLOR} to ${SECONDARY_COLOR}`,
    colorClassName: `linear-gradient(to right, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
  },
];
