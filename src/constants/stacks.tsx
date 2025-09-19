import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDocker,
  SiElementor,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const STACKS: stacksProps = {
  "Express.js": <SiExpress size={ICON_SIZE} />,
  "Next.js": <SiNextdotjs size={ICON_SIZE} />,
  "Node JS": <SiNodedotjs size={ICON_SIZE} color="#418A3F" />,
  "React.js": <SiReact size={ICON_SIZE} color="#149FCB" />,
  "Vue.js": <SiVuedotjs size={ICON_SIZE} color="#42B883" />,
  Bootstrap: <SiBootstrap size={ICON_SIZE} color="#7952B3" />,
  CSS: <SiCss3 size={ICON_SIZE} color="#214CE5" />,
  Dart: <SiDart size={ICON_SIZE} color="#0175C2" />,
  Docker: <SiDocker size={ICON_SIZE} color="#0DB7ED" />,
  Elementor: <SiElementor size={ICON_SIZE} color="#0F75BC" />,
  Firebase: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  Flutter: <SiFlutter size={ICON_SIZE} color="#02569B" />,
  Github: <SiGithub size={ICON_SIZE} />,
  HTML: <SiHtml5 size={ICON_SIZE} color="#F06525" />,
  JavaScript: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  Laravel: <SiLaravel size={ICON_SIZE} color="#FB503B" />,
  PostgreSql: <BiLogoPostgresql size={ICON_SIZE} color="#336690" />,
  Redis: <SiRedis size={ICON_SIZE} color="#D82C20" />,
  SASS: <SiSass size={ICON_SIZE} color="#CE649B" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  TypeScript: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
  Vite: <SiVite size={ICON_SIZE} color="#689EFE" />,
  WooCommerce: <SiWoocommerce size={ICON_SIZE} color="#96588A" />,
  WordPress: <SiWordpress size={ICON_SIZE} color="#21759B" />,
};
