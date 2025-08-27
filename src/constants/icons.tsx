import React from "react";
import {
  SiAstro,
  SiBootstrap,
  SiDocker,
  SiInertia,
  SiLaravel,
  SiNuxtdotjs,
  SiOpencv,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVuedotjs,
  SiCodeigniter,
  SiPhp,
  SiMysql,
} from "react-icons/si";

export const ICON_SIZE = 24;

export const ICON_STACK: Record<
  string,
  { icon: React.ComponentType<any>; color: string }
> = {
  Astro: { icon: SiAstro, color: "#000000" },
  Bootstrap: { icon: SiBootstrap, color: "#6E2BF2" },
  Docker: { icon: SiDocker, color: "#0DB7ED" },
  Inertia: { icon: SiInertia, color: "#9355E9" },
  Laravel: { icon: SiLaravel, color: "#F23B2F" },
  Nuxt: { icon: SiNuxtdotjs, color: "#00C678" },
  OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
  Python: { icon: SiPython, color: "#3776AB" },
  React: { icon: SiReact, color: "#149FCB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Vue: { icon: SiVuedotjs, color: "#43B882" },
  "CodeIgniter 4": { icon: SiCodeigniter, color: "#DD4814" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  MySQL: { icon: SiMysql, color: "#00758F" },
};

export const renderIcon = (techName: string) => {
  const entry = ICON_STACK[techName];
  if (!entry) return <></>;
  const { icon: Icon, color } = entry;
  return <Icon size={ICON_SIZE} color={color} />;
};
