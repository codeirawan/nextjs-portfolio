import CryptoJS from "crypto-js";

const gravatarEmail = "codeirawan@gmail.com";
const gravatarHash = CryptoJS.MD5(gravatarEmail.trim().toLowerCase()).toString();

export const PROFILE_PICTURE_URL = `https://www.gravatar.com/avatar/${gravatarHash}?s=200&d=identicon`;

export const CV_URL = "/";

export const BLOG_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://codeirawan.vercel.app/api/blog"
    : "http://localhost:3000/api/blog";

export const PAGESPEED_CATEGORIES =
  "&category=accessibility&category=performance&category=best-practices&category=seo";

export const PRIMARY_COLOR = "var(--primary-color)";
export const SECONDARY_COLOR = "var(--secondary-color)";
