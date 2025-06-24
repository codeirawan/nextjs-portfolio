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
} from "react-icons/si";

const ICON_SIZE = 24;

const ICON_STACK = {
  Astro: <SiAstro size={ICON_SIZE} color="#000000" />,
  Bootstrap: <SiBootstrap size={ICON_SIZE} color="#6E2BF2" />,
  Docker: <SiDocker size={ICON_SIZE} color="#0DB7ED" />,
  Inertia: <SiInertia size={ICON_SIZE} color="#9355E9" />,
  Laravel: <SiLaravel size={ICON_SIZE} color="#F23B2F" />,
  Nuxt: <SiNuxtdotjs size={ICON_SIZE} color="#00C678" />,
  OpenCV: <SiOpencv size={ICON_SIZE} color="#5C3EE8" />,
  Python: <SiPython size={ICON_SIZE} color="#3776AB" />,
  React: <SiReact size={ICON_SIZE} color="#149FCB" />,
  Tailwind: <SiTailwindcss size={ICON_SIZE} color="#06B6D4" />,
  Vercel: <SiVercel size={ICON_SIZE} color="#000000" />,
  Vue: <SiVuedotjs size={ICON_SIZE} color="#43B882" />,
};

export const PROJECT_CARD_CONTENTS = [
  {
    url: "https://jurnale.vercel.app/",
    name: "jurnale",
    description:
      "Accounting platform with journal entries, transaction tracking, and complete financial reporting tools.",
    techStack: [
      { label: "Laravel", icon: ICON_STACK.Laravel },
      { label: "Bootstrap", icon: ICON_STACK.Bootstrap },
      { label: "Vercel", icon: ICON_STACK.Vercel },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1750735287/jurnale-accounting.png",
    imageAlt: "jurnale accounting system screenshot",
  },
  {
    url: "https://kensyu.vercel.app/",
    name: "kensyu",
    description:
      "A Japanese dental internship search portal that helps students find nationwide clinical training programs with modern UI and responsive filtering system.",
    techStack: [
      { label: "React", icon: ICON_STACK.React },
      { label: "Tailwind CSS", icon: ICON_STACK.Tailwind },
      { label: "Vercel", icon: ICON_STACK.Vercel },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1750671368/dentist-training.jpg",
    imageAlt: "kensyu dental internship portal screenshot",
  },
  {
    url: "https://kushikatsu-daruma.vercel.app/",
    name: "kushikatsu daruma",
    description:
      "Landing page for Kushikatsu Daruma Indonesia, presenting authentic Osaka-style kushikatsu experience in Jakarta with responsive layout and modern frontend stack.",
    techStack: [
      { label: "React", icon: ICON_STACK.React },
      { label: "Tailwind CSS", icon: ICON_STACK.Tailwind },
      { label: "Vercel", icon: ICON_STACK.Vercel },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1750666449/kushikatsu-daruma.png",
    imageAlt: "kushikatsu daruma landing page screenshot",
  },
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
    imageAlt: "bukupintar screenshot",
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
    imageAlt: "yoredu e-courses screenshot",
  },
  {
    url: "https://projects.co.id/user/my_projects/show_thread/8e211b/slicing-2-image-to-responsive-page-with-tailwind",
    name: "slicing like airbnb",
    description:
      "Slicing images to responsive page with Tailwind CSS.",
    techStack: [
      { label: "Vue.js", icon: ICON_STACK.Vue},
      { label: "Nuxt.js", icon: ICON_STACK.Nuxt},
      { label: "Tailwind CSS", icon: ICON_STACK.Tailwind },
      { label: "Vercel", icon: ICON_STACK.Vercel },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1718259014/950c938b-2e8d-4fde-b71b-a6bdf64c918a.png",
    imageAlt: "slicing like airbnb screenshot",
  },
  {
    url: "https://projects.co.id/user/my_projects/view/d6121b/view-antrian-dokter-antrian-farmasi-monitor-komputer-antrian-pdf-general-concent-pdf-uang-laravel-blade-snapy",
    name: "antrian klinik",
    description:
      "View Antrian Dokter, Antrian Farmasi, Monitor komputer Antrian, PDF general concent, PDF UANG laravel blade SNAPY",
    techStack: [
      { label: "Laravel", icon: ICON_STACK.Laravel },
      { label: "Bootstrap", icon: ICON_STACK.Bootstrap },
    ],
    image: "https://res.cloudinary.com/dtgzydbp2/image/upload/v1718258072/antrian-klinik.png",
    imageAlt: "antrian klinik screenshot",
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
