import {
  SiAstro,
  SiBootstrap,
  SiDocker,
  SiInertia,
  SiLaravel,
  SiOpencv,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const ICON_SIZE = 24;

const ICON_STACK = {
  Astro: <SiAstro size={ICON_SIZE} color="#000000" />,
  Bootstrap: <SiBootstrap size={ICON_SIZE} color="#6E2BF2" />,
  Docker: <SiDocker size={ICON_SIZE} color="#0DB7ED" />,
  Inertia: <SiInertia size={ICON_SIZE} color="#9355E9" />,
  Laravel: <SiLaravel size={ICON_SIZE} color="#F23B2F" />,
  OpenCV: <SiOpencv size={ICON_SIZE} color="#5C3EE8" />,
  Python: <SiPython size={ICON_SIZE} color="#3776AB" />,
  React: <SiReact size={ICON_SIZE} color="#149FCB" />,
  Tailwind: <SiTailwindcss size={ICON_SIZE} color="#06B6D4" />,
  Vercel: <SiVercel size={ICON_SIZE} color="#000000" />,
};

export const PROJECT_CARD_CONTENTS = [
  {
    url: "https://bukupintar.app/",
    name: "bukupintar",
    description:
      "Cloud accounting software aids Indonesian and Japanese accountants, effectively managing finances for over 120 Japanese company subsidiaries.",
    techStack: [
      { label: "React", icon: ICON_STACK.React },
      { label: "Laravel", icon: ICON_STACK.Laravel },
      { label: "Inertia", icon: ICON_STACK.Inertia },
      { label: "Docker", icon: ICON_STACK.Docker },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715094185/bebas_akuntansi.png",
    imageAlt: "bukupintar. Website Screenshot",
  },
  {
    url: "https://yoredu.app/",
    name: "yoredu",
    description:
      "e-Course platform facilitates perpetual learning, serving as an expansive gateway to endless educational opportunities for global knowledge seekers.",
    techStack: [
      { label: "Laravel", icon: ICON_STACK.Laravel },
      { label: "Bootstrap", icon: ICON_STACK.Bootstrap },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715089658/yoredu.png",
    imageAlt: "yoredu e-courses Website Screenshot",
  },
  {
    url: "https://github.com/codeirawan/opencv-object-counting/",
    name: "iot object counting",
    description:
      "A project utilizing Python and OpenCV for object detection and counting in images and videos.",
    techStack: [
      { label: "Python", icon: ICON_STACK.Python },
      { label: "OpenCV", icon: ICON_STACK.OpenCV },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1718250270/iot-object-counting.png",
    imageAlt: "iot object counting screenshot",
  },
  {
    url: "https://astro-codeirawan.vercel.app/",
    name: "astro portfolio",
    description:
      "Personal portfolio showcasing projects built with Astro framework, hosted on Vercel, styled with Tailwind CSS.",
    techStack: [
      { label: "Astro", icon: ICON_STACK.Astro },
      { label: "Vercel", icon: ICON_STACK.Vercel },
      { label: "Tailwind CSS", icon: ICON_STACK.Tailwind },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1718251341/astro-portfolio.png",
    imageAlt: "astro portfolio screenshot",
  },
];
