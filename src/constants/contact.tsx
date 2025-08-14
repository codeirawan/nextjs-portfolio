import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ICON_SIZE: number = 20;

export const CONTACT_ITEMS = [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    url: "https://github.com/codeirawan",
    label: "GitHub",
    backgroundColor: "#262626",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: "https://www.linkedin.com/in/codeirawan/",
    label: "LinkedIn",
    backgroundColor: "#0A66C2",
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: "https://www.instagram.com/codeirawan/",
    label: "Instagram",
    backgroundColor: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
  },
  {
    icon: <FaWhatsapp size={ICON_SIZE} />,
    url: "https://wa.me/628999393662",
    label: "WhatsApp",
    backgroundColor: "#25D366",
  },
];
