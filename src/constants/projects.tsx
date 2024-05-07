import {
  SiBootstrap,
  SiDocker,
  SiFigma,
  SiInertia,
  SiLaravel,
  SiReact,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_STACK_BUKUPINTAR = [
  {
    label: "React",
    icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
  },
  {
    label: "Laravel",
    icon: <SiLaravel size={ICON_SIZE} color="#F23B2F" />,
  },
  {
    label: "Inertia",
    icon: <SiInertia size={ICON_SIZE} color="#9355E9" />,
  },
  {
    label: "Docker",
    icon: <SiDocker size={ICON_SIZE} color="#0DB7ED" />,
  },
  // {
  //   label: "Figma",
  //   icon: <SiFigma size={ICON_SIZE} color="#FF0080" />,
  // },
];

export const TECH_STACK_YOREDU = [
  {
    label: "Laravel",
    icon: <SiLaravel size={ICON_SIZE} color="#F23B2F" />,
  },
  {
    label: "Bootstrap",
    icon: <SiBootstrap size={ICON_SIZE} color="#6E2BF2" />,
  },
];

export const PROJECTCARD_CONTENTS = [
  {
    url: "https://bukupintar.app/",
    name: "bukupintar",
    description:
      "Cloud accounting software aids Indonesian and Japanese accountants, effectively managing finances for over 120 Japanese company subsidiaries.",
    techStack: TECH_STACK_BUKUPINTAR,
    image:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715094185/bebas_akuntansi.png",
    imageAlt: "bukupintar. Website Screenshot",
  },
  {
    url: "https://yoredu.app/",
    name: "yoredu",
    description:
      "e-Course platform facilitates perpetual learning, serving as an expansive gateway to endless educational opportunities for global knowledge seekers.",
    techStack: TECH_STACK_YOREDU,
    image:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715089658/yoredu.png",
    imageAlt: "yoredu e-courses Website Screenshot",
  },
];
